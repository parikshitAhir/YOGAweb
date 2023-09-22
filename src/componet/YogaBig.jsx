import React from "react";
import { useNavigate } from "react-router-dom";


const YogaBig = () => {
  const Naviget = useNavigate();


  return (
    <>
      <div className="yb_main">
        <div className="ybbtnfirst">
          <button className="ybbtnrve" 
          onClick={()=>{
            Naviget(-1);

          }}
          >
            <img className="revimg" src="./Images/rev.png"></img>
          </button>
        </div>

        <img
          className="yogabigmain_img"
          src="http://online.yoga.in/wp-content/uploads/2021/08/Online-Yoga-Heal-Rejuvenate-Header.jpg"
        ></img>
        <div className="ybtit">
          <h1 className="ybtith1">Online Yoga | Yoga for Beginners</h1>
          <h2 className="ybtith2">
            5 day Online Yoga Course by Sivananda India
          </h2>
        </div>

        <div className="ybmainp">
          <p className="ybp">
            Yoga is for everyone. Who wouldn’t yearn for a sneak peek into their
            own self? Deep things apart, if you’re someone who struggles with
            cumulative stress, depressive disorders or lifestyle diseases like
            diabetes or hypertension, Yoga can do a lot to put you on the fast
            track to recovery and well-being. Grab the chance & get on Yoga!
          </p>
          <br />
          <p className="ybp">
            New to Yoga? Our Introductory Course is designed and put together by
            a team of highly experienced yoga teachers to ensure a smooth and
            engaging experience for the learner.
          </p>
          <br />
          <p className="ybp">
            We offer a step-by-step guidance, building up gradually to the
            dynamic sun salutation and nine classical hatha yoga postures,
            including the shoulder stand, sitting forward bend and the cobra.
            The focus is on learning the postures properly, at a steady pace to
            ensure correct practice. Learn the art of proper breathing, with the
            practice of yogic breathing techniques and discover the bliss of
            deep relaxation.
          </p>
          <br />
          <p className="ybp">
            Find a little space and have your mat ready for this 5-day,
            90-minute class.
          </p>
          <br />
        </div>

        <div className="ybbox_main">
          <div className="ybbox1">
            <h3 className="ybboxh3">raditional Approach</h3>
            <p className="ybboxp">
              The course is specially designed for beginners on the foundation
              of Classical Hatha Yoga promoted Bihar School of Yoga
            </p>
          </div>
          <div className="ybbox1">
            <h3 className="ybboxh3">Experienced Yoga Gurus</h3>
            <p className="ybboxp">
              Classes are taken by senior teachers with decades of experience in
              teaching yoga, both online and offline.
            </p>
          </div>
          <div className="ybbox1">
            <h3 className="ybboxh3">Interactive Sessions</h3>
            <p className="ybboxp">
              Active interaction & personal attention by teacher creates an
              environment for learning and evolving with confidence.
            </p>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};
export default YogaBig;
