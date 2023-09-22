import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import React, { useState } from "react";
// import { auth } from "../firebase";

const SignUp = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("succsesfull your create account");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={signup}>
            <div class="login">
              <div class="login-header">
                <h3>CREATE ACCOUNT</h3>
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
            <button>Create</button>
            <p class="message">
              <a href="/auth">Want to SignIn</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
