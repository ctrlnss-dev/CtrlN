import React from 'react';
import {ReactComponent as CtrlNLogo} from '../../Images/CtrlN.svg'
import Pulse from 'react-reveal/Pulse';
import "./Home.css"
function Home(props) {
    return (
        <div style={{height:"100vh" ,background:"#07031a"   }}> 
            <div className="wrapper">
            <CtrlNLogo/>
            </div>
            <Pulse delay={4000}>
            <div className="sub_title">
                Where Ideas becomes Real
            </div>
            </Pulse>
            
        </div>
    );
}

export default Home;