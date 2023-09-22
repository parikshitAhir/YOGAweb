import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  const Naviget = useNavigate();

  return (
    <>
      <div className="main_class">
        <div className="class_first">
          <div className="maitith1">
            <h1 className="main_ctit">Online Yoga </h1>
            <h1 className="main_ctit">at Your Comfort. </h1>
            <h1 className="main_ctit"> Live Classes from India</h1>
          </div>
          <img
            className="firstclssimg"
            src="	https://yoga.in/wp-content/uploads/2022/01/online-yoga-mat.jpg"
          ></img>
        </div>

       
        <hr ></hr>
         

        <div className="second_class">
          <h1 className="secotit">Traditional Approach</h1>
          <h1 className="secotit">Experienced Teachers</h1>
          <h1 className="secotit">Interactive Classes</h1>
        </div>

        <div className="third_class">
          <div className="card_class">
            <img
              className="cardimg"
              src="	https://yoga.in/wp-content/uploads/2022/04/Online-Yoga-Beginners-Yoga.in_-400x267.jpg"
              alt="caed1"
            ></img>
            <h2 className="cardtit">Yoga for Beginners</h2>
            <button
              className="cardbtn"
              onClick={() => {
                Naviget("/YogaBig");
              }}
            >
              Learn More
            </button>
          </div>
          <br/>
          <br/>
          <div className="card_class">
            <img
              className="cardimg"
              src="		https://yoga.in/wp-content/uploads/2022/04/Online-Yoga-Pranayama-Yoga.in_-400x267.jpg"
              alt="caed1"
            ></img>
            <h2 className="cardtit">Pranayama & Meditation for Beginners</h2>
            <button
              className="cardbtn"
              onClick={() => {
                Naviget("/Prmedision");
              }}
            >
              Learn More
            </button>
          </div>
          <br/>
          <br/>
          <div className="card_class">
            <img
              className="cardimg"
              src="	https://yoga.in/wp-content/uploads/2022/04/Online-Yoga-Workshop-Yoga.in_-400x267.jpg	"
              alt="caed1"
            ></img>
            <h2 className="cardtit">Asanas for Beginners</h2>
            <button className="cardbtn"
            onClick={() => {
                Naviget("/Asanas");
              }}
            >Learn More</button>
          </div>
        </div>

       <hr></hr>
   

        <img
          className="class_lastimg"
          src="https://yoga.in/wp-content/uploads/2022/01/Yoga-for-everyone-parallax-background.jpg"
          alt="limges"
        ></img>

        <div className="scrollimg">
          <h1 className="class_lasth1">EVERYONE DESERVES TO BE HEALTHY</h1>
          <h2 className="class_lasth2">Yoga Is For Everyone, Everywhere.</h2>
      </div>
        <div className="class_footer">
        <Footer/>
        </div>
        </div>
    </>
  );
};
export default About;
