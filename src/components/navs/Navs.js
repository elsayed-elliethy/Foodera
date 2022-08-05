import React, { Component, useState } from "react";
import logo from "../..//assets/logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navs.css";
import CartButton from "../cart/CartButton";
import { NavLink } from "react-router-dom";

const Navs = () => {
  const [isActive, setIsActive] = useState("home");
  const handleActive = (linkId) => {
    setIsActive(linkId);
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto main-nav">
            <NavLink
              to="/"
              id="home"
              onClick={(e) => handleActive(e.target.id)}
              // className={isActive === "home" ? "active" : ""}
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              id="about"
              onClick={(e) => handleActive(e.target.id)}
              // className={isActive === "about " ? "active" : ""}
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/foods"
              id="foods"
              onClick={(e) => handleActive(e.target.id)}
              // className={isActive === "foods " ? "active" : ""}
              activeClassName="active"
            >
              Explore Foods
            </NavLink>
            <NavLink
              to="/contact"
              id="contact"
              onClick={(e) => handleActive(e.target.id)}
              // className={isActive === "contact " ? "active" : ""}
              activeClassName="active"
            >
              Contact Us
            </NavLink>
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/faq"
            >
              FAQ
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
