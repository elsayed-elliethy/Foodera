import React, { Component } from "react";
import "./Numbers.css";
const Numbers = () => {
  return (
    <div className="numbers">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-3">
            <span className="number">1287+</span>
            <h6>Savings</h6>
          </div>
          <div className="col-md-3">
            <span className="number">5786+</span>
            <h6>Photos</h6>
          </div>
          <div className="col-md-3">
            <span className="number">1440+</span>
            <h6>Rockets</h6>
          </div>
          <div className="col-md-3">
            <span className="number">7110+</span>
            <h6>Globes</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
