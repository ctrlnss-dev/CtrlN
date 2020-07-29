import * as React from "react";
// import "./Layout.css";
// import scrollToComponent from "react-scroll-to-component";
import { Typography } from "@material-ui/core";

import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import Home from "../Home/Home";
import OurWork from "../Our Work/ourWork";
import ContactUs from "../ContactUs/ContactUs";
const LayoutComponent = () => {
  const [show, setShow] = useState(true);
  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  const [Contct] = useState(React.createRef());

  useEffect(() => {
    const onScroll = (e) => {
      const temp = window.pageYOffset;
      setShow(scrollTop > temp);
      setScrollTop(temp);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div>
        <div>
          {show
            ? [
                scrollTop <= 100 ? (
                  <Navbar
                    collapseOnSelect
                    expand="lg"
                    style={{background:"#07031a" }}
                    variant="dark"
                  >
                    <Navbar.Brand>
                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}
                      >
                          <Typography variant="h3" style={{fontFamily:'Rancho',cursor:'pointer'}}>CtrlN</Typography>
                      </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                      id="responsive-navbar-nav"
                      className="justify-content-end"
                    >
                      <Nav.Item>
                          <Nav.Link  style={{fontFamily:'Rancho'}}>
                        <Link
                          activeClass="active"
                          to="section1"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          HOME
                        </Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link  style={{fontFamily:'Rancho'}}>
                        <Link
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          OUR WORK
                        </Link>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                      <Nav.Link  style={{fontFamily:'Rancho'}}>

                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          CONTACT US
                        </Link>
                        </Nav.Link>
                      </Nav.Item>
                      
                    </Navbar.Collapse>
                  </Navbar>
                ) : (
                  <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                    style={{background:"#07031a" }}
                    fixed="top"
                  >
                    <Navbar.Brand>

                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}
                      >
          <Typography variant="h3" style={{fontFamily:'Rancho'}}>CtrlN</Typography>
                        
                      </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                      id="responsive-navbar-nav"
                      className="justify-content-end"
                    >
                      <Nav.Item>
                          <Nav.Link  style={{fontFamily:'Rancho'}}>
                        <Link
                          activeClass="active"
                          to="section1"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          HOME
                        </Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link  style={{fontFamily:'Rancho'}}>
                        <Link
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          OUR WORK
                        </Link>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                      <Nav.Link  style={{fontFamily:'Rancho'}}>

                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={200}
                        >
                          CONTACT US
                        </Link>
                        </Nav.Link>
                      </Nav.Item>
                    </Navbar.Collapse>
                  </Navbar>
                ),
              ]
            : null}
        </div>
      </div>
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <OurWork />
      </div>
      <div id="section3">
        <ContactUs />
      </div>
     
      
    </>
  );
};
export default LayoutComponent;