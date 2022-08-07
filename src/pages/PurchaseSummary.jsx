import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BtnFruitDetails } from "../components/BtnFruitDetails";
import { CartContex } from "../context/CartContex";

export const PurchaseSummary = () => {
  const { purchaseSummary } = useContext(CartContex);

  if (!purchaseSummary) {
    return (
      <div className="flex-1 w-full h-full flex justify-center items-center p-20">
        <h1 className="text-2xl text-slate-600">Nenhum item foi encontrado.</h1>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center p-20 ">
      <div className="max-w-[550px] w-full bg-slate-50 rounded p-4 flex flex-col">
        <div className="border-b border-slate-200">
          <h2 className="text-3xl text-center text-gray-600 mb-2">
            Resumo da Compra
          </h2>
        </div>

        <div className="overflow-auto p-2">
          {purchaseSummary.map((product) => (
            <div
              key={product[0].id}
              className="w-full max-w-[550px] p-3 border shadow bg-slate-50 flex justify-between rounded m-1"
            >
              <div>
                <h2 className="font-bold">{product[0].name}</h2>
                <BtnFruitDetails fruit={product[0]} />
              </div>
            </div>
          ))}
        </div>

        <Link to="/">Ok</Link>
      </div>
    </div>
  );
};
