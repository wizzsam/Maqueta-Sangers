import React from "react";
import LogoSangers from "../assets/LogoSangersPng.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={LogoSangers}
            alt="Logo Sangers"
            className="h-10 w-auto"
          />
        
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <a href="#" className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">
            Inicio
          </a>
          <a href="#" className="hover:text-orange-600">
            Nosotros
          </a>
          <a href="#" className="hover:text-orange-600">
            Servicios
          </a>
          <a href="#" className="hover:text-orange-600">
            Productos
          </a>
          <a href="#" className="hover:text-orange-600">
            Capacitaciones
          </a>

          {/* Botón de contacto */}
          <a
            href="#"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
