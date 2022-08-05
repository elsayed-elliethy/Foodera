import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { NavLink, useParams } from "react-router-dom";
import foodsImg from "../../assets/foods.png";
import Search from "./Search";
import "./searchResult.css";
import Categories from "../category/Categories";
const SearchResult = () => {
  // /////////////
  const { searchValue } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  useEffect(() => {
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

      setSearchProducts(loadedProducts);
    };

    getProducts(
      {
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=d1419b5e27184520a7f75d5f1dd7f674&query=${searchValue}`,
      },
      transformProducts
    );
  }, [getProducts, searchValue]);
  console.log(searchProducts);

  ///////////
  return (
    <div className=" foods searchPage">
      <div className="container">
        <Search />
        {searchProducts.length === 0 && (
          <p className="text-center not-exist">
            Sorry, The Entered Recipe Is Not Exist{" "}
          </p>
        )}
        <Categories />

        <div className="row">
          {searchProducts.map((ele) => {
            return (
              <div className="col-md-4" key={ele.id}>
                <div className="card mb-3">
                  <img variant="top" src={ele.image} alt="..." />
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

export default SearchResult;
