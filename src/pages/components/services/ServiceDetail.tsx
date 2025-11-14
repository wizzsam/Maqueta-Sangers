// src/pages/components/services/ServiceDetail.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Phone, ShoppingCart } from "lucide-react";
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
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
                    {/* COLUMNA TEXTO */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 24 }}
                            transition={{ duration: 0.45 }}
                            className="relative space-y-4 rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-sm px-6 py-6 md:px-8 md:py-7 shadow-sm"
                        >
                            {/* pill superior */}
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600 uppercase tracking-[0.16em]">
                                    Servicio especializado
                                </span>
                                <span className="hidden md:inline text-[11px] text-gray-500">
                                    {service.subtitle}
                                </span>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight">
                                    {service.name}
                                </h2>
                                <p className="mt-2 text-sm md:text-base text-gray-700">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Características principales
                                </h3>
                                <ul className="mt-3 space-y-2">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2
                                                size={18}
                                                className={`${accentClasses.bulletIcon} mt-[2px]`}
                                            />
                                            <span className="text-gray-700">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* mini pills de confianza */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-600 border border-gray-200">
                                    <span className="size-1.5 rounded-full bg-emerald-400" />
                                    Protocolos certificados
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-600 border border-gray-200">
                                    <span className="size-1.5 rounded-full bg-orange-400" />
                                    Cobertura para hogares y empresas
                                </span>
                            </div>

                            {/* CTA */}
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

                                {/* BOTÓN MÁS LLAMATIVO PARA PRODUCTOS */}
                                <Link
                                    to={`/servicios/${service.id}/productos`}
                                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors ${accentClasses.secondaryBtn}`}
                                >
                                    Ver productos del servicio
                                    <ShoppingCart
                                        size={16}
                                        className="transition-transform group-hover:translate-x-[2px]"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* COLUMNA IMAGEN */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={service.heroImage + service.id}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.45 }}
                            className="relative overflow-hidden rounded-3xl shadow-lg"
                        >
                            <img
                                src={service.heroImage}
                                alt={service.name}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent pointer-events-none" />
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
            secondaryBtn:
                "border border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100",
        };
    }
    if (accent === "amber") {
        return {
            primaryBtn: "bg-amber-500 hover:bg-amber-600",
            bulletIcon: "text-amber-500",
            stepNumber: "bg-amber-500 text-white",
            statAccent: "text-amber-500",
            secondaryBtn:
                "border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100",
        };
    }
    // red por defecto
    return {
        primaryBtn: "bg-red-600 hover:bg-red-700",
        bulletIcon: "text-red-500",
        stepNumber: "bg-red-600 text-white",
        statAccent: "text-red-600",
        secondaryBtn:
            "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100",
    };
}

// Export para reuso en otros componentes
export const getServicesAccentClasses = getAccentClasses;
