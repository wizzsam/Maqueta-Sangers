import React from "react";
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Linkedin, Twitter
} from "lucide-react";
import LogoSangers from "../assets/LogoSangersPng.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      {/* Top: columnas */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-8">
        {/* Marca + descripción */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <img src={LogoSangers} alt="Sangers" className="h-10 w-auto" />
           
          </div>
          <p className="text-sm leading-relaxed">
            Soluciones de saneamiento, protección y seguridad para empresas.
            Operamos con protocolos certificados y personal especializado.
          </p>

          {/* Datos rápidos */}
          <ul className="mt-4 text-sm space-y-1">
            <li><span className="text-gray-400">RUC:</span> 20XXXXXXXXXXX</li>
            <li><span className="text-gray-400">Razón social:</span> Sangers S.A.C.</li>
          </ul>
        </div>

        {/* Servicios */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-semibold text-white mb-3">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Desinfección de ambientes</a></li>
            <li><a href="#" className="hover:text-orange-400">Desratización</a></li>
            <li><a href="#" className="hover:text-orange-400">Desinsectación</a></li>
            <li><a href="#" className="hover:text-orange-400">Limpieza de Tanque</a></li>
            <li><a href="#" className="hover:text-orange-400">Limpieza de Cisterna</a></li>
          </ul>
        </div>

        {/* Productos / Enlaces rápidos */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-semibold text-white mb-3">Productos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Equipos y kits</a></li>
            <li><a href="#" className="hover:text-orange-400">Químicos certificados</a></li>
            <li><a href="#" className="hover:text-orange-400">EPP y señalización</a></li>
            <li><a href="#" className="hover:text-orange-400">Ver catálogo</a></li>
          </ul>
          
        </div>

        {/* Soporte */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-semibold text-white mb-3">Soporte</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Cotizaciones</a></li>
            <li><a href="#" className="hover:text-orange-400">Políticas y Términos</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacidad</a></li>
            <li><a href="#" className="hover:text-orange-400">Libro de Reclamaciones</a></li>
          </ul>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Lun–Vie: 8:30–18:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Sáb: 9:00–13:00</span>
            </div>
          </div>
        </div>

        {/* Contacto + Newsletter */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-semibold text-white mb-3">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-orange-400 mt-0.5" />
              <span>+51 9XX XXX XXX</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-orange-400 mt-0.5" />
              <span>info@sangers.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
              <span>Calle Principal 123, Ciudad</span>
            </li>
          </ul>

        
        </div>
      </div>

      {/* Middle: separador + redes */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SANGERS. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded bg-white/5 hover:bg-orange-500 transition-colors"><Facebook className="w-4 h-4 text-white" /></a>
            <a href="#" className="p-2 rounded bg-white/5 hover:bg-orange-500 transition-colors"><Instagram className="w-4 h-4 text-white" /></a>
            <a href="#" className="p-2 rounded bg-white/5 hover:bg-orange-500 transition-colors"><Linkedin className="w-4 h-4 text-white" /></a>
            <a href="#" className="p-2 rounded bg-white/5 hover:bg-orange-500 transition-colors"><Twitter className="w-4 h-4 text-white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
