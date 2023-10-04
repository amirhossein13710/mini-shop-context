import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import "./Cart.css";
import { DataContext } from "../../Context";

const Cart = () => {
  const value = useContext(DataContext);
  const [carts, setCarts] = value.carts;
  const removeItem = value.removeItem;
  const itemPrice = carts.reduce((a, c) => a + c.price * c.qty, 0)
  const totalPrice = itemPrice
  return (
    <>
      {
        carts.length === 0 ? <h2 className="empty-price">سبد خرید شما خالی است</h2>:
        <h2 className="cart-header">شما {carts.length} محصول در سبد خرید خود دارید</h2>
      }
      {carts.map((cart) => {
        return (
          <Fade left key={cart.id}>
            <div className="cart" >
              <div className="cart-title">
                <img src={cart.image} alt="." />
                <h4>اپل</h4>
              </div>
              <div className="about">
                <div className="price">
                  <p>{cart.price}</p>
                  <span>{cart.qty}خرید</span>
                </div>
                <button onClick={() => removeItem(cart)}>حذف از سبد خرید</button>
              </div>
            </div>
          </Fade>
        );
      })}
      <div className="total-price">مجموع خرید : {totalPrice}</div>
    </>
  );
};

export default Cart;
