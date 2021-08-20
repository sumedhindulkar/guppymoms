import React from "react";
import "./ingredients.css";
import spoon from "../../images/spoon.png";
export default function Ingredients() {
  return (
    <div className="ing">
      <div className="container">
        <div className="bottom flex py-4">
          <div className="w-50">a</div>
          <div className="w-50">b</div>
          <img className="spoon" data-aos="fade-up" src={spoon} alt="spoon" />
        </div>
      </div>
    </div>
  );
}
