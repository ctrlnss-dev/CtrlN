import React from 'react';
import Fade from 'react-reveal/Fade'
import './Cardc.css'
function Cardc({Logo1 ,Logo2 , Title1 , Content1 , Web1 , Title2 , Content2 , Web2}) {
    return (
        <div className="CardC-section">
        <Fade delay={500} left>

        <div className="card-container">
        <div className="card-post">
            <div className="card-post__img">
                <img src={Logo1}  alt="u5a"/>
            </div>
            <div className="card-post__info">
                <h1 className="card-post__title">{Title1}</h1>
                <span className="card-post__date">{Content1}</span>
                <br/>
                <a href={Web1} className="card-post__cta">Open Website</a>
            </div>
        </div>
        </div>
        </Fade>
        <Fade delay={500} right>
        <div className="card-container">
        <div className="card-post">
            <div className="card-post__img1">
                <img src={Logo2}  alt="f7"/>
            </div>
            <div className="card-post__info1">
                <h1 className="card-post__title1">{Title2}</h1>
                <span className="card-post__date1">{Content2}</span>
                <br/>
                <a href={Web2} className="card-post__cta">Open Website</a>
            </div>
        </div>
        </div>
        </Fade>
        </div>

    );
}

export default Cardc;