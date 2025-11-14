import type {
  TrainingCategory,
  TrainingCategoryId,
  TrainingItem,
} from "../types/capacitaciones";

export const TRAINING_ITEMS: TrainingItem[] = [
  // ---------- CONTROL DE PLAGAS ----------
  {
    id: "control-plagas",
    categoryId: "plagas",
    title: "Control integral de plagas",
    shortDescription:
      "Fundamentos de control de insectos rastreros y voladores en entornos comerciales e industriales.",
    longDescription:
      "Esta capacitación integral está diseñada para formar a técnicos y responsables de saneamiento en el diagnóstico, planificación y ejecución de programas de control de plagas urbanas. Se revisan las normativas sanitarias vigentes, las características biológicas de las principales plagas y las mejores prácticas para implementar estrategias integradas de control. A lo largo del curso se analizan casos reales y se entregan herramientas para documentar correctamente las intervenciones y justificar técnicamente las decisiones tomadas en campo.",
    durationHours: 8,
    modality: "Presencial",
    targetAudience:
      "Operarios, técnicos de saneamiento ambiental, supervisores y jefes de mantenimiento.",
    tags: [
      "Plagas rastreras",
      "Plagas voladoras",
      "Inspección y diagnóstico",
      "Plan de control integral",
    ],
    benefits: [
      "Emisión de certificado de participación a nombre del colaborador.",
      "Mejor comprensión de la normativa sanitaria aplicable al control de plagas.",
      "Capacidad para diseñar y ejecutar programas de control integral en diferentes tipos de instalaciones.",
      "Material digital de apoyo (presentaciones, guías y checklists) para uso posterior.",
      "Recomendaciones personalizadas según el tipo de negocio y nivel de infestación.",
    ],
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "palomas",
    categoryId: "plagas",
    title: "Control de palomas",
    shortDescription:
      "Técnicas seguras y normativas para el control de aves urbanas y prevención de zoonosis.",
    longDescription:
      "Este curso se enfoca en la gestión segura y responsable de poblaciones de palomas en entornos urbanos, comerciales e industriales. Se revisan los riesgos sanitarios asociados, la legislación vigente y las diferentes estrategias de control físico, ambiental y conductual. También se analizan los tipos de barreras, sistemas de exclusión y buenas prácticas para minimizar el impacto en la operación del cliente.",
    durationHours: 4,
    modality: "Presencial",
    targetAudience:
      "Operarios de saneamiento ambiental, técnicos de mantenimiento, responsables de infraestructura y seguridad.",
    tags: [
      "Control de aves urbanas",
      "Zoonosis",
      "Sistemas de exclusión",
      "Limpieza y desinfección",
    ],
    benefits: [
      "Reducción de riesgos sanitarios asociados a excretas y anidación de palomas.",
      "Conocimiento de soluciones de exclusión y control de acceso de aves.",
      "Mejor presentación de fachadas, techos y estructuras frente a clientes e inspecciones.",
      "Criterios para seleccionar el sistema de control más adecuado según el tipo de instalación.",
    ],
    videoId: "J---aiyznGQ",
  },
  {
    id: "roedores",
    categoryId: "plagas",
    title: "Control de roedores",
    shortDescription:
      "Diseño de programas de desratización y manejo seguro de cebos.",
    longDescription:
      "La capacitación en control de roedores aborda el ciclo biológico de las principales especies comensales, su comportamiento y los puntos críticos donde suelen establecerse. Se desarrollan criterios para el diseño de programas de desratización internos y perimetrales, el uso responsable de rodenticidas, la gestión de estaciones de cebado y el registro de hallazgos. Incluye pautas de comunicación con el cliente y reporte de evidencias.",
    durationHours: 6,
    modality: "Mixta",
    targetAudience:
      "Operarios y técnicos de control de plagas, supervisores y personal de mantenimiento.",
    tags: [
      "Roedores",
      "Desratización",
      "Rodenticidas",
      "Estaciones de cebado",
      "Monitoreo perimetral",
    ],
    benefits: [
      "Capacidad para planificar e implementar un programa de desratización efectivo.",
      "Manejo seguro de cebos y rodenticidas minimizando riesgos a personas y mascotas.",
      "Mejor control de registros, planos de estaciones y evidencias de actividad.",
      "Reducción de daños estructurales y pérdidas de producto por actividad de roedores.",
    ],
    videoId: "kXYiU_JCYtU",
  },
  {
    id: "pulgas",
    categoryId: "plagas",
    title: "Control de pulgas",
    shortDescription:
      "Estrategias de control para pulgas en entornos residenciales e industriales.",
    longDescription:
      "Este curso aborda las características biológicas de las pulgas, su relación con huéspedes animales y las condiciones que favorecen su presencia en viviendas, almacenes y centros de trabajo. Se explican los pasos para un tratamiento integral que incluya diagnóstico, preparación del área, aplicación de productos y seguimiento. También se revisan medidas de prevención y comunicación al cliente para evitar reinfestaciones.",
    durationHours: 4,
    modality: "Presencial",
    targetAudience:
      "Técnicos de control de plagas, personal de saneamiento, veterinarias y servicios de limpieza especializada.",
    tags: [
      "Pulgas",
      "Vectores",
      "Saneamiento ambiental",
      "Tratamientos residenciales",
    ],
    benefits: [
      "Mejor capacidad para diagnosticar la fuente del problema y el huésped principal.",
      "Aplicación más efectiva de tratamientos en interiores y exteriores.",
      "Reducción de reclamos por reinfestaciones gracias a una comunicación clara con el cliente.",
      "Conocimiento de medidas preventivas para mascotas, vivienda y entorno.",
    ],
    videoId: "3JZ_D3ELwOQ",
  },

  // ---------- RIESGOS ----------
  {
    id: "altura",
    categoryId: "riesgos",
    title: "Trabajo en altura",
    shortDescription:
      "Uso seguro de arneses, líneas de vida y procedimientos para trabajos en altura.",
    longDescription:
      "La capacitación en trabajo en altura está orientada a prevenir caídas y accidentes graves durante actividades realizadas sobre plataformas, escaleras, andamios o estructuras elevadas. Se revisan los requisitos legales, los tipos de sistemas de protección, la inspección de equipos y los procedimientos seguros para montaje y desplazamiento. Incluye ejercicios de identificación de riesgos y elaboración de permisos de trabajo.",
    durationHours: 8,
    modality: "Presencial",
    targetAudience:
      "Operarios, supervisores, brigadistas de seguridad y contratistas que realizan labores en altura.",
    tags: [
      "Trabajo en altura",
      "Arneses y líneas de vida",
      "Protección contra caídas",
      "Permisos de trabajo",
    ],
    benefits: [
      "Disminución de accidentes por caídas a distinto nivel.",
      "Mayor conocimiento de los equipos de protección y su correcto uso.",
      "Mejor capacidad para elaborar y revisar permisos de trabajo en altura.",
      "Cumplimiento más sólido de normativas y requisitos de auditoría.",
    ],
    videoId: "2Vv-BfVoq4g",
  },
  {
    id: "electrico",
    categoryId: "riesgos",
    title: "Riesgo eléctrico",
    shortDescription:
      "Identificación, evaluación y control de riesgos eléctricos en planta.",
    longDescription:
      "Este curso profundiza en los riesgos asociados al contacto directo e indirecto con la energía eléctrica en instalaciones industriales, comerciales y de servicios. Se revisan conceptos básicos de electricidad, tipos de protección, señalización, prácticas seguras de intervención y bloqueo-etiquetado (LOTO). También se analizan incidentes frecuentes y medidas para evitar arcos eléctricos y choques.",
    durationHours: 6,
    modality: "Presencial",
    targetAudience:
      "Técnicos eléctricos, personal de mantenimiento, supervisores de planta y jefes de seguridad.",
    tags: [
      "Riesgo eléctrico",
      "LOTO",
      "Protecciones eléctricas",
      "Trabajos en tableros",
    ],
    benefits: [
      "Reducción de incidentes por choques eléctricos y cortocircuitos.",
      "Mayor dominio de prácticas de bloqueo y etiquetado para intervención segura.",
      "Mejor comprensión de protecciones, tableros y puntos críticos en planta.",
      "Cumplimiento de procedimientos y auditorías en materia de seguridad eléctrica.",
    ],
    videoId: "e-ORhEE9VVg",
  },
  {
    id: "materiales-peligrosos",
    categoryId: "riesgos",
    title: "Materiales peligrosos",
    shortDescription:
      "Manejo, etiquetado y almacenamiento seguro de sustancias peligrosas.",
    longDescription:
      "La capacitación en materiales peligrosos tiene como objetivo que el personal identifique correctamente los distintos tipos de sustancias, sus riesgos asociados y los requisitos de almacenamiento según normas y hojas de seguridad (HDS/ SDS). Se revisa el sistema de comunicación de peligros, señalización, equipos de contención y protocolos de respuesta ante derrames o fugas.",
    durationHours: 6,
    modality: "Mixta",
    targetAudience:
      "Personal de almacén, logística, producción, seguridad y medio ambiente.",
    tags: [
      "Sustancias peligrosas",
      "Hojas de seguridad (SDS)",
      "Almacenamiento seguro",
      "Respuesta a derrames",
    ],
    benefits: [
      "Mejor control en el almacenamiento y segregación de productos químicos.",
      "Reducción de incidentes por manipulación inadecuada o mezclas incompatibles.",
      "Mayor capacidad de respuesta ante derrames con procedimientos claros.",
      "Cumplimiento de requisitos legales y de aseguradoras en manejo de químicos.",
    ],
    videoId: "hTWKbfoikeg",
  },
  {
    id: "trabajos-caliente",
    categoryId: "riesgos",
    title: "Trabajos en caliente",
    shortDescription:
      "Buenas prácticas en soldadura, corte y esmerilado para prevenir incendios.",
    longDescription:
      "Este curso aborda los riesgos presentes en actividades de soldadura, oxicorte, esmerilado y otras tareas que generan chispas o fuentes de ignición. Se revisan los requisitos para permisos de trabajo en caliente, medidas de aislamiento, control de atmósferas inflamables y uso de equipos de protección. Incluye revisión de incidentes típicos y checklist de verificación previa.",
    durationHours: 4,
    modality: "Presencial",
    targetAudience:
      "Soldadores, personal de mantenimiento, supervisores de área e inspectores de seguridad.",
    tags: [
      "Trabajos en caliente",
      "Prevención de incendios",
      "Permisos de trabajo",
      "Equipos de protección",
    ],
    benefits: [
      "Disminución del riesgo de incendios por chispas o altas temperaturas.",
      "Uso más seguro de equipos de corte, soldadura y esmerilado.",
      "Mejor control de permisos de trabajo y medidas previas a la intervención.",
      "Mayor preparación para responder ante incidentes en trabajos en caliente.",
    ],
    videoId: "ktvTqknDobU",
  },
  {
    id: "izaje",
    categoryId: "riesgos",
    title: "Izaje de cargas",
    shortDescription:
      "Técnicas seguras de izaje con grúas y equipos de elevación.",
    longDescription:
      "La capacitación en izaje de cargas enseña a planificar y ejecutar maniobras con grúas, polipastos y otros equipos de elevación de manera segura. Se revisan conceptos de capacidad de carga, ángulos de eslinga, selección de accesorios, señalización entre operador y estrobador, así como criterios para inspección de eslingas y accesorios. Incluye análisis de casos reales y errores frecuentes.",
    durationHours: 8,
    modality: "Presencial",
    targetAudience:
      "Operadores de grúa, estrobadores, supervisores de mantenimiento y jefes de proyecto.",
    tags: [
      "Izaje de cargas",
      "Grúas móviles",
      "Eslingas y accesorios",
      "Señalización de maniobras",
    ],
    benefits: [
      "Reducción de incidentes por caídas o golpes de cargas durante maniobras.",
      "Mayor dominio de límites de carga, ángulos y selección de eslingas.",
      "Mejor coordinación entre operador, estrobador y personal en terreno.",
      "Cumplimiento de estándares de seguridad y buenas prácticas en izaje.",
    ],
    videoId: "fJ9rUzIMcZQ",
  },
];
export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: "plagas" as TrainingCategoryId,
    name: "Capacitaciones de Control de Plagas",
    description:
      "Cursos orientados al control seguro y profesional de plagas urbanas.",
    items: TRAINING_ITEMS.filter((i) => i.categoryId === "plagas"),
  },
  {
    id: "riesgos" as TrainingCategoryId,
    name: "Capacitaciones de Riesgos",
    description:
      "Formación en prevención de riesgos laborales y trabajos de alto riesgo.",
    items: TRAINING_ITEMS.filter((i) => i.categoryId === "riesgos"),
  },
];

