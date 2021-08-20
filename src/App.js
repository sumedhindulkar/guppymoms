import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import Header from "./components/header/Header";
import ShopBlend from "./components/shopBlend/ShopBlend";
import Ingredients from "./components/ingredients/Ingredients";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <div>
      <Header />
      <ShopBlend />
      <Ingredients />
    </div>
  );
}

export default App;
