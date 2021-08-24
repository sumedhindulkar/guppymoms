import React, { useState } from "react";
import "./navbar.css";

import logo from "../../images/guppy-logo.png";
export default function Navbar() {
  const [bool, setBool] = useState(false);

  const OpenNavbar = () => {
    setBool(!bool);
  };
  return (
    <div className="navbar flex justify-content-between">
      <div>
        <h1>Cart</h1>
      </div>

      <img class="logo" src={logo} alt="logo" />
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
  );
}
