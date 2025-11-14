// src/pages/components/services/ServiceStats.tsx
import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, BadgeCheck } from "lucide-react";
import type { Service } from "../../types/services";
import { getServicesAccentClasses } from "./ServiceDetail";

const iconForStat = {
    time: Clock,
    staff: Users,
    warranty: BadgeCheck,
} as const;

type Props = {
    service: Service;
};

export default function ServiceStats({ service }: Props) {
    const accent = getServicesAccentClasses(service.accent);

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-8 text-center">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-red-500 uppercase">
                        Beneficios
                    </p>
                    <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900">
                        Lo que obtienes con este servicio
                    </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {service.stats.map((s, index) => {
                        const Icon = iconForStat[s.id as keyof typeof iconForStat] ?? Clock;
                        return (
                            <motion.article
                                key={s.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-5 py-6 flex flex-col gap-2 shadow-sm"
                            >
                                {/* banda de color arriba */}
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-teal-500" />

                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                                    <Icon size={18} className={accent.statAccent} />
                                </div>

                                <p className="mt-2 text-xs font-semibold text-gray-500 uppercase">
                                    {s.label}
                                </p>
                                <p
                                    className={`text-xl md:text-2xl font-extrabold ${accent.statAccent}`}
                                >
                                    {s.value}
                                </p>
                                {s.helper && (
                                    <p className="text-xs md:text-sm text-gray-600">{s.helper}</p>
                                )}

                                {/* pill inferior */}
                                <div className="mt-3">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-[11px] text-gray-500 border border-gray-200">
                                        <span className="size-1.5 rounded-full bg-emerald-400" />
                                        Dato clave del servicio
                                    </span>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
