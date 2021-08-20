import React, { useState } from "react";
import "./header.css";
import logo from "../../images/guppy-logo.png";
export default function Header() {
  const [bool, setBool] = useState(false);

  const OpenNavbar = () => {
    setBool(!bool);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar flex justify-content-between">
          <div>
            <h1>Cart</h1>
          </div>
          <div>
            <h1 onClick={OpenNavbar}>Menu</h1>
            <div className="nav display-none" data-aos="fade-left">
              <div>
                <h1>close</h1>
              </div>
              <div>
                <h1>HOME</h1>
                <h1>SHOP</h1>
                <h1>CONTACT</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main ">
          <img class="logo" src={logo} alt="logo" />
          <h2>
            A spoonfun of pyaar| <br /> every morning
          </h2>
          <button className="my-btn-1 my-3">SHOP OUR BLEND</button>
        </div>
      </div>
    </div>
  );
}
