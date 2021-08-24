import React from "react";
import "./shopBlend.css";
import scroll from "../../images/Group9.svg";
import guppy from "../../images/guppy.png";
import text from "../../images/text.png";

export default function ShopBlend() {
  return (
    <div className="shop-blend">
      <div className="container">
        <div className="top flex ">
          <div className="w-50 left flex flex-column justify-content-between">
            <h1>
              Throw Some Lava <br />
              In Your Cuppa
            </h1>
            <img className="scroll-img" src={scroll} alt="scroll" />
          </div>
          <div className=" right w-50 flex flex-column  justify-content-evenly ">
            <p className="w-80">
              No venture capitalists. No consultants. No office. Just our
              kitchen and our mom with her trusty mortar and pestle. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="w-80">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
            <p className="w-80">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="bottom  flex">
          <div data-aos="fade-right" className="left w-50 flex flex-column">
            <div className="flex flex-column justify-content-evenly">
              <h1>Want a taste?</h1>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <button className="my-btn-1">SHOP OUR BLEND</button>
            </div>
          </div>
          <div className=" right w-50">
            <img data-aos="zoom-in" src={guppy} />
          </div>
        </div>
      </div>
      <div class="tea">
        <img data-aos="zoom-in" src={text} />
      </div>
    </div>
  );
}
