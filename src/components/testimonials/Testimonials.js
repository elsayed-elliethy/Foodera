import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import "./Testimonials.css";
import girlImg from "../../assets/girl1.jpg";
import boyImg from "../../assets/boy.jpg";
const Testimonials = () => {
  return (
    // <div className="testinomials">
    //   <h2>Testimonials</h2>
    //   <Carousel>
    //     <Carousel.Item>
    //       <img src={girlImg} alt="First slide" />
    //       <Carousel.Caption>
    //         <p>
    //           "Far far away, behind the word mountains, far from the countries
    //           Vokalia and Consonantia, there live the blind texts. Separated
    //           they live."
    //         </p>
    //         <h3>Simab Dave - Web Designer</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img src={boyImg} alt="second slide" />
    //       <Carousel.Caption>
    //         <p>
    //           "Far far away, behind the word mountains, far from the countries
    //           Vokalia and Consonantia, there live the blind texts. Separated
    //           they live far from the countries Vokalia."
    //         </p>
    //         <h3>Johnthan Doe - UX Designer</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img src={girlImg} alt="third slide" />
    //       <Carousel.Caption>
    //         <p>
    //           "Far far away, behind the word mountains, far from the countries
    //           Vokalia and Consonantia, there live the blind texts. "
    //         </p>
    //         <h3>Maccy Doe - Front End</h3>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>

    <div class="testimonials" id="testimonials">
      <div class="container">
        <h2>Testimonials</h2>
        <div class="testi-content">
          <div class="testi-box">
            <p>
              Iam very happy with the product its amazing and i recieve it very
              fast and the price was amazing.
            </p>
            <div class="info">
              <img src={boyImg} alt="" />
              <div class="text">
                <h4>Mohamed Ibrahim</h4>
                <p class="title">CEO At Company</p>
              </div>
            </div>
          </div>
          <div class="testi-box">
            <p>
              Iam very happy with the product its amazing and i recieve it very
              fast and the price was amazing.
            </p>
            <div class="info">
              <img src={girlImg} alt="" />
              <div class="text">
                <h4>Nancy Reda</h4>
                <p class="title">CEO At Company</p>
              </div>
            </div>
          </div>
          <div class="testi-box">
            <p>
              Iam very happy with the product its amazing and i recieve it very
              fast and the price was amazing.
            </p>
            <div class="info">
              <img src={boyImg} alt="" />
              <div class="text">
                <h4>Sherief Ashraf</h4>
                <p class="title">CEO At Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
