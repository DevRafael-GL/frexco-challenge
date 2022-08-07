import React, { useContext, useState } from "react";
import { CartContex } from "../context/CartContex";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { BtnFruitDetails } from "../components/BtnFruitDetails";
import { FruitDetails } from "../components/FruitDetails";
import { toast } from "react-toastify";

export const Cart = () => {
  const {
    data,
    productsCart,
    addProduct,
    reduceProduct,
    handleChange,
    fruitDetail,
    removeProductToCart,
    cleanCart,
  } = useContext(CartContex);

  const filterCart = productsCart.map((product) =>
    data?.filter((fruit) => fruit.id == product.id)
  );

  function confirmationToDeleteItem(productId, productName) {
    const result = confirm(`Deseja deletar ${productName} do carrinho?`);
    if (result === true) {
      removeProductToCart(productId);
    }
  }

  function confirmationToCleanCart() {
    const result = confirm(`Deseja limpar o carrinho?`);
    if (result === true) {
      cleanCart();
    }
  }

  function confirmationToCompletePurchase() {
    const result = confirm(`Deseja finalizar a compra?`);
    if (result === true) {
      cleanCart();
      toast.success("Obrigado por comprar com a gente!");
    }
  }

  if (!filterCart.length > 0) {
    return (
      <div className="w-full min-h-[calc(100vh-170px)] flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-6 text-center">Seu carrinho está vazio!</h2>
        <Link
          className="py-2 px-4 bg-green-400 rounded max-w-fit hover:bg-opacity-80 transition-colors focus:outline-none focus:ring focus:ring-green-300"
          to="/"
        >
          Fazer compras
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[550px] min-h-[calc(100vh-200px)] m-auto flex flex-col items-center mt-8 pb-20">
      <div className="w-full flex justify-between items-center mb-2 bg-slate-50 shadow rounded p-4">
        <h2 className="text-xl font-bold">Carrinho de Compras</h2>
        <button
          onClick={() => confirmationToCleanCart()}
          className="text-slate-50 hover:bg-red-500 bg-red-600 px-2 py-1 rounded transition-colors focus:outline-none focus:ring focus:ring-red-500"
        >
          Limpar carrinho
        </button>
      </div>

      {filterCart.map((product) => (
        <div
          key={product[0].id}
          className="w-full max-w-[550px] p-3 border shadow bg-slate-50 flex justify-between rounded m-1"
        >
          <div>
            <h2 className="font-bold">{product[0].name}</h2>
            <BtnFruitDetails fruit={product[0]} />
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-2 justify-center items-center border border-slate-200 p-1 rounded">
              <button
                onClick={() => reduceProduct(product[0].id)}
                id={product[0].id}
              >
                <RiSubtractFill />
              </button>
              <input
                className="w-6 text-center bg-transparent"
                aria-invalid="false"
                type="tel"
                min={1}
                id={product[0].id}
                value={
                  productsCart?.find((item) => item.id == product[0].id)?.qtd
                }
                onChange={(e) => handleChange(e)}
              />
              <button
                onClick={() => addProduct(product[0].id)}
                id={product[0].id}
              >
                <MdOutlineAdd />
              </button>
            </div>

            <button
              onClick={() =>
                confirmationToDeleteItem(product[0].id, product[0].name)
              }
              className="text-red-600 hover:text-red-500 ml-6 transition-colors"
            >
              <MdRemoveShoppingCart size={25} />
            </button>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center mt-2 bg-slate-50 shadow rounded p-4 gap-4">
        <Link
          to="/"
          className="text-slate-50 hover:bg-cyan-500 bg-cyan-600 px-2 py-1 rounded transition-colors focus:outline-none focus:ring focus:ring-cyan-500"
        >
          Escolher mais produtos
        </Link>

        <button
          onClick={confirmationToCompletePurchase}
          className="text-slate-50 hover:bg-green-300 bg-green-400 px-2 py-1 rounded transition-colors focus:outline-none focus:ring focus:ring-green-300"
        >
          Finalizar compra
        </button>
      </div>
      {fruitDetail ? <FruitDetails /> : null}
    </div>
  );
};
