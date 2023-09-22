import React from "react";
import { useNavigate } from "react-router-dom";
import Fact from "./Fact";
import Coures from "./Coures";
import Me from "./Me";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

import Priceplan from "./Priceplan";

const Home = () => {
  const Naviget = useNavigate();
  return (
    <>
    <div className="home_con">
      <div className="cirover">
        <div className="circal"></div>
      </div>
     

      <img className="manimg" src="./Images/man.png" alt="man"></img>
      <div className="main_con">
        <h1 className="yh1">Yoga to Release Stress</h1>
        <p className="main_pg">
          yoga ia a way of life, rather then a chore. counteract the stresses of
          modern life by becoming more mindfull and compassionate.
        </p>
        <div className="main_btn">
          <button
            className="gt"
            onClick={() => {
              Naviget("/Services");
            }}
          >
            Get Start
          </button>
        </div>
      </div>

      <div className="secon_con">
        <div className="card1">
          <div className="Cardmain1">
            <h2 className="cardh2">Every-Day Open Master Class</h2>
            <h2 className="cardnum">3</h2>
            <img className="cardimg3" src="./Images/yog3.jpg" alt="caed3"></img>
          </div>
          <p className="cardp">
            {" "}
            We’re boosting online yoga by enabling anyone in the world to learn
            from the best
          </p>
        </div>

        <div className="card2">
          <div className="Cardmain1">
            <h2 className="cardh2">Find a Yoga Mentor For You</h2>
            <h2 className="cardnum">2</h2>
          </div>
          <img className="cardimg2" src="./Images/yog2.jpg" alt="caed3"></img>
        </div>

        <div className="card3">
          <div className="Cardmain1">
            <h2 className="cardh2">Make Your Own Plan For Yoga</h2>
            <h2 className="cardnum">1</h2>
          </div>

          <img className="cardimg1" src="./Images/yog1.jpg" alt="caed3"></img>
        </div>
      </div>

      <Fact />
 
      <div className="hclassmain">
        <iframe
          className="hclassvideo"
          width="790"
          height="415"
          src="https://www.youtube.com/embed/5JvbjrLESPs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr className="hclhr"></hr>
        <br />
        <div className="hcmaintit">
          <h1 className="hcltit">The Better Way to Start Yoga Class</h1>
          <br />
          <div className="hcmainp">
            <p>
              Practice anywhere, anytime. Explore a new way to exercise and
              learn more about yourself. We are providing the best.
            </p>
            <button className="hclbtn" 
            onClick={()=>{
              Naviget("/About")
            }}>Get Start</button>
          </div>
        </div>

      </div>
<Coures/>
      <br />
      <Priceplan/>
      <br />
      <Me/>
      {/* <br /> */}
      <Subscribe/>
      <br />
      <Footer/>
      </div>
    </>
  );
};
export default Home;
