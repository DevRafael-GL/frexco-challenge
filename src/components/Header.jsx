import React, { useContext } from "react";
import logo from "../assets/logo-frexco.png";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContex } from "../context/CartContex";

export const Header = () => {
  const { productsCart } = useContext(CartContex);

  return (
    <header className="fixed top-0 right-0 left-0 bg-slate-50 px-2 py-3 shadow shadow-slate-300">
      <div className="max-w-[1100px] m-auto flex justify-between">
        <Link to="/" className="w-32">
          <img className="w-full" src={logo} alt="Logo Frexco" />
        </Link>
        <Link
          to="/cart"
          className="relative w-16 flex justify-center items-center bg-zinc-200 rounded-full hover:bg-zinc-300 transition-colors border border-zinc-300"
        >
          {productsCart.length !== 0 && (
            <p className="absolute flex justify-center items-center w-6 h-6 top-0 right-0 bg-red-600 rounded-full text-slate-100">
              {productsCart ? productsCart.length : 0}
            </p>
          )}
          <BsCart3 size={25} />
        </Link>
      </div>
    </header>
  );
};
