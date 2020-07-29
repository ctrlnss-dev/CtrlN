import React from "react";

import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";

import Home from "../Home/Home";
import OurWork from "../Our Work/ourWork";
import ContactUs from "../ContactUs/ContactUs";

import "./Navbar.css";

export default function ButtonAppBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" style={{ background: "#07031a" }}>
        <Navbar.Brand
          href="#section1"
          style={{ color: "#a6dcef " }}
          className="mr-auto"
        >
          <Typography variant="h3" style={{ fontFamily: "Rancho" }}>
            CtrlN
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#section1" style={{ fontFamily: "Rancho" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#section2" style={{ fontFamily: "Rancho" }}>
              Our Work
            </Nav.Link>
            <Nav.Link href="#section3" style={{ fontFamily: "Rancho" }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Home id="section1" />
      <OurWork id="section2" />
      <ContactUs id="section3" />
    </div>
  );
}
