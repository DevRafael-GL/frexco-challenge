import React, { useContext } from "react";
import { CartContex } from "../context/CartContex";

export const BtnFruitDetails = ({ fruit }) => {
  const { data, fruitDetail, setFruitDetail } = useContext(CartContex);

  function handleClick(event) {
    const fruitFilter = data?.filter((fruit) => fruit.id == event.target.id);
    setFruitDetail(fruitFilter);
  }

  if (fruitDetail) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "initial";
  }

  return (
    <button
      id={fruit?.id}
      onClick={handleClick}
      className="underline underline-offset-1 hover:text-cyan-600"
    >
      Detalhes
    </button>
  );
};
