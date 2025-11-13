import Desratizacion from "../../assets/Desratizacion.webp";
import Palomas from "../../assets/Palomas.jpg";
import Insectos from "../../assets/Insectos.webp";

import VenenoRatas from "../../assets/productos/venenorata.webp";
import TrampaPalomas from "../../assets/productos/trampaPaloma.jpg";
import GelCucarachas from "../../assets/productos/gelcucaracha.jpeg";

//SLIDER SECTORES
import type { SectorItem } from "../components/home/SectorsMarquee";
import Oficinas from "../../assets/sectores/oficina.jpg";
import Edificios from "../../assets/sectores/edificio.jpeg";
import Viviendas from "../../assets/sectores/viviendas.jpg";
import Clinicas from "../../assets/sectores/clinicas.jpg";
import Grifos from "../../assets/sectores/grifos.jpg";
import Restaurantes from "../../assets/sectores/restaurantes.jpeg";

import type { Slide, Product } from "../types/home";

export const WHATSAPP_PHONE = "51999999999";
export const WA_MSG = encodeURIComponent(
  "Hola, deseo cotizar un servicio de saneamiento (control de plagas / desinfección / limpieza de cisternas)."
);

export const SLIDES: Slide[] = [
  {
    src: Desratizacion,
    alt: "Equipo realizando saneamiento",
    title: "Saneamiento ambiental profesional para espacios seguros",
    description:
      "Control integral de plagas, desinfección y limpieza de cisternas con respaldo normativo.",
  },
  {
    src: Palomas,
    alt: "Control de palomas en la ciudad",
    title: "Eliminación y control de palomas",
    description:
      "Gestión ética y efectiva: trampas, barreras físicas y planes de control para techos y fachadas.",
  },
  {
    src: Insectos,
    alt: "Control de insectos",
    title: "Desinsectación especializada",
    description:
      "Tratamientos contra cucarachas, hormigas, arañas y más. Productos certificados y seguros.",
  },
];

export const PRODUCTS: Product[] = [
  // -------- DESRATIZACIÓN --------
  {
    id: "veneno-ratas",
    title: "Veneno para Rata (Bloques parafinados)",
    description:
      "Rodenticida de alta eficacia para uso profesional. Resistente a la humedad.",
    image: VenenoRatas,
    price: "S/ 39.90",
    href: "/productos/veneno-ratas",
  },
  {
    id: "veneno-ratas-kilo",
    title: "Rodenticida pellets 1 kg",
    description:
      "Rodenticida anticoagulante en pellets para control intensivo de ratas y ratones.",
    image: VenenoRatas,
    price: "S/ 130.00",
    href: "/productos/veneno-ratas-kilo",
  },

  // -------- CONTROL DE PALOMAS --------
  {
    id: "trampa-palomas",
    title: "Trampa para Palomas + Cebo",
    description: "Sistema de captura ética para techos y azoteas. Reutilizable.",
    image: TrampaPalomas,
    price: "S/ 129.00",
    href: "/productos/trampa-palomas",
  },
  {
    id: "pinchos-aves",
    title: "Pinchos anti-aves en acero",
    description:
      "Barreras físicas para evitar el posado de palomas en cornisas y estructuras.",
    image: TrampaPalomas,
    price: "S/ 89.00",
    href: "/productos/pinchos-aves",
  },

  // -------- CONTROL DE PLAGAS / DESINSECTACIÓN --------
  {
    id: "gel-cucarachas",
    title: "Gel para Cucarachas",
    description:
      "Cebo en gel de rápida acción para cocinas y áreas sensibles.",
    image: GelCucarachas,
    price: "S/ 49.00",
    href: "/productos/gel-cucarachas",
  },
  {
    id: "cebo-hormigas",
    title: "Cebo en gel para hormigas",
    description:
      "Fórmula de alta atracción para control de hormigas en interiores y exteriores techados.",
    image: GelCucarachas,
    price: "S/ 44.90",
    href: "/productos/cebo-hormigas",
  },
  {
    id: "insecticida-concentrado",
    title: "Insecticida concentrado emulsionable",
    description:
      "Concentrado profesional para dilución y aplicación en control de insectos rastreros y voladores.",
    image: GelCucarachas,
    price: "S/ 79.00",
    href: "/productos/insecticida-concentrado",
  },

  // -------- DESINFECCIÓN --------
  {
    id: "amonio-cuaternario",
    title: "Desinfectante Amonio Cuaternario",
    description:
      "Desinfectante de amplio espectro para ambientes críticos, oficinas y comercios.",
    image: Desratizacion,
    price: "S/ 65.00",
    href: "/productos/amonio-cuaternario",
  },
  {
    id: "nebulizador-electrico",
    title: "Nebulizador eléctrico portátil",
    description:
      "Equipo para aplicación de desinfectantes en neblina fina, ideal para espacios cerrados.",
    image: Desratizacion,
    price: "S/ 650.00",
    href: "/productos/nebulizador-electrico",
  },

  // -------- LIMPIEZA DE CISTERNAS --------
  {
    id: "cloro-granulado",
    title: "Cloro granulado para cisternas",
    description:
      "Cloro granulado estabilizado para desinfección de reservorios de agua potable.",
    image: Insectos,
    price: "S/ 59.00",
    href: "/productos/cloro-granulado",
  },
  {
    id: "kit-limpieza-cisternas",
    title: "Kit de limpieza para cisternas",
    description:
      "Juego de implementos para limpieza mecánica y desinfección de tanques.",
    image: Insectos,
    price: "S/ 189.00",
    href: "/productos/kit-limpieza-cisternas",
  },
];

export const SECTORES: SectorItem[] = [
  { id: "oficinas", name: "Oficinas", image: Oficinas },
  { id: "edificios", name: "Edificios", image: Edificios },
  { id: "viviendas", name: "Viviendas", image: Viviendas },
  { id: "clinicas", name: "Clínicas", image: Clinicas },
  { id: "grifos", name: "Grifos", image: Grifos },
  { id: "restaurantes", name: "Restaurantes", image: Restaurantes },

];