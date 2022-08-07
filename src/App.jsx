import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { CartContexProvider } from "./context/CartContex";
import { Router } from "./Router";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContexProvider>
          <Header />
          <Router />
          <Footer />
        </CartContexProvider>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
