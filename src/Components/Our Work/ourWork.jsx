import React, { Fragment } from 'react';
import U5A from '../../Images/pictorial_logo.svg'
import f7 from '../../Images/logo.jpg'

import './ourWork.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Cardc from '../cards/cardc';

export default function OurWork() {

  return (
    // <div style={{ height: "100vh", background: "#07031a" }}>
<div className="ourWork-container">

    <Zoom>
      <div className="headingC"> Our Work</div>
      </Zoom>
      <div className="CardC-section">
        <Cardc 
          Content1="Film and media creation"
          Title1="U5A"
          Logo1={U5A}
          Web1="http://www.u5a.in/"
          Content2="Best Place for Hair and Beauty"
          Title2="F7 Saloon"
          Logo2={f7}
          web2="http://www.f7salon.in/"
/>
        

</div>
    </div> 
    
  );
}



 