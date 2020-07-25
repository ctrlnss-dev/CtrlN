import React from "react";
import { ReactComponent as CtrlNLogo } from "../../Images/CtrlN.svg";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect";
import { useDencrypt } from "use-dencrypt-effect";
 
import "./Home.css";

const values = [ "Custom Build App For your Bussiness", "Web Development", "UI/UX Developement"];
function Home(props) {
    const { result, dencrypt } = useDencrypt();
 
  React.useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);
 
    return () => clearInterval(action);
  }, []);
  return (
    <div style={{ height: "100vh", background: "#07031a" }}>
      <div className="wrapper">
        <CtrlNLogo />
      </div>
    <div className="wrapper1">
      <Fade delay={5000} up>
      <div className="sub_title"> Software Solutions </div>
      </Fade>
      <div className="sub_anime"> {result}</div>
      </div>
    </div>
  );
}

export default Home;
