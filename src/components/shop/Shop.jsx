import React from "react";
import "./shop.css";
import shopTea from "../../images/shop-tea.png";
export default function Shop() {
  const nutriFacts = {
    Protien: "4.7g",
    Fat: "4.8g",
    Saturated: "2.1g",
    Carbohydrates: "28.8g",
    Sodium: "1.29g",
  };
  return (
    <div className="container main-shop flex">
      <div className="w-50 left">
        <img src={shopTea} alt="shop" />
      </div>
      <div className="w-50 right">
        <div className="tea-content">
          <h2>
            Signature
            <br />
            Masala Blend
          </h2>
          <p className="my-2 w-70">
            Here’s a blend to make your tea time extra special. Through a unique
            toasting and blending process, we’ve dialled up the flavours of what
            we love most. <br />
            <br />
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s.
          </p>
          <form className="flex flex-column">
            <input type="text" placeholder="Enter Pincode to check delivery" />
            <div className="">
              <button className="my-btn-1 my-3">ADD TO CART</button>
              <button className=" subscription my-btn-2 mx-3 my-3">
                GET SUBSCRIPTION
              </button>
            </div>
          </form>
        </div>
        <div className="tea-ingridients">
          <p>
            <span>Ingredients :</span> Cardamom, Cinnamon, Nutmeg, Star{" "}
            <br className="display-none-mob" />
            Anise, Clove, Black Pepper, Saffron.
          </p>
        </div>
        <div className="sprinkle py-4">
          <p>Sprinkle on -</p>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>Share your unique Guppy moms recipe with us here</p>
        </div>
        <div className="nutrition">
          <h3>Nutritional Info:</h3>
          <div className="nutrition-p">
            <div>
              <p>Parameter</p>
              <p>per 100g</p>
            </div>
            <div>
              {Object.keys(nutriFacts).map((item) => {
                return (
                  <div className="nutri-contain">
                    <p>{item}</p>
                    <span />
                    <p>{nutriFacts[item]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
