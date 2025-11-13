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
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                    Nuestros Valores
                </h2>
                <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
                    Principios que guían cada servicio y cada decisión dentro de Sangers.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-4">
                    {values.map((v, index) => {
                        const Icon = iconMap[v.icon];
                        return (
                            <motion.article
                                key={v.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow px-5 py-6 flex flex-col gap-3"
                            >
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
                                    <Icon size={20} />
                                </span>
                                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                                <p className="text-sm text-gray-600">{v.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
