import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { CartContex } from "../context/CartContex";

export const FruitDetails = () => {
  const { fruitDetail, setFruitDetail } = useContext(CartContex);

  function closeModal() {
    setFruitDetail(null);
  }

  function outSideClick(event) {
    if (event.target == event.currentTarget) {
      setFruitDetail(null);
    }
  }

  return (
    <div
      onClick={outSideClick}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center p-2"
    >
      <div className="max-w-[500px] w-full p-4 pb-8 bg-slate-200 relative rounded">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-2 bg-slate-300 hover:bg-slate-400 transition-colors"
        >
          <GrClose />
        </button>
        <h2 className="text-2xl font-bold border-b border-slate-300 mb-4">
          {fruitDetail[0]?.name}
        </h2>
        <p>Genus: {fruitDetail[0]?.genus}</p>
        <p>Family: {fruitDetail[0]?.family}</p>
        <p>Order: {fruitDetail[0]?.order}</p>

        <div className="flex items-center justify-center mt-6">
          <table className="border-collapse border border-slate-500 ...">
            <thead>
              <tr>
                <th colSpan={2} className="border border-slate-600 ...">
                  Nutritional facts
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 px-2">Calories</td>
                <td className="border border-slate-700 px-2">
                  {fruitDetail[0]?.nutritions.calories} kcal
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2">Carbohydrates</td>
                <td className="border border-slate-700 px-2">
                  {fruitDetail[0]?.nutritions.carbohydrates} g
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2">Fat</td>
                <td className="border border-slate-700 px-2">
                  {fruitDetail[0]?.nutritions.fat} g
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2">Protein</td>
                <td className="border border-slate-700 px-2">
                  {fruitDetail[0]?.nutritions.protein} g
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2">Sugar</td>
                <td className="border border-slate-700 px-2">
                  {fruitDetail[0]?.nutritions.sugar} g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
