import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membership from "../Membership/Membership";
import Gettheapp from "../GetTheApp/Gettheapp";
import AboutUs from "../AboutUs/AboutUs";
import Airports from "../Airports/Airports";

function Home() {
  return (
    <>
      <div className="backgroundimage"></div>
      <div className="overlay"></div>
      <dic className="content"></dic>
      <Membership />
      <Gettheapp />
      <AboutUs />
      <Airports />
    </>
  );
}

export default Home;
