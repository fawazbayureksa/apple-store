import React from "react";
import {Routes , Route} from "react-router-dom";
import Main from "../components/style/main.module.css";
import Store from "../pages/store";
import Shop from "../pages/shop";
import Mac from "../pages/mac";
import Checkout from "../pages/checkout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Buymac from "../components/buy/buymac";
const Router = () => {
  return (
    <div className={Main}>
      <Navbar />
        <div className={Main.body}>
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/shop-mac" element={<Mac />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/buy-mac" element={<Buymac/>} />
          </Routes>
       </div>
      <Footer />
    </div>
  );
};

export default Router;
