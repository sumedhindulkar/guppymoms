import React from "react";

import Header from "../components/header/Header";
import ShopBlend from "../components/shopBlend/ShopBlend";
import Ingredients from "../components/ingredients/Ingredients";
import Teatime from "../components/teatime/Teatime";
import Footer from "../components/footer/Footer";

import "./homeMobile.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <ShopBlend />
      <Ingredients />
      <Teatime />
      <Footer />
    </div>
  );
}

export default Home;
