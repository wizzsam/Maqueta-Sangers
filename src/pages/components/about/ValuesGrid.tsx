import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Zap, Users } from "lucide-react";
import type { ValueItem } from "../../types/about";

const iconMap = {
    shield: ShieldCheck,
    heart: HeartHandshake,
    zap: Zap,
    users: Users,
} as const;

type Props = { values: ValueItem[] };

export default function ValuesGrid({ values }: Props) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                    Nuestros Valores
                </h2>
                <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
                    Principios que guían cada servicio y cada decisión dentro de Sangers.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((v, index) => {
                        const Icon = iconMap[v.icon];

                        return (
                            <motion.article
                                key={v.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                whileHover={{ y: -8 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/90 px-5 py-6 flex flex-col gap-3 shadow-sm transition-all"
                            >
                                {/* Barra superior de color al hover */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Glow radial de fondo al hover */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-500/5 blur-2xl" />
                                </div>

                                {/* Icono */}
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-400 group-hover:shadow-md">
                                    <Icon size={21} />
                                </span>

                                <h3 className="font-semibold text-gray-900">
                                    {v.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {v.description}
                                </p>

                                {/* Línea sutil al fondo */}
                                <div className="mt-2 h-px w-1/2 bg-gradient-to-r from-red-500/60 to-transparent group-hover:w-3/4 transition-all" />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
