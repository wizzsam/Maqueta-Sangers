// src/pages/components/services/ServiceProcess.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Service } from "../../types/services";
import { getServicesAccentClasses } from "./ServiceDetail";

type Props = {
    service: Service;
};

export default function ServiceProcess({ service }: Props) {
    const accent = getServicesAccentClasses(service.accent);

    return (
        <section id="proceso-servicio" className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-red-500 uppercase">
                        Proceso
                    </p>
                    <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900">
                        {service.processTitle}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
                        Conoce los pasos que seguimos para brindar un servicio seguro,
                        eficiente y con resultados medibles.
                    </p>
                </div>

                <div className="relative">
                    {/* línea de tiempo solo en desktop */}
                    <div className="hidden md:block absolute inset-x-0 top-10 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 pointer-events-none" />

                    <div className="grid gap-6 md:grid-cols-4">
                        {service.processSteps.map((step, index) => (
                            <motion.article
                                key={step.order}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col rounded-3xl bg-white shadow-sm border border-gray-100 px-5 py-6 md:py-7 text-center md:text-left"
                            >
                                {/* circulito del paso */}
                                <div className="flex items-center justify-center md:justify-start mb-3">
                                    <div
                                        className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-bold shadow-sm ${accent.stepNumber}`}
                                    >
                                        {step.order}
                                    </div>
                                </div>

                                <h4 className="text-sm md:text-base font-semibold text-gray-900">
                                    {step.title}
                                </h4>
                                <p className="mt-2 text-xs md:text-sm text-gray-600 leading-snug">
                                    {step.description}
                                </p>

                                {/* pill inferior */}
                                <div className="mt-4 flex items-center justify-center md:justify-start">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-500 border border-dashed border-gray-200 group-hover:border-gray-300">
                                        <span className="size-1.5 rounded-full bg-emerald-400" />
                                        Paso {step.order} de {service.processSteps.length}
                                    </span>
                                </div>

                                {/* halo de color al hacer hover */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-slate-50/0 via-slate-50/40 to-slate-100/40" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
