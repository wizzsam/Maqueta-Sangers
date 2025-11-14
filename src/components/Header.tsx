import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import LogoSangers from "../assets/LogoSangersPng.png";

// SOLO nombres + rutas, los datos serios siguen en /pages/data/services.ts
const serviceLinks = [
  { id: "control-plagas", label: "Control de Plagas" },
  { id: "desinfeccion", label: "Desinfección de Ambientes" },
  { id: "desratizacion", label: "Desratización" },
  { id: "desinsectacion", label: "Desinsectación" },
  { id: "limpieza-cisternas", label: "Limpieza de Cisternas" },
  { id: "control-palomas", label: "Control de Palomas" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isServicesActive = pathname.startsWith("/servicios");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const realScrolled = isHome ? scrolled : true;
  const baseNavText = realScrolled ? "text-gray-800" : "text-white";

  const linkClass = (isActive: boolean) =>
    [
      "pb-1 font-bold transition-colors",
      baseNavText,
      "hover:text-orange-500",
      isActive
        ? realScrolled
          ? "text-orange-600 border-b-2 border-orange-600"
          : "text-orange-400 border-b-2 border-orange-400"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${realScrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img src={LogoSangers} alt="Logo Sangers" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) => linkClass(isActive)}
          >
            Nosotros
          </NavLink>

          {/* Servicios con DESPLEGABLE */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* el NavLink marca activo todo /servicios */}
            <NavLink
              to="/servicios"
              className={() => linkClass(isServicesActive)}
            >
              Servicios
            </NavLink>

            {/* Dropdown */}
            {servicesOpen && (
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 top-full
                  w-72 rounded-2xl bg-white shadow-xl
                  border border-gray-100 py-3 z-50
                "
              >
                <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase">
                  Nuestros servicios
                </p>

                <div className="flex flex-col">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.id}
                      to={`/servicios/${s.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-2 border-t border-gray-100 pt-2">
                  <Link
                    to="/servicios"
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-red-600 hover:text-red-700 flex items-center justify-between"
                  >
                    Ver todos los servicios
                    <span className="text-[11px] text-gray-500">Catálogo</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

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

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              [
                "px-4 py-2 font-bold rounded-md transition-colors duration-200",
                isActive ? "ring-2 ring-offset-2 ring-teal-500/70" : "",
                realScrolled
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

      {/* Overlay suave SOLO en home */}
      {isHome && !realScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      )}
    </header>
  );
};

export default Header;
