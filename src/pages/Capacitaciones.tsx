import React, { useState } from "react";
import CapacitacionesHero from "./components/capacitaciones/CapacitacionesHero";
import CapacitacionesContent from "./components/capacitaciones/CapacitacionesContent";
import CapacitacionesCTA from "./components/capacitaciones/CapacitacionesCTA";

import { TRAINING_ITEMS } from "./data/capacitaciones";
import type { TrainingCategoryId } from "./types/capacitaciones";

const Capacitaciones: React.FC = () => {

  // 🔹 Categoría por defecto
  const [activeCategory, setActiveCategory] =
    useState<TrainingCategoryId>("plagas");

  // 🔹 Curso por defecto: se selecciona automáticamente el primero de "plagas"
  const [activeCourseId, setActiveCourseId] = useState<string | null>(() => {
    const first = TRAINING_ITEMS.find((c) => c.categoryId === "plagas");
    return first ? first.id : null;
  });

  // 🔹 Cuando cambias de categoría → seleccionar curso automáticamente
  const handleCategoryChange = (categoryId: TrainingCategoryId) => {
    setActiveCategory(categoryId);

    const firstCourse = TRAINING_ITEMS.find(
      (c) => c.categoryId === categoryId
    );

    setActiveCourseId(firstCourse ? firstCourse.id : null);
  };

  // 🔹 Cuando seleccionas manualmente un curso (tab o "ver más")
  const handleCourseChange = (courseId: string) => {
    setActiveCourseId(courseId);
  };

  return (
    <main className="w-full bg-gray-50">
      <CapacitacionesHero
        activeCategory={activeCategory}
        activeCourseId={activeCourseId}
        onCategoryChange={handleCategoryChange}
        onCourseChange={handleCourseChange}
      />

      <CapacitacionesContent
        activeCategory={activeCategory}
        activeCourseId={activeCourseId}
        onCourseChange={handleCourseChange} 
      />

      <CapacitacionesCTA />
    </main>
  );
};

export default Capacitaciones;
