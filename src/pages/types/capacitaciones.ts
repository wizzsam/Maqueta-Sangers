// IDs válidos para las categorías de capacitación
export type TrainingCategoryId = "plagas" | "riesgos";

// Categoría general (Control de plagas / Riesgos)
export type TrainingCategory = {
  id: TrainingCategoryId;
  name: string;
  description?: string;
  items?: TrainingItem[];
};

// Curso individual
export type TrainingItem = {
  id: string;
  categoryId?: TrainingCategoryId;
  title: string;
  shortDescription: string;
  longDescription?: string;      // descripción extendida
  durationHours?: number;
  modality?: string;
  targetAudience?: string;
  tags?: string[];               // temas clave
  benefits?: string[];           // lista de beneficios
  videoId?: string;              // id de YouTube
};


