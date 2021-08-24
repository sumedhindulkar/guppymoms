import React from "react";
import Navbar from "../components/navbar/Navbar";
import Shop from "../components/shop/Shop";
import Footer from "../components/footer/Footer";
export default function ShopPage() {
  return (
    <div className="shop">
      <div className="container">
        <Navbar />
      </div>
      <Shop />
      <Footer />
    </div>
  );
}
