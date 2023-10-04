import React, { createContext, useState } from "react";
import data from "./data.json";

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("asc");
  const [brands, setBrands] = useState("all");
  const [carts, setCarts] = useState([]);

  const sortProduct = (e) => {
    setSort(e.target.value);
    if (sort === "asc") {
      setProducts(data.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setProducts(data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProducts = (e) => {
    if (e.target.value === "all") {
      setBrands(e.target.value);
      setProducts(data);
    } else {
      setBrands(e.target.value);
      setProducts(
        data.filter(
          (product) => product.avalebleBrand.indexOf(e.target.value) >= 0
        )
      );
    }
  };
  const addProducts = (item) => {
    const exist = carts.find((element) => element.id === item.id);
    if (exist) {
      setCarts(
        carts.map((element) =>
          element.id === item.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCarts([...carts, {...item, qty: 1 }]);
    }
  };

  const removeItem = (cart)=>{
    const exist = carts.find((element)=>element.id === cart.id)
    if(exist.qty === 1){
      setCarts(carts.filter((element)=> element.id !== cart.id))
    }else{
      setCarts(
        carts.map((element)=> element.id === cart.id ? {...exist ,qty: exist.qty - 1} : element)
      )
    }
  }

  const value = {
    products: [products, setProducts],
    sortProduct,
    filterProducts,
    addProducts,
    carts : [carts, setCarts],
    removeItem,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
