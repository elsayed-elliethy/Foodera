import React, { Component } from "react";
import "./Quote.css";
import quoteImg from "../../assets/quote.jpg";
const Quote = () => {
  return (
    <div className="quote">
      <h2>
        When a man's stomach is full it makes no difference whether he is rich
        or poor.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus
        a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
      </p>
      <a href="#">Watch Our Story</a>
    </div>
  );
};

export default Quote;
