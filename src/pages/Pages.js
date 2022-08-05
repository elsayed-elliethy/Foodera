import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Category from "./home/Category";
import About from "./about/About";
import Foods from "./foods/Foods";
import Meal from "./meal/Meal";
import Contact from "../components/contact/Contact";
import SearchResult from "../components/search/SearchResult";
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/foods/:mealId" element={<Meal />} />
        <Route path="/foods/search/:searchValue" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default Pages;
