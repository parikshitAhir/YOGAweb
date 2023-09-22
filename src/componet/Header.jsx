import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <nav className="navebar">
        <div class="logo-box">
          <img className="logo" src="./Images/yhelth.png"></img>
        </div>
        <ul className={isMobile ? "hed_first_mobile" : "hed_first"}>
          <Link className="home" to="/">
            <li>Home</li>
          </Link>

          <Link className="about" to="/About">
            <li>Class</li>
          </Link>

          <Link className="servi" to="/Services">
            <li>Benefits</li>
          </Link>

          <Link className="cont" to="/Contact">
            <li>Contact</li>
          </Link>

          <Link className="sign" to="/auth">
            <li>Sign In</li>
          </Link>
          <Link className="sign" to="/auth/SignUp">
            <li>Sign Up</li>
          </Link>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          <CgMenu />
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars">{/* <CgCloseR/> */}</i>
          )}
        </button>
      </nav>
    </>
  );
};
export default Header;
