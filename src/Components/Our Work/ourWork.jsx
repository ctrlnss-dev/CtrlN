import React, { Fragment } from "react";
import U5A1 from "../../Images/u5a_logo.svg";
import f7 from "../../Images/logo.jpg";

import "./ourWork.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Card } from "react-bootstrap";

const projects = [
  {
    web: "http://www.u5a.in/",
    img: U5A1,
    fade:{
      right:true
    }
  },
  {
    web: "http://www.f7salon.in/",
    img: f7,
    fade:{
      left:true
    }

  },
];
export default function OurWork() {
  return (
    <div className="ourWork-container">
      <Zoom>
        <div className="headingC"> Our Work</div>
      </Zoom>
      <div className="CardC-section">
        {projects.map(({ web, img,fade }) => (
          <Fade {...fade} >
          <div className="containerC">
            <Card
              className="CardC-container"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = web;
              }}
            >
              <Card.Img className="cardc" src={img} />
            </Card>
          </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
