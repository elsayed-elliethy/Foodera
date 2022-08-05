import React from "react";
import foodsImg from "../../assets/foods.png";
import aboutImg from "../../assets/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="card bg-dark foods-bigcard text-white border-0">
        <img src={foodsImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">About Us</h5>
          <p className="card-text lead fs-2 text-center">Get To Know Us</p>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="">Our Mission</h2>
        <p>
          Foodera will be the first food management system that combines dining
          out, eating store-bought food, and cooking at home to help you find
          and organize the restaurants, products, and recipes that fit your diet
          and can help you reach your nutrition goals.
        </p>
        <div>
          <img className="mw-100" src={aboutImg} alt="..."></img>
        </div>
        <p>
          With our food search engine, you will soon find everything from
          "protein shake with 20 grams of protein" to "best vegan restaurant in
          Chicago" to "Paleo brownie recipes.
        </p>
        <p>
          We want to make Foodera the only site you need when it comes to the
          food you eat.
        </p>
        <p className=""> All your food. One place.</p>
      </div>
    </div>
  );
};

export default About;
