import React, { useEffect, useState } from "react";
import LogoSangers from "../assets/LogoSangersPng.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={LogoSangers} alt="Logo Sangers" className="h-10 w-auto" />
        </div>

        {/* Navegación */}
        <nav
          className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <a
            href="#"
            className={`pb-1 font-bold ${
              scrolled
                ? "text-orange-600 font-semibold border-b-2 border-orange-600"
                : "text-orange-400 font-semibold border-b-2 border-orange-400"
            }`}
          >
            Inicio
          </a>
          <a href="#" className="hover:text-orange-500 font-bold">
            Nosotros
          </a>
          <a href="#" className="hover:text-orange-500 font-bold">
            Servicios
          </a>
          <a href="#" className="hover:text-orange-500 font-bold">
            Productos
          </a>
          <a href="#" className="hover:text-orange-500 font-bold">
            Capacitaciones
          </a>
          <a
            href="#"
            className={`px-4 py-2 font-bold rounded-md transition-colors duration-200 ${
              scrolled
                ? "bg-teal-500 hover:bg-teal-600 text-white"
                : "bg-teal-500/90 hover:bg-teal-400 text-white"
            }`}
          >
            Contáctanos
          </a>
        </nav>
      </div>

      {/* Overlay para contraste sobre el hero */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      )}
    </header>
  );
};

export default Header;
