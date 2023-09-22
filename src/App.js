import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./componet/Home";
import About from "./componet/About";
import Contact from "./componet/Contact";
// import Position from "./componet/Position";
import Services from "./componet/Services";
import Error from "./componet/Error";
import Signin from "./Signin";
import SignUp from "./SignUp";
import YogaBig from "./componet/YogaBig";
import Prmedision from "./componet/Prmedision";
import Asanas from "./componet/Asanas";
import Join from "./componet/Join";
import Header from "./componet/Header";

import Mainlayout from "./Layout/Mainlayout";
import AuthLayout from "./Layout/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Services" element={<Services />} />

            <Route path="Contact" element={<Contact />} />
            {/* <Route path="Position" element={<Position />} /> */}
            <Route path="YogaBig" element={<YogaBig />} />
            <Route path="Prmedision" element={<Prmedision />} />
            <Route path="Asanas" element={<Asanas />} />
            <Route path="Join" element={<Join />} />

            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="Signin" />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
