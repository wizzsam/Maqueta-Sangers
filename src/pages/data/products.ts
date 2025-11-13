// src/pages/data/products.ts
import type { ProductDetail } from "../types/products";

export const PRODUCT_DETAILS: ProductDetail[] = [
    // ---------- DESRATIZACIÓN ----------
    {
        id: "veneno-ratas",
        serviceId: "desratizacion",
        longDescription:
            "Rodenticida anticoagulante en pellets, formulado para uso profesional en control de ratas y ratones. Alta palatabilidad y estabilidad frente a humedad.",
        bullets: [
            "Actúa por ingestión con efecto acumulativo.",
            "Formulación estable para interiores y exteriores techados.",
            "Compatible con estaciones de cebo profesionales.",
            "Registro sanitario vigente para uso en saneamiento ambiental.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Aplicar 5–10 g por punto de cebo para ratones y 10–20 g para ratas, según nivel de infestación.",
    },
    {
        id: "veneno-ratas-kilo",
        serviceId: "desratizacion",
        longDescription:
            "Rodenticida anticoagulante en pellets presentación 1 kg, ideal para programas intensivos de desratización en industria y grandes superficies.",
        bullets: [
            "Saco resellable que protege el producto de la humedad.",
            "Formulado para consumo repetido y efecto letal diferido.",
            "Permite abastecer múltiples estaciones de cebo.",
            "Recomendado para contratos de desratización continuos.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Distribuir en estaciones de cebo de 20–40 g por punto, renovando según consumo.",
    },

    // ---------- CONTROL DE PALOMAS ----------
    {
        id: "trampa-palomas",
        serviceId: "control-palomas",
        longDescription:
            "Sistema de captura ética para palomas urbanas. Estructura metálica reforzada, reutilizable y apta para techos y azoteas.",
        bullets: [
            "Puerta de captura de fácil accionamiento.",
            "Permite liberación controlada en zonas autorizadas.",
            "Resistente a intemperie y condiciones urbanas.",
            "Ideal para planes de manejo responsable de aves.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
    },
    {
        id: "pinchos-aves",
        serviceId: "control-palomas",
        longDescription:
            "Barreras físicas en acero o policarbonato para impedir el posado de palomas en cornisas, letreros y estructuras.",
        bullets: [
            "Diseño que evita daño al ave y solo impide el posado.",
            "Base flexible para adaptarse a diferentes superficies.",
            "Resistente a rayos UV y condiciones de intemperie.",
            "Compatible con adhesivos y fijaciones mecánicas.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
    },

    // ---------- CONTROL DE PLAGAS / DESINSECTACIÓN ----------
    {
        id: "gel-cucarachas",
        serviceId: "control-plagas",
        longDescription:
            "Cebo en gel de alta atracción para cucarachas, diseñado para cocinas, restaurantes y áreas sensibles.",
        bullets: [
            "Fácil aplicación en grietas y rincones.",
            "Baja toxicidad para humanos y mascotas.",
            "Control efectivo incluso en infestaciones ocultas.",
            "No mancha ni deja residuos visibles.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Aplicar puntos de 0.03–0.06 g cada 0.5–1 m en zonas de tránsito de cucarachas.",
    },
    {
        id: "cebo-hormigas",
        serviceId: "control-plagas",
        longDescription:
            "Cebo en gel para control de hormigas, formulado para ser transportado al nido y eliminar la colonia.",
        bullets: [
            "Alta palatabilidad para diversas especies de hormigas.",
            "Uso recomendado en cocinas, oficinas y viviendas.",
            "No requiere mezclar ni diluir: listo para usar.",
            "Minimiza la necesidad de aspersiones generales.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Aplicar pequeñas gotas en rutas de hormigas y zonas de ingreso, renovando según consumo.",
    },
    {
        id: "insecticida-concentrado",
        serviceId: "desinsectacion",
        longDescription:
            "Concentrado emulsionable para control de insectos rastreros y voladores. Diseñado para uso profesional en saneamiento ambiental.",
        bullets: [
            "Puede aplicarse por aspersión, nebulización o termonebulización (según etiqueta).",
            "Formulación de amplio espectro contra diversas plagas.",
            "Apto para uso en áreas industriales, comerciales y residenciales.",
            "Permite diferentes diluciones según nivel de infestación.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Preparar la dilución indicada en la ficha técnica (ej. 10–30 ml/L de agua) y aplicar en superficies objetivo.",
    },

    // ---------- DESINFECCIÓN ----------
    {
        id: "amonio-cuaternario",
        serviceId: "desinfeccion",
        longDescription:
            "Desinfectante a base de amonio cuaternario de última generación para ambientes de alto tránsito y áreas críticas.",
        bullets: [
            "Eficaz frente a bacterias, virus y hongos de importancia sanitaria.",
            "Puede utilizarse por trapeado, pulverización o nebulización.",
            "No corrosivo en superficies compatibles, siguiendo indicaciones.",
            "Recomendado para oficinas, clínicas, comercios y plantas industriales.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Diluir según uso indicado (por ejemplo 1–2 % v/v) y aplicar dejando actuar el tiempo de contacto recomendado.",
    },
    {
        id: "nebulizador-electrico",
        serviceId: "desinfeccion",
        longDescription:
            "Equipo nebulizador eléctrico portátil para aplicación de desinfectantes en neblina fina.",
        bullets: [
            "Regulación de caudal para diferentes tamaños de gota.",
            "Depósito resistente a químicos de uso habitual en desinfección.",
            "Permite cubrir grandes áreas en tiempos reducidos.",
            "Ideal para oficinas, almacenes, auditorios y transporte.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
    },

    // ---------- LIMPIEZA DE CISTERNAS ----------
    {
        id: "cloro-granulado",
        serviceId: "limpieza-cisternas",
        longDescription:
            "Cloro granulado estabilizado para desinfección de cisternas, tanques y reservorios de agua potable.",
        bullets: [
            "Rápida disolución y alta concentración de cloro activo.",
            "Adecuado para protocolos de limpieza y choque sanitario.",
            "Ayuda a mantener parámetros microbiológicos dentro de norma.",
            "Uso profesional bajo procedimientos de seguridad establecidos.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
        dosage:
            "Dosificar según volumen del reservorio y concentración requerida, siguiendo la ficha técnica.",
    },
    {
        id: "kit-limpieza-cisternas",
        serviceId: "limpieza-cisternas",
        longDescription:
            "Kit de implementos para limpieza mecánica y desinfección de tanques y cisternas.",
        bullets: [
            "Incluye herramientas para retiro de sedimentos y lavado interno.",
            "Compatible con desinfectantes certificados como cloro granulado.",
            "Pensado para cuadrillas de saneamiento y mantenimiento.",
            "Permite estandarizar el proceso de limpieza en campo.",
        ],
        techSheetUrl: "#",
        safetySheetUrl: "#",
        resolutionUrl: "#",
    },
];
