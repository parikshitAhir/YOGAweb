import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main_footer">
          <div className="second_footer">
            <img className="foot_logo" src="./Images/yhelth.png"></img>

            <div className="fo_dec">
              Copyright © 2023 UI HUT.All rights reserved.
            </div>

            <br />

            <div className="footer_icon">
              <a href="https://www.instagram.com/_parikshit_ahir/">
                <img className="foimg" src="./Images/insta.png"></img>
              </a>
              <a href="https://twitter.com/@ParikshitK17907/">
                <img className="foimg" src="./Images/twiteer.png"></img>
              </a>
              <a href="https://t.me/+zhR7srdtaZw4MzU1">
                <img className="foimg" src="./Images/teligram.png"></img>
              </a>
              <a href="https://www.linkedin.com/in/parikshit-ahir-352085242">
                <img className="foimg" src="./Images/linkedin.png"></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
