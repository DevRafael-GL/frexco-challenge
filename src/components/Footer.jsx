import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 px-2 py-3 shadow-lg shadow-slate-300 mt-8 flex flex-col items-center justify-center">
      <p>
        Desenvolvido por{" "}
        <a
          className="underline text-cyan-600"
          href="https://github.com/DevRafael-GL"
        >
          Rafael G. Lima
        </a>
      </p>
      <p>&copy; Alguns direitos reservados.</p>
    </footer>
  );
};
