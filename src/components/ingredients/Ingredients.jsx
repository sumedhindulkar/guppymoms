import React from "react";
import "./ingredients.css";
import spoon from "../../images/spoon.png";
import six from "../../images/six.png";
import stickers from "../../images/stickers.png";
import bowl from "../../images/bowl.png";
import clouds from "../../images/cloud-a.png";
export default function Ingredients() {
  return (
    <div className="ing">
      <div className="container">
        <div className="top  flex flex-column align-items-center">
          <h1 data-aos="fade-left">You Are What You Drink</h1>
          <p data-aos="fade-left" className="w-40 my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="center">
          <img classname="stick" src={stickers} alt="stickers" />
          <img classname="stick" src={bowl} alt="bowl" />
          <div id="cloud-a" data-aos="fade-right">
            <img className="clouds" src={clouds} alt="clouds" />
          </div>
          <div id="cloud-b" data-aos="fade-left">
            <img className="clouds" src={clouds} alt="clouds" />
          </div>
        </div>
        <div className="bottom flex py-4">
          <div className="w-50 left">
            <h1 data-aos="fade-right">
              What's in a<br />
              Spoon?
            </h1>
            <p data-aos="fade-right" className="w-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="w-50  mt-max right">
            <h1 data-aos="fade-left">
              Cardamom <sup>PROTECTIVE</sup>
            </h1>
            <hr data-aos="fade-left" />
            <h1 data-aos="fade-left">
              Cinnamon <sup>PREBIOTIC</sup>
            </h1>
            <hr data-aos="fade-left" />
            <h1 data-aos="fade-left">
              Nutmeg <sup>ANTIOXIDATIVE</sup>
            </h1>
            <hr data-aos="fade-left" />
            <h1 data-aos="fade-left">
              Star Anise <sup>IMMUNITY BOOSTER</sup>
            </h1>
            <hr data-aos="fade-left" />
            <h1 data-aos="fade-left">
              Clove <sup>REGULATORY</sup>
            </h1>
            <hr data-aos="fade-left" />
            <h1 data-aos="fade-left">
              Black Pepper <sup>REGULATORY</sup>
            </h1>
            <hr data-aos="fade-left" />
          </div>
          <img className="spoon" data-aos="fade-up" src={spoon} alt="spoon" />
          <img
            className="six"
            data-aos="fade-up"
            data-aos-delay="300"
            src={six}
            alt="spoon"
          />
        </div>
      </div>
    </div>
  );
}
