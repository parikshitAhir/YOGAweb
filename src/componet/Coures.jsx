import React from "react";
import { useNavigate } from "react-router-dom";

const Coures = () => {
  const Naviget = useNavigate();

  return (
    <>
      <div className="coures_main">
        <div className="cou_maintit">
          <h1 className="cou_maintith1">Popular Courses</h1>
          <br />
          <p>
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        <div className="cou_maincard">
          <div className="cur_card1">
            <img className="couimg" src="./Images/card1 (1).jpg"></img>
            <div className="cur_dec">
              <h3 className="courh3">Online Yoga Teacher Training Courses</h3>
              <br />
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
              <br />
              <img className="star" src="./Images/star.png"></img>
              <div className="btnmain_cou">
                <button
                  className="hclbtn"
                  onClick={() => {
                    Naviget("/Join");
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="cur_card1">
            <img className="couimg" src="./Images/card1 (2).jpg"></img>
            <div className="cur_dec">
              <h3 className="courh3">Sounds True Presents Yoga Courses</h3>
              <br />
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
              <br />
              <img className="star" src="./Images/star.png"></img>
              <div className="btnmain_cou">
                <button
                  className="hclbtn"
                  onClick={() => {
                    Naviget("/Join");
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="cur_card1">
            <img className="couimg" src="./Images/card1 (3).jpg"></img>
            <div className="cur_dec">
              <h3 className="courh3">
                Ashtanga Vinyasa Yoga Teacher Training Online
              </h3>
              <br />
              <p>
                Here is some tips for new job seekars who want to get a dream
                job and want to shine in his career.
              </p>
              <br />
              <img className="star" src="./Images/star.png"></img>
              <div className="btnmain_cou">
                <button
                  className="hclbtn"
                  onClick={() => {
                    Naviget("/Join");
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Coures;
