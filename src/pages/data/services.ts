import Desratizacion from "../../assets/Desratizacion.webp";
import Palomas from "../../assets/Palomas.jpg";
import Insectos from "../../assets/Insectos.webp";

import type { Service } from "../types/services";
import { WHATSAPP_PHONE } from "./home";

export const SERVICES: Service[] = [
    {
        id: "control-plagas",
        name: "Control de Plagas",
        subtitle: "Desinsectación integral de ambientes",
        shortDescription:
            "Tratamientos seguros contra cucarachas, hormigas, arañas y otras plagas rastreras.",
        description:
            "Servicio completo de control de plagas para hogares, comercios e industrias. Trabajamos con productos certificados y técnicas profesionales para eliminar la infestación y prevenir nuevas apariciones.",
        heroImage: Insectos,
        accent: "red",
        icon: "bug",
        features: [
            "Diagnóstico de zonas críticas y tipo de plaga.",
            "Aplicación de geles, cebos y aspersiones según el área.",
            "Productos de baja toxicidad para personas y mascotas.",
            "Plan de seguimiento para evitar reinfestaciones.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Inspección",
                description: "Evaluación del nivel de infestación y zonas afectadas.",
            },
            {
                order: 2,
                title: "Tratamiento inicial",
                description:
                    "Aplicación del protocolo según tipo de plaga y ambiente.",
            },
            {
                order: 3,
                title: "Seguimiento",
                description: "Revisión de efectividad y ajustes si son necesarios.",
            },
            {
                order: 4,
                title: "Prevención",
                description: "Recomendaciones y barreras físicas o químicas.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "24–72 horas",
                helper: "Según nivel de infestación.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Técnicos certificados",
                helper: "Capacitados en plagas urbanas.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Certificación de servicio",
                helper: "Documentación para auditorías y fiscalizaciones.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar el servicio de Control de Plagas para mi empresa/negocio.",
        relatedProductIds: ["gel-cucarachas", "cebo-hormigas", "insecticida-concentrado"],
    },
    {
        id: "desinfeccion",
        name: "Desinfección de Ambientes",
        subtitle: "Control integral de patógenos y bacterias",
        shortDescription:
            "Nebulización y desinfección de ambientes con productos certificados.",
        description:
            "Desinfección de amplio espectro para oficinas, locales comerciales e instituciones. Eliminamos virus, bacterias y microorganismos patógenos con productos autorizados.",
        heroImage: Desratizacion,
        accent: "red",
        icon: "spray",
        features: [
            "Productos amonio cuaternario de alta eficacia.",
            "Cobertura total de superficies y aire.",
            "Protocolos aplicados durante COVID-19 y post pandemia.",
            "Tiempo de reingreso seguro según normativa.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Inspección",
                description: "Revisión de áreas a desinfectar y riesgos presentes.",
            },
            {
                order: 2,
                title: "Preparación",
                description: "Protección de equipos sensibles y señalización.",
            },
            {
                order: 3,
                title: "Aplicación",
                description: "Nebulización, termonebulización o aspersión.",
            },
            {
                order: 4,
                title: "Verificación",
                description: "Control visual y entrega de documentación.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "24–48 horas",
                helper: "Incluye tiempo de reingreso.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Equipo especializado",
                helper: "Experiencia en ambientes críticos.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Informe de desinfección",
                helper: "Respaldo para auditorías sanitarias.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar el servicio de Desinfección de Ambientes.",
        relatedProductIds: ["amonio-cuaternario", "nebulizador-electrico"],
    },
    {
        id: "desratizacion",
        name: "Desratización",
        subtitle: "Control profesional de roedores",
        shortDescription:
            "Sistema integral de control de ratas y ratones con métodos seguros.",
        description:
            "Implementamos un plan de control de roedores basado en diagnóstico, trampas y cebos certificados. Ideal para almacenes, restaurantes, industrias y hogares.",
        heroImage: Desratizacion,
        accent: "teal",
        icon: "rat",
        features: [
            "Trampas mecánicas y estaciones de cebos.",
            "Productos autorizados y supervisados.",
            "Inspección de puntos de ingreso.",
            "Plan de monitoreo continuo.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Diagnóstico",
                description: "Identificación de nidos, rutas y señales de roedores.",
            },
            {
                order: 2,
                title: "Trampa selectiva",
                description: "Instalación de trampas y estaciones en puntos clave.",
            },
            {
                order: 3,
                title: "Control",
                description: "Revisión periódica y reposición de cebos.",
            },
            {
                order: 4,
                title: "Seguimiento",
                description: "Informe y recomendaciones estructurales.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "7–14 días",
                helper: "Según nivel de infestación.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Técnicos certificados",
                helper: "Manejo seguro de rodenticidas.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Plan de monitoreo",
                helper: "Visitas de seguimiento programadas.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar el servicio de Desratización para mi local.",
        relatedProductIds: ["veneno-ratas", "veneno-ratas-kilo"],
    },
    {
        id: "desinsectacion",
        name: "Desinsectación",
        subtitle: "Control especializado de insectos",
        shortDescription:
            "Eliminación de insectos voladores y rastreros con protocolos seguros.",
        description:
            "Control de mosquitos, pulgas, chinches y otras plagas mediante técnicas específicas y productos de baja toxicidad para personas.",
        heroImage: Insectos,
        accent: "amber",
        icon: "shield",
        features: [
            "Identificación del tipo de insecto.",
            "Tratamientos dirigidos por especie y ambiente.",
            "Control de larvas y focos de reproducción.",
            "Estrategias preventivas para evitar recurrencias.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Identificación",
                description: "Análisis de especie y nivel de infestación.",
            },
            {
                order: 2,
                title: "Tratamiento inicial",
                description: "Aplicación de protocolo especializado.",
            },
            {
                order: 3,
                title: "Seguimiento",
                description: "Control de efectividad a los 7–10 días.",
            },
            {
                order: 4,
                title: "Prevención",
                description: "Recomendaciones para evitar nuevas apariciones.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "48–72 horas",
                helper: "Dependiendo de la plaga tratada.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Equipo especializado",
                helper: "Uso de productos de baja toxicidad.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Certificado de servicio",
                helper: "Soporte para inspecciones sanitarias.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar el servicio de Desinsectación para mi negocio.",
        relatedProductIds: ["insecticida-concentrado", "gel-cucarachas"],
    },
    {
        id: "limpieza-cisternas",
        name: "Limpieza de Cisternas",
        subtitle: "Desinfección profunda de reservorios de agua",
        shortDescription:
            "Lavado, desinfección y certificación sanitaria para sistemas de agua potable.",
        description:
            "Servicio integral de limpieza, desinfección y mantenimiento de tanques y cisternas de agua. Garantizamos agua segura y apta para consumo.",
        heroImage: Desratizacion,
        accent: "teal",
        icon: "droplets",
        features: [
            "Vaciado y limpieza profunda del reservorio.",
            "Eliminación de sedimentos, lodos y algas.",
            "Desinfección con cloro certificado.",
            "Pruebas de calidad del agua y conformidad.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Inspección",
                description: "Evaluación del estado interno del tanque.",
            },
            {
                order: 2,
                title: "Vaciado",
                description: "Extracción segura del agua existente.",
            },
            {
                order: 3,
                title: "Limpieza",
                description: "Lavado, desinfección y enjuague final.",
            },
            {
                order: 4,
                title: "Certificación",
                description: "Informe técnico y recomendaciones de mantenimiento.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "1–2 días",
                helper: "Incluye llenado y reposición.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Equipo especializado",
                helper: "Trabajo en espacios confinados.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Documento de conformidad",
                helper: "Respaldo para auditorías internas.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar limpieza y desinfección de cisterna o tanque de agua.",
        relatedProductIds: ["cloro-granulado", "kit-limpieza-cisternas"],
    },
    {
        id: "control-palomas",
        name: "Control de palomas",
        subtitle: "Gestión ética y efectiva de aves urbanas",
        shortDescription:
            "Instalación de barreras físicas, trampas y planes de control.",
        description:
            "Diseñamos soluciones para el control de palomas en techos, fachadas y estructuras, combinando métodos físicos, trampas y planes de manejo responsable.",
        heroImage: Palomas,
        accent: "teal",
        icon: "bird",
        features: [
            "Evaluación de puntos de anidación y posado.",
            "Instalación de púas, redes y otros elementos disuasivos.",
            "Uso de trampas de captura ética donde aplique.",
            "Plan de mantenimiento y limpieza de residuos.",
        ],
        processTitle: "Proceso de servicio",
        processSteps: [
            {
                order: 1,
                title: "Diagnóstico",
                description: "Identificación de rutas y zonas de descanso.",
            },
            {
                order: 2,
                title: "Diseño de solución",
                description: "Selección de barreras y sistemas de control.",
            },
            {
                order: 3,
                title: "Instalación",
                description: "Montaje de redes, púas y/o trampas.",
            },
            {
                order: 4,
                title: "Mantenimiento",
                description: "Revisión periódica y ajustes necesarios.",
            },
        ],
        stats: [
            {
                id: "time",
                label: "Tiempo de resultados",
                value: "7–30 días",
                helper: "Según complejidad de la estructura.",
            },
            {
                id: "staff",
                label: "Personal",
                value: "Técnicos en altura",
                helper: "Equipados para trabajos en techos y fachadas.",
            },
            {
                id: "warranty",
                label: "Garantía",
                value: "Plan de servicio",
                helper: "Revisión y mantenimiento programado.",
            },
        ],
        whatsappText:
            "Hola, deseo cotizar un servicio de Control de Palomas para mi edificio.",
        relatedProductIds: ["trampa-palomas", "pinchos-aves"],
    },
];

export const DEFAULT_SERVICE_ID: Service["id"] = "desinfeccion";

export const WA_PHONE = WHATSAPP_PHONE;
