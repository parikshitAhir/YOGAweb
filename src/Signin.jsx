import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const Naviget = useNavigate();

  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinuser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("succsesfully login account");
      })
      .catch((error) => {
        console.log(error);
        alert("Pleace Valid Emailid and Password");
      });
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={signinuser}>
            <div class="login">
              <div class="login-header">
                <h3>LOGIN</h3>
              </div>
            </div>
            <input
              type="email"
              name="emi"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email....."
              autoComplete="off"
              required
            />
            <input
              type="Password"
              name="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password....."
              autoComplete="off"
              required
            />
            <button>sign in</button>
            <p class="message">
              Not registered?
              <a href="/auth/SignUp">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signin;
