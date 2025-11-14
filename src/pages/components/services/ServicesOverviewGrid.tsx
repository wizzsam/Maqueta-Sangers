// src/pages/components/services/ServicesOverviewGrid.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services";
import { getServicesAccentClasses } from "./ServiceDetail";
import { Bug, SprayCan, Droplets, Rat, ShieldAlert, Bird } from "lucide-react";

const iconMap = {
    bug: Bug,
    spray: SprayCan,
    droplets: Droplets,
    rat: Rat,
    shield: ShieldAlert,
    bird: Bird,
} as const;

const ServicesOverviewGrid: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Cabecera de sección */}
                <div className="text-center mb-12">
                    <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-red-500 uppercase">
                        Servicios
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-blue-900">
                        Soluciones integrales de{" "}
                        <span className="bg-gradient-to-r from-red-500 via-orange-400 to-teal-500 bg-clip-text text-transparent">
                            saneamiento ambiental
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-600">
                        Elige el servicio que mejor se adapte a tu hogar, negocio o
                        industria. Cada servicio incluye protocolos certificados y productos
                        especializados.
                    </p>
                </div>

                {/* Grid de servicios más suelta */}
                <div className="mt-8 grid gap-10 md:grid-cols-2">
                    {SERVICES.map((service, index) => {
                        const accent = getServicesAccentClasses(service.accent);
                        const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldAlert;

                        return (
                            <motion.article
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-[2px] transition-all"
                            >
                                <div className="grid md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] h-full">
                                    {/* Columna de texto */}
                                    <div className="relative z-10 p-7 md:p-8 flex flex-col justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                                                <Icon
                                                    size={20}
                                                    className={accent.statAccent ?? "text-red-600"}
                                                />
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                                                    Servicio especializado
                                                </p>
                                                <h3 className="text-lg md:text-xl font-bold text-blue-900 leading-snug">
                                                    {service.name}
                                                </h3>
                                                <span className="inline-flex mt-1 text-[11px] rounded-full bg-blue-50 px-3 py-1 text-blue-800 font-medium">
                                                    {service.subtitle}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs md:text-sm text-gray-700 mt-2">
                                            {service.shortDescription}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-3 text-[11px] md:text-xs">
                                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 border border-gray-200">
                                                <span className="size-1.5 rounded-full bg-emerald-400" />
                                                Protocolos certificados
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 border border-gray-200">
                                                <span className="size-1.5 rounded-full bg-orange-400" />
                                                Planes para empresas y hogares
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between gap-4">
                                            <div className="hidden md:flex flex-col text-[10px] text-gray-500">
                                                <span>Incluye proceso, estadísticas</span>
                                                <span>y productos relacionados.</span>
                                            </div>

                                            <Link
                                                to={`/servicios/${service.id}`}
                                                className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-5 py-2.5 text-xs md:text-sm font-semibold shadow group-hover:bg-red-700 transition-colors"
                                            >
                                                Ver detalle
                                                <span className="text-[14px]">↗</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Columna de imagen con más respiro */}
                                    <div className="relative h-44 md:h-full">
                                        <img
                                            src={service.heroImage}
                                            alt={service.name}
                                            className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/35 via-slate-900/10 to-transparent" />
                                    </div>
                                </div>

                                {/* link invisible para toda la tarjeta */}
                                <Link
                                    to={`/servicios/${service.id}`}
                                    className="absolute inset-0"
                                    aria-label={`Ver detalle del servicio ${service.name}`}
                                />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverviewGrid;
