import React from "react";
import {Routes , Route} from "react-router-dom";
import Main from "../components/style/main.module.css";
import Store from "../pages/store";
import Mac from "../pages/mac";
import Iphone from "../pages/iphone";
import Ipad from "../pages/ipad";
import Watch from "../pages/watch";
import Checkout from "../pages/checkout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Buymac from "../components/buy/buymac";
import {CartProvider} from "react-use-cart";
const Router = () => {
  return (
    <div className={Main}>
      <CartProvider>
        <Navbar />
        <div className={Main.body}>
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/shop-mac" element={<Mac />} />
            <Route path="/checkout-mac" element={<Checkout />} />
            <Route path="/shop-watch" element={<Watch />} />
            <Route path="/shop-iphone" element={<Iphone />} />
            <Route path="/shop-ipad" element={<Ipad />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/buy-mac" element={<Buymac/>} />
          </Routes>
       </div>
      <Footer />
      </CartProvider>
    </div>
  );
};

export default Router;
