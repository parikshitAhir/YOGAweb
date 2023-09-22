import React from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const Naviget = useNavigate();

  return (
    <>
      <div className="ybbtnfirst">
        <button
          className="ybbtnrve"
          onClick={() => {
            Naviget(-1);
          }}
        >
          <img className="revimg" src="./Images/rev.png"></img>
        </button>
      </div>
      <form
        className="jform"
        action="https://formspree.io/f/xnqybzoz"
        method="POST"
      >
        <h2 className="joinh2">Join Courses</h2>
        <p className="joinp">
          <input
            className="joinin"
            name="FirstName"
            placeholder="Write your first name here.."
            autoComplete="off"
            required
          ></input>
        </p>
        <p className="joinp">
          <input
            className="joinin"
            name="LastName"
            placeholder="Write your last name here.."
            autoComplete="off"
            required
          ></input>
        </p>
        <p className="joinp">
          <input
            className="joinin"
            name="email"
            placeholder="Write your email here.."
            autoComplete="off"
            required
          ></input>
        </p>

        <p className="joinp">
          <input
            className="joinin"
            name="PhoneNo"
            placeholder="Write your Phone Number here.."
            autoComplete="off"
            required
          ></input>
        </p>
        <p className="joinp">
          <input
            className="joinin"
            name="WhatsappNo"
            placeholder="Write your Whatsapp Number here.."
            autoComplete="off"
            required
          ></input>
        </p>
        <p className="joinp">
          <input
            className="joinin"
            name="Age"
            placeholder="Write your Age.."
            autoComplete="off"
            required
          ></input>
        </p>
        <p className="joinp">
          <input
            className="joinin"
            name="Message"
            placeholder="What would you like to tell us.."
            autoComplete="off"
            required
          ></input>
        </p>
        <button className="joinbtn">Join</button>
      </form>
    </>
  );
};
export default Join;
