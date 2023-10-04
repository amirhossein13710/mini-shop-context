import React, { useContext } from "react";
import { DataContext } from "../../Context";
import "./Products.css";
import { Fade } from "react-reveal";

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const addProducts = value.addProducts

  return (
    <div className="products">
      {products.map((product) => {
        return (
            <div className="single-product" key={product.id}>
              <img src={product.image} alt="." />
              <h4>{product.title}</h4>
              <div className="description">
                <button onClick={()=>addProducts(product)}>افزودن به سبد خرید</button>
                <p>{product.price}تومان </p>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Products;
