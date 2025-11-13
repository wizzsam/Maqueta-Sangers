import type {
    TimelineItem,
    MetricItem,
    ValueItem,
    HighlightItem,
    TeamRole,
} from "../types/about";

import TeamPhoto from "../../assets/nosotros/team.webp"; // pon la imagen que tengas
import HistoryPhoto from "../../assets/nosotros/Insectos.webp"; // idem

export const ABOUT_IMAGES = {
    history: HistoryPhoto,
    team: TeamPhoto,
};

export const ABOUT_HERO = {
    title: "Conoce a Sangers",
    highlighted: "Sangers",
    subtitle:
        "Empresa familiar comprometida con la salud ambiental de las comunidades del norte peruano.",
};

export const ABOUT_HISTORY = {
    heading: "Nuestra Historia",
    paragraphs: [
        "Sangers nació como una empresa familiar en Áncash hace más de 15 años, con una misión clara: crear espacios más seguros y saludables para familias y empresas.",
        "Lo que comenzó como un pequeño emprendimiento se ha convertido en un referente regional en saneamiento ambiental y control de plagas.",
        "Desde el primer día, nos comprometimos a mantener los más altos estándares de calidad, seguridad y profesionalismo. Hoy, nuestro equipo comparte el mismo objetivo: proteger tu salud y la de quienes te rodean.",
        "Con cientos de clientes satisfechos y miles de servicios realizados, Sangers es sinónimo de confianza, respuesta rápida y cumplimiento estricto de normativas sanitarias.",
    ],
};

export const MISSION_TEXT =
    "Proteger la salud pública y el entorno mediante servicios de saneamiento ambiental de excelencia, utilizando metodologías científicas certificadas, personal altamente capacitado y estricto cumplimiento de normativas técnicas y legales.";

export const VISION_TEXT =
    "Ser la empresa líder y más confiable en saneamiento ambiental del norte del Perú, reconocidos por nuestra excelencia técnica, innovación continua y compromiso con la salud pública y el cuidado del medio ambiente.";

export const VALUES: ValueItem[] = [
    {
        id: "seguridad",
        title: "Seguridad",
        description:
            "Protocolos certificados y personal capacitado para garantizar la protección de tu entorno.",
        icon: "shield",
    },
    {
        id: "compromiso",
        title: "Compromiso",
        description:
            "Acompañamos cada proyecto de inicio a fin, priorizando la satisfacción de nuestros clientes.",
        icon: "heart",
    },
    {
        id: "innovacion",
        title: "Innovación",
        description:
            "Tecnología de punta y métodos actualizados para un saneamiento ambiental más eficiente.",
        icon: "zap",
    },
    {
        id: "responsabilidad",
        title: "Responsabilidad Social",
        description:
            "Soluciones sostenibles que cuidan la salud pública y respetan el entorno local.",
        icon: "users",
    },
];

export const TIMELINE: TimelineItem[] = [
    {
        year: "2008",
        title: "Fundación de Sangers en Áncash",
        description: "Inicio de operaciones y primeros contratos locales.",
    },
    {
        year: "2012",
        title: "Certificación DIGESA obtenida",
        description: "Formalización de procesos y estándares sanitarios.",
    },
    {
        year: "2016",
        title: "Expansión al norte del Perú",
        description: "Atención a nuevas ciudades y sectores industriales.",
    },
    {
        year: "2020",
        title: "Especialización en desinfección post COVID",
        description: "Servicios críticos para empresas e instituciones.",
    },
    {
        year: "2023",
        title: "Certificación ISO 9001",
        description: "Gestión de calidad aplicada a todos los servicios.",
    },
    {
        year: "2024",
        title: "Líderes regionales",
        description: "Referentes en soluciones integrales de saneamiento.",
    },
];

export const METRICS: MetricItem[] = [
    {
        id: "years",
        value: "15+",
        label: "Años de Trayectoria",
        helper: "Experiencia en saneamiento ambiental.",
    },
    {
        id: "clients",
        value: "500+",
        label: "Clientes Satisfechos",
        helper: "Empresas, hogares e instituciones.",
    },
    {
        id: "services",
        value: "50K+",
        label: "Servicios Realizados",
        helper: "Intervenciones en toda la región norte.",
    },
    {
        id: "cert",
        value: "100%",
        label: "Certificación Oficial",
        helper: "Cumplimiento de normativas sanitarias.",
    },
];

export const HIGHLIGHTS: HighlightItem[] = [
    {
        id: "ubicacion",
        title: "Ubicación",
        description: "Basados en Áncash, atendemos todo el norte del Perú.",
        icon: "map",
    },
    {
        id: "disponibilidad",
        title: "Disponibilidad",
        description: "Atención 24/7 para emergencias sanitarias.",
        icon: "clock",
    },
    {
        id: "certificacion",
        title: "Certificación",
        description: "Todos nuestros servicios cumplen estándares oficiales.",
        icon: "badge",
    },
];

export const TEAM_ROLES: TeamRole[] = [
    {
        id: "gerencia",
        title: "Gerencia General",
        description:
            "Dirección estratégica y supervisión de operaciones clave.",
    },
    {
        id: "equipo-tecnico",
        title: "Equipo Técnico",
        description: "Profesionales especializados en cada tipo de servicio.",
    },
    {
        id: "coordinadores",
        title: "Coordinadores",
        description: "Gestión de proyectos, logística y atención al cliente.",
    },
    {
        id: "operarios",
        title: "Operarios",
        description:
            "Personal certificado en campo con experiencia comprobada.",
    },
];
