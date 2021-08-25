import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/guppy-logo.png";
import rock from "../../images/icons/rock.png";
import { honeydew } from "color-name";
export default function Navbar() {
  const [bool, setBool] = useState(false);
  const [contact, setContact] = useState(false);
  const navLink = { textDecoration: "none", color: "inherit" };
  return (
    <div className="navbar flex justify-content-between">
      <div>
        <h1>Cart </h1>
      </div>

      <img class="logo" src={logo} alt="logo" />
      <div>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            setBool(!bool);
          }}
        >
          Menu
        </h1>
        <div className={bool ? "navbar-active nav" : "display-none"}>
          <div>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => {
                setBool(!bool);
              }}
            >
              close
            </h1>
          </div>
          <div className="nav-items">
            <NavLink style={navLink} to="/">
              <h1>HOME</h1>
            </NavLink>
            <NavLink style={navLink} to="/shop">
              <h1>SHOP</h1>
            </NavLink>
            <NavLink style={navLink} to="/">
              <h1>CONTACT</h1>
            </NavLink>
            <div>
              <div className="flex justify-content-center">
                <img className="rock" src={rock} alt="rock" />
              </div>
              <div style={{ display: "flex" }}>
                <a
                  style={{ margin: "10px !important" }}
                  style={navLink}
                  href="/"
                >
                  <p>Instagram</p>
                </a>
                |
                <a
                  style={{ margin: "10px !important" }}
                  style={navLink}
                  href="/"
                >
                  <p>Facebook</p>
                </a>
                |
                <a
                  style={{ margin: "10px !important" }}
                  style={navLink}
                  href="/"
                >
                  <p>Spotify</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
