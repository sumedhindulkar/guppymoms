import React from "react";
import "./footer.css";
import logo from "../../images/icons/guppy-moms-logo.png";
import clove from "../../images/icons/clove.png";
import rock from "../../images/icons/rock.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container py-4">
        <div className="w-50 top flex">
          {/* <img className="logo" src={logo} alt="logo" /> */}
        </div>
        <div className="w-50 bottom"></div>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
