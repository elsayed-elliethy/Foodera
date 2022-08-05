import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { manageCartActions } from "../../store/index1";
import "./Foods.css";
import foodImg1 from "../../assets/food1.jpg";
import foodImg2 from "../../assets/food2.jpg";
import foodImg3 from "../../assets/food3.jpg";
import { Card } from "react-bootstrap";
import useHttp from "../../hooks/use-http";
const Foods = () => {
  const dispatch = useDispatch();

  // /////////////

  const [avilableProducts, setAvilableProducts] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  const appId = "a591d552";
  const appKey = "144d612eaa6e235ecdc39ee1b0197ff9";
  useEffect(() => {
    const transformProducts = (data) => {
      console.log(data);
      const loadedProducts = [];

      Object.entries(data.hits).map(([key, value]) => {
        // console.log(value.food.foodId);
        loadedProducts.push({
          id: key,
          title: value.recipe.label,
          desc: value.description,
          price: value.price,
          serve: value.recipe.yield,
          ingredientLines: value.recipe.ingredientLines,
          ingredients: value.recipe.ingredients[0].text,
          category: value.recipe.category,
          image: value.recipe.image,
          rating: value.rating,
          quantity: 1,
          url: value.recipe.url,
          time: value.recipe.totalTime,
          foodCategory: value.recipe.ingredients[0].foodCategory,
          measure: value.recipe.ingredients[0].measure,
        });
      });
      setAvilableProducts(loadedProducts);
    };

    getProducts(
      {
        // url: "https://api.edamam.com/api/food-database/v2/parser?app_id=a591d552&app_key=144d612eaa6e235ecdc39ee1b0197ff9&ingr=chicken&nutrition-type=cooking",
        url: "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=bd4c11fa&app_key=09d6a7710aa2f76094f8cef2f5a6cf4c",
      },
      transformProducts
    );
  }, [getProducts]);
  console.log(avilableProducts);
  ///////////

  const meals = [
    {
      id: "m1",
      title: "Rainbow Vegetable Sandwich",
      quantity: "1",
      time: "15 - 20",
      price: 10.5,
      image: foodImg1,
    },
    {
      id: "m2",
      title: "Vegetarian Burger",
      quantity: "1",
      time: "30 - 45",
      price: 9.2,
      image: foodImg2,
    },
    {
      id: "m3",
      title: "Raspberry Stuffed French Toast",
      quantity: "1",
      time: "10 - 15",
      price: 12.5,
      image: foodImg3,
    },
  ];

  const addOrderHandler = (event) => {
    const [meal] = meals.filter((ele) => {
      return ele.id === event.target.id;
    });
    console.log(meal);
    dispatch(manageCartActions.addMeal({ val: meal }));
  };
  return (
    <div className="foods">
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
        <div className="row">
          {avilableProducts.map((ele) => {
            return (
              <div className="col-md-4" key={ele.id}>
                <div className="card mb-3">
                  <img variant="top" src={ele.image} />
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    {/* <p>{`Time: ${ele.time} Minutes | Serves: ${ele.serve}`}</p> */}
                    {/* <p className="card-text">{`$${ele.measure}`}</p> */}
                    <button>
                      <a href={ele.url} target="_blank">
                        View Details
                      </a>
                    </button>
                    {/* <button id={ele.id} onClick={addOrderHandler}>
                      Order Now
                    </button> */}
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
