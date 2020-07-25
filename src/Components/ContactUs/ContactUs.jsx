import React from "react";
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import Pulse from "react-reveal/Pulse";
import { Card } from "react-bootstrap";
import "./ContactUs.css";
const ContactUs = (props) => (
  <div
    style={{
      height: "100vh",
      background: "#07031a",
      justifyContent: "center",
      paddingTop: "10vh",
    }}
  >
    <Pulse>
      <div className="headingC"> Contact Us</div>
    </Pulse>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ background: "#07031a" }} variant="dark" text="light">
          <Card.Body>
            <IconContext.Provider
              value={{
                className: "react-icons",
              }}
            >
              
              <a href="mailto:ctrlnss@gmail.com" style={{color:"white"}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <IoIosMail />
                  <div className="txt">ctrlnss@gmail.com</div>
                </div>
              </a>
              <br />
              <a href="tel:9394740474" style={{color:"white"}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MdPhone />
                  <div className="txt">9394740474</div>
                </div>
              </a>
            </IconContext.Provider>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);
export default ContactUs;
