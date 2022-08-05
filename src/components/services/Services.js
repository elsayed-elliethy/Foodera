import React, { Fragment, useState } from "react";
import "./Services.css";
import analysisImg from "../../assets/recipe-analysis.jpg";
import managementImg from "../../assets/recipe-management.jpg";
import planningImg from "../../assets/meal-planning.jpg";
import shoppableImg from "../../assets/shoppable-recipes.jpg";
const Services = () => {
  const [isActive, setIsActive] = useState("Analysis");
  const filterServices = (btnId) => {
    setIsActive(btnId);
  };
  return (
    <div className="services">
      <div className="container services">
        <h2 className="text-center font-weight-bold mt-5 my-4">Services</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <button
              className={
                isActive === "Analysis"
                  ? "btn mr-2 mb-3 active"
                  : "btn mr-2 mb-3"
              }
              id="Analysis"
              onClick={(e) => filterServices(e.target.id)}
            >
              Recipe Analysis
            </button>
          </div>
          <div className="col-md-6 col-lg-3">
            <button
              className={
                isActive === "Management"
                  ? "btn mr-2 mb-3 active"
                  : "btn mr-2 mb-3"
              }
              id="Management"
              onClick={(e) => filterServices(e.target.id)}
            >
              Recipe Management
            </button>
          </div>
          <div className="col-md-6 col-lg-3">
            <button
              className={
                isActive === "Planning"
                  ? "btn mr-2 mb-3 active"
                  : "btn mr-2 mb-3"
              }
              id="Planning"
              onClick={(e) => filterServices(e.target.id)}
            >
              Meal Planning
            </button>
          </div>
          <div className="col-md-6 col-lg-3">
            <button
              className={
                isActive === "Shoppable"
                  ? "btn mr-2 mb-3 active"
                  : "btn mr-2 mb-3"
              }
              id="Shoppable"
              onClick={(e) => filterServices(e.target.id)}
            >
              Shoppable Recipes
            </button>
          </div>
        </div>
        {isActive === "Analysis" && (
          <div className="row mt-4">
            <div className="col-md-4 mr-5 mx-auto image">
              <img src={analysisImg} alt="..."></img>
            </div>
            <div className="col-md-7 text">
              <h4 className="mb-3">Special Diets/Intolerances</h4>
              <p>
                We automatically analyze recipes to check for ingredients that
                contain common allergens, such as wheat, dairy, eggs, soy, nuts,
                etc. We also determine whether a recipe is vegan, vegetarian,
                Paleo friendly, Whole30 compliant, and more.
              </p>
              <h4 className="mb-3 mt-4">Nutritional Information</h4>
              <p>
                We compute the nutritional information for recipes automatically
                using a proprietary algorithm. With this information, you can
                find individual recipes or even create entire meal plans that
                satisfy your users' dietary goals.
              </p>
            </div>
          </div>
        )}
        {isActive === "Management" && (
          <div className="row mt-4 ">
            <div className="col-md-4 mr-5 mx-auto image">
              <img src={managementImg} alt="..."></img>
            </div>
            <div className="col-md-7 text">
              <h4 className="mb-3">Search & Organize</h4>
              <p>
                We provide a recipe search - and not just any recipe search. Our
                semantic search is fast, accurate, and pretty darn smart.
                "Gluten free nut free dessert without apples"?Easy as pie, It's
                all possible.
              </p>
            </div>
          </div>
        )}
        {isActive === "Planning" && (
          <div className="row mt-4">
            <div className="col-md-4 mr-5 mx-auto image">
              <img src={planningImg} alt="..."></img>
            </div>
            <div className="col-md-7 text">
              <h4 className="mb-3">Plan your meals</h4>
              <p>
                plan your meals for the week using our recipes. The daily
                nutritional information is calculated automatically.
              </p>
              <h4 className="mb-3 mt-4">Get your shopping list</h4>
              <p>
                Once your are done meal planning, you can get your shopping list
                in a click of the mouse.
              </p>
            </div>
          </div>
        )}
        {isActive === "Shoppable" && (
          <div className="row mt-4">
            <div className="col-md-4 mr-5 mx-auto image">
              <img src={shoppableImg} alt="..."></img>
            </div>
            <div className="col-md-7 text">
              <h4 className="mb-3">Shoppable Recipes</h4>
              <p>
                Finally! An all-in-one solution for cooking at home. You can
                pick your recipes and order all the ingredients from an online
                grocer to have everything delivered or ready for pickup.
              </p>
              <p>
                Display recipes to inspire you when you browse our recipes
                (whether dips, sauces, pickles, wraps, you name it!) Show you
                what you can make.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
