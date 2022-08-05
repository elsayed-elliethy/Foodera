import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import "./Meal.css";
const Meal = () => {
  // /////////////
  const params = useParams();
  const [product, setProduct] = useState({});
  console.log(params.mealId, "sss");
  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  useEffect(() => {
    const transformProducts = (data) => {
      console.log(data);
      let loadedProduct;
      loadedProduct = {
        id: data.id,
        title: data.title,
        image: data.image,
        summary: data.summary,
        instructions: data.instructions,
        extendedIngredients: data.extendedIngredients,
      };

      setProduct(loadedProduct);
    };

    getProducts(
      {
        url: `https://api.spoonacular.com/recipes/${params.mealId}/information?apiKey=d1419b5e27184520a7f75d5f1dd7f674`,
      },
      transformProducts
    );
  }, [getProducts, params.mealId]);
  console.log(product);

  const [isActive, setIsActive] = useState("information");
  const filterInfo = (btnId) => {
    setIsActive(btnId);
  };
  ///////////
  return (
    <div className="container mb-5 product">
      <div className="row">
        <div className="col-lg-6 text-center image">
          <h2 className="mb-4">{product.title}</h2>
          <img src={product.image} className="meal-img" alt="..."></img>
        </div>
        <div className="col-lg-6 text-center">
          <button
            className={
              isActive === "Ingredients"
                ? "btn active mr-2 mb-3"
                : "btn  mr-2 mb-3"
            }
            id="Ingredients"
            onClick={(e) => filterInfo(e.target.id)}
          >
            Ingredients
          </button>

          <button
            className={
              isActive === "preparation"
                ? "btn active mr-2 mb-3"
                : "btn mr-2 mb-3"
            }
            id="preparation"
            onClick={(e) => filterInfo(e.target.id)}
          >
            Preparation
          </button>
          <button
            className={
              isActive === "information" ? "btn active mb-3" : "btn mb-3"
            }
            id="information"
            onClick={(e) => filterInfo(e.target.id)}
          >
            information
          </button>
          {isActive === "information" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: product.summary }}></p>
            </div>
          )}
          {isActive === "preparation" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: product.instructions }}></p>
            </div>
          )}
          {isActive === "Ingredients" && (
            <ul className="text-left ">
              {product.extendedIngredients?.map((ele) => {
                return <li key={ele.id}>{ele.original}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;
