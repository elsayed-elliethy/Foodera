import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
const Desert = () => {
  // /////////////

  const [popularProducts, setPopularProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  const check = localStorage.getItem("dessert");
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
        localStorage.setItem("dessert", JSON.stringify(loadedProducts));
        console.log(loadedProducts, "fff");
      };

      getProducts(
        {
          url: `https://api.spoonacular.com/recipes/random?apiKey=d1419b5e27184520a7f75d5f1dd7f674&number=9&tags=dessert`,
        },
        transformProducts
      );
    }
  }, [getProducts, check]);
  console.log(popularProducts);
  ///////////

  return (
    <div className="mt-5 foods mb-5 popular">
      <div className="container">
        <h2 className="text-center mb-5">Dessert Products</h2>
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

export default Desert;
