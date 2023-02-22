import React, { useEffect, useState } from "react";
import samehImg from "../assets/sameh.jpg";
import "./splash.css";

const Splash = () => {
  return (
    <div className="splash" data-aos="fade-up">
      <div className="main">
        <h1 className="metal">
          SAMEH HAMMAD
          <span className="texture"></span>
        </h1>
      </div>
      <div className="main">
        <h1 className="metal2">
          Front End Web Developer
          <span className="texture"></span>
        </h1>
      </div>
      <img src={samehImg} alt="splash-img" className="splash-img" />
    </div>
  );
};

export default Splash;
