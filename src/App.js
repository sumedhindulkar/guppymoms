import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./views/Home";
import ShopPage from "./views/ShopPage";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={ShopPage} />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
