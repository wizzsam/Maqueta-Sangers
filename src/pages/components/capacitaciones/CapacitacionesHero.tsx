import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../../assets/Insectos.webp";
import {
  Bug,
  Rat,
  Bird,
  SprayCan,
  ShieldAlert,
  Flame,
  Zap,
  FlaskConical,
  ArrowUpCircle,
} from "lucide-react";

import {
  TRAINING_CATEGORIES,
  TRAINING_ITEMS,
} from "../../data/capacitaciones";
import type {
  TrainingCategoryId,
  TrainingItem,
} from "../../types/capacitaciones";

type Props = {
  activeCategory: TrainingCategoryId;
  activeCourseId: string | null;
  onCategoryChange: (id: TrainingCategoryId) => void;
  onCourseChange: (id: string) => void;
};

// función auxiliar para iconos
const courseIconById = (course: TrainingItem) => {
  if (course.categoryId === "plagas") {
    if (course.id.includes("palomas")) return Bird;
    if (course.id.includes("roedores")) return Rat;
    if (course.id.includes("pulgas")) return SprayCan;
    return Bug;
  }
  if (course.categoryId === "riesgos") {
    if (course.id.includes("altura")) return ShieldAlert;
    if (course.id.includes("electrico")) return Zap;
    if (course.id.includes("materiales")) return FlaskConical;
    if (course.id.includes("trabajos-caliente")) return Flame;
    if (course.id.includes("izaje")) return ArrowUpCircle;
  }
  return Bug;
};

const CapacitacionesHero: React.FC<Props> = ({
  activeCategory,
  activeCourseId,
  onCategoryChange,
  onCourseChange,
}) => {
  const category = TRAINING_CATEGORIES.find(
    (c) => c.id === activeCategory
  )!;
  const courses = TRAINING_ITEMS.filter(
    (i) => i.categoryId === activeCategory
  );

  return (
    <section className="relative h-[65vh] min-h-[440px] w-full overflow-hidden">

      {/* Fondo + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          className="w-full h-full object-cover object-center"
        />

        {/* Degradado similar al de ContactHero */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center h-full pt-10">

        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs md:text-sm text-slate-200/80 mb-3 tracking-wide"
        >
          <Link
            to="/"
            className="text-slate-300/80 hover:text-slate-100 transition-colors"
          >
            Inicio
          </Link>

          <span className="mx-1 text-slate-400">/</span>
          <span className="text-orange-400 font-semibold">Capacitaciones</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg"
        >
          Nuestras{" "}
          <span className="text-orange-400">Capacitaciones</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-2xl text-slate-200 text-sm md:text-base"
        >
          Formación profesional certificada para tu equipo. Selecciona una categoría
          y luego un curso para ver el detalle.
        </motion.p>


        {/* TABS PRINCIPALES */}
        <div className="mt-6 flex flex-wrap gap-3">
          {TRAINING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${activeCategory === cat.id
                ? "border-orange-500 bg-orange-50 text-orange-600 shadow-sm"
                : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600"
                }`}
            >
              <ShieldAlert
                size={18}
                className={`transition-transform group-hover:scale-110 ${activeCategory === cat.id
                  ? "text-orange-600"
                  : "text-orange-500"
                  }`}
              />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>



        {/* Mensaje guía */}
        <div className="mt-4 w-fit flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[13px] text-gray-600 shadow-md border border-gray-200 backdrop-blur-sm">
          <span className="text-orange-500 text-sm">🛈</span>
          <span className="whitespace-nowrap">
            Elige una categoría y luego un curso para ver el detalle en la sección inferior.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CapacitacionesHero;
