import React, { useState, useContext } from "react";
import { BtnFruitDetails } from "../components/BtnFruitDetails";
import { FruitDetails } from "../components/FruitDetails";
import { CartContex } from "../context/CartContex";

export const Products = () => {
  const { data, addProductToCart, fruitDetail, setFruitDetail } =
    useContext(CartContex);

  if (!data) {
    return (
      <div className="h-full min-h-[calc(100vh-100px)] w-full flex justify-center items-center">
        <p className="text-3xl">Carregando...</p>
      </div>
    );
  }
  return (
    <div className="flex-1 max-w-[1100px] min-h-[calc(100vh-100px)] m-auto">
      <div className="px-4 mt-12 mb-12 h-20 bg-[url(../assets/fruit.jpg)] bg-center bg-no-repeat flex items-center rounded shadow">
        <h1 className="text-slate-200 text-3xl font-bold">Frutas</h1>
      </div>

      <main>
        <div className="flex flex-wrap">
          {data.map((fruit) => (
            <div key={fruit.id} className="basis-1/2 p-2">
              <div className="p-2 border shadow bg-slate-50 flex justify-between items-center rounded flex-wrap gap-2">
                <div>
                  <h2 className="font-bold">{fruit.name}</h2>
                  <BtnFruitDetails fruit={fruit} />
                </div>

                <div>
                  <button
                    onClick={() => addProductToCart(fruit.id)}
                    className="text-slate-50 bg-green-400 rounded p-1 hover:bg-opacity-80 transition-colors focus:outline-none focus:ring focus:ring-green-300"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {fruitDetail ? <FruitDetails /> : null}
      </main>
    </div>
  );
};
