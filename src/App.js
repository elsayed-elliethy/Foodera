import logo from "./logo.svg";
import "./App.css";
import Navs from "./components/navs/Navs";
import Header from "./components/header/Header";
import { Fragment } from "react";
import Numbers from "./components/numbers/Numbers";
import About from "./components/about/About";
import Quote from "./components/quote/Quote";
import Foods from "./components/foods/Foods";
import Cart from "./components/cart/Cart";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
import Baked from "./components/baked/Baked";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Pages from "./pages/Pages";

function App() {
  const showCart = useSelector((state) => {
    return state.showCart.show;
  });
  return (
    <Fragment>
      <Navs />

      <Pages />
      {/* <Numbers />
      <About />
      <Foods />
    <Faq />*/}

      <Footer />
    </Fragment>
  );
}

export default App;
