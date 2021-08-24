import React from "react";
import "./footer.css";
import logo from "../../images/icons/guppy-moms-logo.png";
import clove from "../../images/icons/clove.png";
import rock from "../../images/icons/rock.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container py-4">
        <div className="top flex">
          <div className="w-50 left flex">
            <div className="w-50 tl-left">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="w-50 tl-right flex flex-column justify-content-evenly">
              <h3 className="my-2">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </h3>
              <p className="my-2">
                Email Us: info@guppymoms.com <br />
                <br />
                Text: 91-987654321 <br />
                Call: 91-987654321
              </p>
            </div>
          </div>
          <div className=" w-50 right  flex flex-column">
            <div className="tr-top">
              <h2 className="my-2">Explore</h2>
              <div className="flex">
                <div className="w-50">
                  <p>
                    Shop Goods <br /> Avail Subscription
                    <br /> Where to Find Us
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    Delivery FAQs <br /> Terms of Service <br />
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>
            <div className="tr-bottom flex">
              <h2>Newsletter</h2>
              <input className="" placeholder="Enter Email to Sign up" />
            </div>
          </div>
        </div>
        <marquee>
          <div className="bottom flex">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <>
                  <div className="flex">
                    <img src={clove} alt="clove" />
                    <h2>
                      Follow us <br />
                      on Instagram
                    </h2>
                  </div>
                  <div className="flex">
                    <img src={rock} alt="clove" />
                    <h2>
                      Vibe with us <br />
                      on Spotify
                    </h2>
                  </div>
                </>
              );
            })}
          </div>
        </marquee>
      </div>
    </div>
  );
}
