import React, { useEffect, useState } from "react";
import foodsImg from "../../assets/foods.png";
import "./Foods.css";
import Categories from "../../components/category/Categories";
import { NavLink } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Search from "../../components/search/Search";
import SearchResult from "../../components/search/SearchResult";
const Foods = () => {
  const [isActive, setIsActive] = useState("all");
  const filterHandler = () => {};
  // /////////////

  const [popularProducts, setPopularProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  const check = localStorage.getItem("popular");
  useEffect(() => {
    if (check) {
      setPopularProducts(JSON.parse(check));
    } else {
      const transformProducts = (data) => {
        console.log(data);
        const loadedProducts = [];

        data.recipes.map((ele, index) => {
          return loadedProducts.push({
            id: ele.id,
            title: ele.title,
            image: ele.image,
          });
        });

        setPopularProducts(loadedProducts);
        localStorage.setItem("popular", JSON.stringify(loadedProducts));
      };

      getProducts(
        {
          url: `https://api.spoonacular.com/recipes/random?apiKey=d1419b5e27184520a7f75d5f1dd7f674&number=20`,
        },
        transformProducts
      );
    }
  }, [getProducts, check]);
  console.log(popularProducts);

  ///////////
  return (
    <div className="foods all-foods">
      <div className="card bg-dark foods-bigcard text-white border-0">
        <img src={foodsImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">
            All Foods Recipes
          </h5>
          <p className="card-text lead fs-2 text-center">
            Search And Explore Our Food Recipes
          </p>
        </div>
      </div>

      <div className="text">
        <h2>Explore Our Foods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>

      <div className="container">
        <Search />
        <Categories />
        <div className="row">
          {popularProducts.map((ele) => {
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

export default Foods;
