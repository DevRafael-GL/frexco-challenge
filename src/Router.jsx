import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
