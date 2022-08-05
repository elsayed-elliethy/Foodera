import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { NavLink, useParams } from "react-router-dom";
import foodsImg from "../../assets/foods.png";
import Categories from "../../components/category/Categories";
import "./Category.css";
const Category = () => {
  // /////////////
  const { categoryName } = useParams();
  const [cuisineProducts, setCuisineProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();
  const check = localStorage.getItem(categoryName);
  useEffect(() => {
    if (check) {
      setCuisineProducts(JSON.parse(check));
    } else {
      const transformProducts = (data) => {
        console.log(data);
        const loadedProducts = [];

        data.results.map((ele, index) => {
          return loadedProducts.push({
            id: ele.id,
            title: ele.title,
            image: ele.image,
          });
        });

        setCuisineProducts(loadedProducts);
        localStorage.setItem(categoryName, JSON.stringify(loadedProducts));
      };

      getProducts(
        {
          url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=d1419b5e27184520a7f75d5f1dd7f674&cuisine=${categoryName}`,
        },
        transformProducts
      );
    }
  }, [getProducts, categoryName, check]);
  console.log(cuisineProducts);

  ///////////
  return (
    <div className=" foods category">
      <div className="card bg-dark foods-bigcard text-white border-0">
        <img src={foodsImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">
            {categoryName} Foods Recipes
          </h5>
          <p className="card-text lead fs-2 text-center">
            Explore Our {categoryName} Food Recipes{" "}
          </p>
        </div>
      </div>
      <Categories />
      <div className="container">
        <div className="row">
          {cuisineProducts.map((ele) => {
            return (
              <div className="col-md-4" key={ele.id}>
                <div className="card mb-3">
                  <img variant="top" src={ele.image} />
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <NavLink to={`/foods/${ele.id}`}>
                      <button>View Details</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
