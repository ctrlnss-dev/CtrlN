import React from "react";
import { IconContext } from "react-icons";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md"
import Pulse from 'react-reveal/Pulse'
import { Card } from "react-bootstrap";
import './ContactUs.css'
const ContactUs = (props) => (
  <div
    style={{ height: "100vh", background: "#07031a", justifyContent: "center",paddingTop:"10vh"}}
  >
    <Pulse>
    <div className="headingC"> Contact Us</div>
    </Pulse>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ background: "#07031a" }} variant="dark" text="light">
          <Card.Body >
            <IconContext.Provider
              value={{
                className: 'react-icons'
              }}
            >
              <div style={{display:"flex" , flexDirection:"row" }}>
                  <GrMail  />
                
                <div className="txt" >10lokeshnani@gmail.com</div>
              </div>
              <br/>
              <div style={{display:"flex" , flexDirection:"row" }}>
                <MdLocalPhone />
                <div className="txt">9949499500</div>
              </div>
            </IconContext.Provider>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);
export default ContactUs;
