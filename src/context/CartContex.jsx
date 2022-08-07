import React, { useState } from "react";
import { toast } from "react-toastify";

import { createContext } from "react";
import { useApi } from "../hooks/useApi";

export const CartContex = createContext();

export const CartContexProvider = ({ children }) => {
  const [fruitDetail, setFruitDetail] = useState(null);

  const [productsCart, setProductsCart] = useState([]);

  const { data } = useApi("https://www.fruityvice.com/api/fruit/all");

  function addProductToCart(id) {
    const products = [...productsCart];

    const item = products.find((product) => product.id == id);

    if (!item) {
      products.push({ id: id, qtd: 1 });
    }

    setProductsCart(products);
    toast.success("Item adicionado ao carrinho.");
  }

  function addProduct(id) {
    const products = [...productsCart];
    const item = productsCart.find((product) => product.id == id);

    item.qtd = item.qtd + 1;

    setProductsCart(products);
  }

  function reduceProduct(id) {
    const products = [...productsCart];
    const item = productsCart.find((product) => product.id == id);

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
    }

    setProductsCart(products);
  }

  function handleChange(event) {
    const products = [...productsCart];
    const item = productsCart.find((product) => product.id == event.target.id);

    if (!isNaN(event.target.value)) {
      item.qtd = +event.target.value;
    }

    setProductsCart(products);
  }

  function removeProductToCart(id) {
    const products = [...productsCart];

    const removeProduct = products.filter((product) => product.id !== id);

    setProductsCart(removeProduct);
    toast.success("Item removido.");
  }

  function cleanCart() {
    setProductsCart([]);
  }

  return (
    <CartContex.Provider
      value={{
        data,
        productsCart,
        addProductToCart,
        addProduct,
        reduceProduct,
        setProductsCart,
        handleChange,
        fruitDetail,
        setFruitDetail,
        removeProductToCart,
        cleanCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};
