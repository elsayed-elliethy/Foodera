import React, { Component } from "react";
import "./Header.css";
import headerImg from "../../assets/header.jpg";
import headerImg1 from "../../assets/header1.jpg";
import headerImg2 from "../../assets/header2.jpg";
import headerImg3 from "../../assets/header4.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    // <header>
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div classNameName="col-md-6">
    //         <div classNameName="text">
    //           {/* <h2>Good food choices are good investments.</h2> */}
    //           <h2>All food recipes you'll ever need.</h2>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    //             et purus a odio finibus bibendum amet leo.
    //           </p>

    //           <div classNameName="header-actions">
    //             <button classNameName="order-btn">
    //               <NavLink to="/foods">Explore Foods</NavLink>
    //             </button>
    //             {/* <button classNameName="learn-btn">
    //               Learn More <i classNameName=" ilmosys-arrow-right"></i>
    //             </button> */}
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div classNameName="col-md-6"></div> */}
    //     </div>
    //   </div>
    // </header>
    // <div
    //   id="carouselExampleCaptions"
    //   className="carousel slide"
    //   data-bs-ride="false"
    // >
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={headerImg1} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={headerImg2} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={headerImg3} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>

    <div className="hiderSlider">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={headerImg1}
              class="d-block w-100 mw-100 mh-100"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h2>The More Good Foods The Better</h2>
              <p>
                We're always developing new recipes and creating new products to
                share with you.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={headerImg2} class="d-block w-100" alt="..." />
            <div class="carousel-caption  d-md-block">
              <h2>DIPS WORTH DIVING INTO.</h2>
              <p>
                Always made with highest quality ingredients for the freshest
                flavor for dips that will keep you coming back for more.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={headerImg3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h2>GOOD TASTE MADE SIMPLE</h2>
              <p>
                Fresh, high-quality ingredients are combined to create a blend
                of Hass avocados, tomatoes, onions, garlic, and fresh lime
                juice. made pure and simple.{" "}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span class=" carousel-control-prev-icon" aria-hidden="true"></span>
          {/* <span class="sr-only">Previous</span> */}
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span class="sr-only">Next</span> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
