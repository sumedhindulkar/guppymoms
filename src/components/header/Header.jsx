import React from "react";
import "./header.css";
import "../navbar/Navbar";
import logo from "../../images/guppy-logo.png";
import Navbar from "../navbar/Navbar";
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <div className="main">
          <h2 style={{ marginTop: "200px" }}>
            A spoonfun of pyaar| <br /> every morning
          </h2>
          <button className="my-btn-1 my-3">SHOP OUR BLEND</button>
        </div>
      </div>
    </div>
  );
}
