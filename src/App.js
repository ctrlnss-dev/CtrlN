import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import NavbarC from "./Components/Navbar/NavbarC";
import OurWork from "./Components/Our Work/ourWork";
import ContactUs from "./Components/ContactUs/ContactUs";
import Cardc from "./Components/cards/cardc";
import LayoutComponent from "./Components/Layout/Layout";


function App() {
  return (
    <div className="App">
      {/* <Cardc/> */}
      {/* <NavbarC/> */}
      <LayoutComponent/>
    </div>
  );
}

export default App;
