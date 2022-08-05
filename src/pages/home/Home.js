import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Categories from "../../components/category/Categories";
import Popular from "../../components/Popular";
import Veggie from "../../components/Veggie";
import Desert from "../../components/Desert";
import Services from "../../components/services/Services";
import "./Home.css";
import Quote from "../../components/quote/Quote";
import Testimonials from "../../components/testimonials/Testimonials";
import Baked from "../../components/baked/Baked";
import Subscribe from "../../components/subscribe/Subscribe";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Services />
      <div className="foods">
        <Popular />
        <Veggie />
        <Desert />
      </div>
      <Quote />
      <Testimonials />
    </div>
  );
};

export default Home;
