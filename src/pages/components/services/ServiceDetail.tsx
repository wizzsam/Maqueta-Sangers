import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import type { Service, ServiceAccent } from "../../types/services";
import { WA_PHONE } from "../../data/services";

type Props = {
    service: Service;
};

export default function ServiceDetail({ service }: Props) {
    const accentClasses = getAccentClasses(service.accent);

    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
        service.whatsappText
    )}`;

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 24 }}
                            transition={{ duration: 0.45 }}
                            className="space-y-3"
                        >
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                {service.subtitle}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                                {service.name}
                            </h2>
                            <p className="text-sm md:text-base text-gray-700">
                                {service.description}
                            </p>

                            <div className="mt-4">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Características principales
                                </h3>
                                <ul className="mt-2 space-y-2">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2
                                                size={16}
                                                className={accentClasses.bulletIcon}
                                            />
                                            <span className="text-gray-700">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow ${accentClasses.primaryBtn}`}
                                >
                                    Agendar inspección
                                    <MessageCircle size={16} />
                                </a>
                                <a
                                    href={`tel:+${WA_PHONE}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                >
                                    Llamar ahora
                                    <Phone size={16} />
                                </a>

                                {/* NUEVO: botón a productos del servicio */}
                                <Link
                                    to={`/servicios/${service.id}/productos`}
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                >
                                    Ver productos del servicio
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={service.heroImage + service.id}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.45 }}
                            className="overflow-hidden rounded-3xl shadow-lg"
                        >
                            <img
                                src={service.heroImage}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function getAccentClasses(accent: ServiceAccent) {
    if (accent === "teal") {
        return {
            primaryBtn: "bg-teal-500 hover:bg-teal-600",
            bulletIcon: "text-teal-500",
            stepNumber: "bg-teal-500 text-white",
            statAccent: "text-teal-500",
        };
    }
    if (accent === "amber") {
        return {
            primaryBtn: "bg-amber-500 hover:bg-amber-600",
            bulletIcon: "text-amber-500",
            stepNumber: "bg-amber-500 text-white",
            statAccent: "text-amber-500",
        };
    }
    // red por defecto
    return {
        primaryBtn: "bg-red-600 hover:bg-red-700",
        bulletIcon: "text-red-500",
        stepNumber: "bg-red-600 text-white",
        statAccent: "text-red-600",
    };
}

// Export para reuso en otros componentes
export const getServicesAccentClasses = getAccentClasses;
