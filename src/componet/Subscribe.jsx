import React, { useState } from "react";

const Subscribe = () => {
    const [submit, setSubmit] = useState({
         emi: "",
      });
    
      const inputsubmit = (event) => {
        const { name, value } = event.target;
    
        setSubmit(() => {
          return { ...submit, [name]: value };
        });
      };
      const submitdata = (e) => {
        e.preventDefault(); 
        alert(
          `Sucessfully
          `
      
        );
        setSubmit({
          emi: "",
        });
      };
  return (
    <>
    <form onSubmit={submitdata}>
      <div className="sub_main">
        <div className="sub_first">
          <div className="sub_second">
            <div className="sub_secondpart">
              <h2>Subscribe our newsletter</h2>
              <br />
              <p className="subp">Subscribe our newsletter for further updates about us</p>
              <br />
              <div className="sub_inb">
                <input
                type="Email"
                name="emi"
                value={submit.emi}
                onChange={inputsubmit}
                className="sub_email"
                placeholder=" write email....."
                autoComplete="off"
                required
              ></input>
                <button className="sub_btn" >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};
export default Subscribe;
