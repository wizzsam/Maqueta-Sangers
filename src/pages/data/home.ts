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
    id: "trampa-palomas",
    title: "Trampa para Palomas + Cebo",
    description: "Sistema de captura ética para techos y azoteas. Reutilizable.",
    image: TrampaPalomas,
    price: "S/ 129.00",
    href: "/productos/trampa-palomas",
  },
  {
    id: "gel-cucarachas",
    title: "Gel para Cucarachas",
    description:
      "Cebo en gel de rápida acción para cocinas y áreas sensibles.",
    image: GelCucarachas,
    price: "S/ 49.00",
    href: "/productos/gel-cucarachas",
  },  {
    id: "veneno-ratas2",
    title: "Veneno para Rata (Bloques parafinados)",
    description:
      "Rodenticida de alta eficacia para uso profesional. Resistente a la humedad.",
    image: VenenoRatas,
    price: "S/ 39.90",
    href: "/productos/veneno-ratas",
  },
  {
    id: "trampa-palomas2",
    title: "Trampa para Palomas + Cebo",
    description: "Sistema de captura ética para techos y azoteas. Reutilizable.",
    image: TrampaPalomas,
    price: "S/ 129.00",
    href: "/productos/trampa-palomas",
  },
  {
    id: "gel-cucarachas2",
    title: "Gel para Cucarachas",
    description:
      "Cebo en gel de rápida acción para cocinas y áreas sensibles.",
    image: GelCucarachas,
    price: "S/ 49.00",
    href: "/productos/gel-cucarachas",
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