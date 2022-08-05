import React, { Fragment } from "react";
import "./Contact.css";
import foodsImg from "../../assets/foods.png";
const Contact = () => {
  return (
    <div className="contact-us">
      <div className="card bg-dark foods-bigcard text-white border-0">
        <img src={foodsImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">Contact Us</h5>
          <p className="card-text lead fs-2 text-center">
            We'd love to hear from you.
          </p>
        </div>
      </div>
      <div class="contact">
        <div class="container">
          <h2>Don't be shy.</h2>
          <div class="content">
            <form action="">
              <div class="first-div">
                <input
                  type="text"
                  name="userName"
                  id=""
                  placeholder="Your Name"
                />
                <input type="tel" name="phone" id="" placeholder="Your Phone" />
                <input
                  type="email"
                  name="mail"
                  id=""
                  placeholder="Your Email"
                />
                <input type="text" name="subject" id="" placeholder="Subject" />
              </div>
              <div class="second-div">
                <textarea name="" id="" placeholder="Your Message"></textarea>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
