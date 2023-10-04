import React from "react";
import Filter from "./filter/Filter";
import Products from "./product/Products";
import Cart from "./cart/Cart";


const Home = () => {
  return (
    <>
      <header className="header">
        <p>Hossein Shop</p>
      </header>
      <main>
        <div className="content">
           <div className="main">
            <Filter/>
            <Products/>
           </div>
           <div className="sidebar">
            <Cart/>
           </div>
        </div>
      </main>
      <footer className="footer">تکمیل شده توسط من و تو</footer>
    </>
  );
};

export default Home;
