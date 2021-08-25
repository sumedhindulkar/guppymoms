import React from "react";
import "./teatime.css";
import cloudA from "../../images/cloud-a.png";
import cloudB from "../../images/cloud-b.png";
import cloudC from "../../images/cloud-c.png";
import box from "../../images/guppy-moms-box.png";
import playlist from "../../images/playlist-cover.jpg";
import oldA from "../../images/old-a.jpg";
import oldB from "../../images/old-b.jpg";
import oldC from "../../images/old-c.jpg";
export default function Teatime() {
  return (
    <div className="tea-time">
      <div className="tea-time-bg">
        <img
          className="clouds"
          data-aos="zoom-in"
          id="cloudA"
          src={cloudA}
          alt="cloud"
        />
        <img
          className="clouds"
          data-aos="zoom-out-left"
          id="cloudB"
          src={cloudB}
          alt="cloud"
        />
        <img
          className="clouds"
          data-aos="zoom-out-right"
          id="cloudC"
          src={cloudC}
          alt="cloud"
        />
      </div>
      <div className="melodies" data-aos="zoom-in">
        <img className="playlist" src={playlist} alt="playlist" />
        <div className="p-2">
          <h2>Teatime Melodies</h2>
        </div>
      </div>
      <div className="old-days display-none-mob">
        <div className="container flex justify-content-evenly">
          <img src={oldA} alt="old" />
          <img src={oldB} alt="old" />
          <img src={oldC} alt="old" />
        </div>
      </div>
    </div>
  );
}
