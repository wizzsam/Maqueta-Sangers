import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoSangers from "../assets/LogoSangersPng.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseNavText = scrolled ? "text-gray-800" : "text-white";

  const linkClass = (isActive: boolean) =>
    [
      "pb-1 font-bold transition-colors",
      baseNavText,
      "hover:text-orange-500",
      isActive
        ? scrolled
          ? "text-orange-600 border-b-2 border-orange-600"
          : "text-orange-400 border-b-2 border-orange-400"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img src={LogoSangers} alt="Logo Sangers" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* Navegación */}
        <nav
          className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors duration-300`}
        >
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) => linkClass(isActive)}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) => linkClass(isActive)}
          >
            Servicios
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) => linkClass(isActive)}
          >
            Productos
          </NavLink>

          <NavLink
            to="/capacitaciones"
            className={({ isActive }) => linkClass(isActive)}
          >
            Capacitaciones
          </NavLink>

          {/* CTA: si luego tienes /contacto, lo apuntas ahí */}
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              [
                "px-4 py-2 font-bold rounded-md transition-colors duration-200",
                isActive ? "ring-2 ring-offset-2 ring-teal-500/70" : "",
                scrolled
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : "bg-teal-500/90 hover:bg-teal-400 text-white",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            Contáctanos
          </NavLink>
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
