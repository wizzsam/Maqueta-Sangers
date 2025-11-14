import React from "react";
import { motion } from "framer-motion";
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
  onCourseChange: (id: string) => void;
};

const CapacitacionesContent: React.FC<Props> = ({
  activeCategory,
  activeCourseId,
  onCourseChange,
}) => {
  const category = TRAINING_CATEGORIES.find(
    (c) => c.id === activeCategory
  )!;
  const courses = TRAINING_ITEMS.filter(
    (i) => i.categoryId === activeCategory
  );
  const selectedCourse: TrainingItem | null = activeCourseId
    ? courses.find((c) => c.id === activeCourseId) || null
    : null;

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* VISTA GENERAL (SIN CURSO SELECCIONADO) */}
          {!selectedCourse && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
                Categoría
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-gray-600 max-w-2xl mb-6">
                  {category.description}
                </p>
              )}

              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Cursos incluidos:
              </h3>
              <ul className="grid gap-3 md:grid-cols-2">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    onClick={() => onCourseChange(course.id)}
                    className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700 cursor-pointer transition hover:bg-gray-100 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-blue-900">
                        {course.title}
                      </span>
                      <span className="text-xs font-semibold text-blue-600">
                        Ver más →
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {course.shortDescription}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* DETALLE DE CURSO */}
          {selectedCourse && (
            <motion.div
              id="course-detail"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
                {category.name}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
                {selectedCourse.title}
              </h2>
                <div className="sticky top-20 z-40 bg-white/80 backdrop-blur border-b border-gray-200 py-2 mb-4">
            <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                <button
                    key={course.id}
                    onClick={() => onCourseChange(course.id)}
                    className={`px-3 py-1 text-sm rounded-full border transition 
                    ${
                        activeCourseId === course.id
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                    {course.title}
                </button>
                ))}
            </div>
            </div>
              {/* Chips arriba */}
              <div className="mt-1 mb-5 flex flex-wrap gap-3 text-xs font-medium">
                <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1">
                  Duración:
                  {selectedCourse.durationHours
                    ? ` ${selectedCourse.durationHours} horas`
                    : " según requerimiento"}
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1">
                  Modalidad:
                  {selectedCourse.modality ||
                    " Presencial o virtual a coordinar"}
                </span>
                {selectedCourse.targetAudience && (
                  <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-3 py-1">
                    Dirigido a: {selectedCourse.targetAudience}
                  </span>
                )}
              </div>

              {/* Descripciones */}
              <p className="text-gray-600 max-w-2xl mb-3">
                {selectedCourse.shortDescription}
              </p>
              {selectedCourse.longDescription && (
                <p className="text-gray-600 max-w-3xl mb-6 text-sm leading-relaxed">
                  {selectedCourse.longDescription}
                </p>
              )}

              {/* CARD CENTRAL */}
              <div className="mt-6 rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 px-6 py-6 md:px-8 md:py-8">
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  {/* COLUMNA IZQUIERDA */}
                  <div className="space-y-5 text-sm text-gray-700">
                    {selectedCourse.tags && selectedCourse.tags.length > 0 && (
                      <div>
                        <p className="font-semibold mb-1">
                          Temas clave que se abordan:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedCourse.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <p className="font-semibold mb-1">
                        Beneficios de la capacitación:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {(selectedCourse.benefits ?? []).map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* COLUMNA DERECHA: VIDEO + PANEL */}
                  <div className="space-y-4">
                    {selectedCourse.videoId ? (
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-200">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${selectedCourse.videoId}`}
                          title={`Video de capacitación - ${selectedCourse.title}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="aspect-video rounded-2xl border border-gray-200 bg-gray-900/80 flex items-center justify-center text-gray-100 text-xs md:text-sm">
                        <span className="text-center px-4">
                          Próximamente podrás ver un video de presentación de
                          esta capacitación.
                        </span>
                      </div>
                    )}

                    <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 px-4 py-4 text-sm text-orange-900 shadow-sm border border-orange-100">
                      <h3 className="font-semibold mb-2">
                        ¿Por qué capacitar a tu equipo?
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Reduce incidentes y riesgos operativos.</li>
                        <li>Mejora el cumplimiento de normativas.</li>
                        <li>
                          Refuerza la cultura de seguridad y prevención en la
                          organización.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CapacitacionesContent;