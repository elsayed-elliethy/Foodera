import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
import "./Popular.css";
const Popular = () => {
  // /////////////

  const [popularProducts, setPopularProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  const appId = "a591d552";
  const appKey = "144d612eaa6e235ecdc39ee1b0197ff9";

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
          // url: "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=bd4c11fa&app_key=09d6a7710aa2f76094f8cef2f5a6cf4c",
          // url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
          url: `https://api.spoonacular.com/recipes/random?apiKey=d1419b5e27184520a7f75d5f1dd7f674&number=20`,
        },
        transformProducts
      );
    }
  }, [getProducts, check]);
  console.log(popularProducts);

  ///////////
  return (
    <div className="foods mb-5 popular">
      <div className="container">
        <h2 className="text-center mb-5">Popular Recipes</h2>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              992: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "2rem",
            autoplay: true,
            pauseOnHover: true,
            pauseOnFocus: true,
          }}
        >
          {popularProducts.map((ele) => {
            return (
              <SplideSlide key={ele.id}>
                <div className="card card-popular">
                  <img
                    className="w-100"
                    variant="top"
                    src={ele.image}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <NavLink to={`/foods/${ele.id}`}>
                      <button className="text-center mr-0">View Details</button>
                    </NavLink>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
