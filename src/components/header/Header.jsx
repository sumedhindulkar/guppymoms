import React from "react";
import "./header.css";
import "../navbar/Navbar";
import logo from "../../images/guppy-logo.png";
import Navbar from "../navbar/Navbar";
import bgImg from "../../images/guppymoms-header-bg.jpg";
export default function Header() {
  return (
    <div className="header">
      <img className="header-bg" src={bgImg} alt="tea" />
      <div className="container">
        <Navbar />
        <div className="main">
          <h2>
            A spoonfun of pyaar| <br /> every morning
          </h2>
          <button className="my-btn-1 my-3">SHOP OUR BLEND</button>
        </div>
      </div>
    </div>
  );
}
