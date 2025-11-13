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
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-5 md:grid-cols-3">
                    {service.stats.map((s, index) => {
                        const Icon = iconForStat[s.id as keyof typeof iconForStat] ?? Clock;
                        return (
                            <motion.article
                                key={s.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                className="rounded-3xl border border-gray-100 bg-gray-50 px-5 py-5 flex flex-col gap-2"
                            >
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                                    <Icon size={18} className={accent.statAccent} />
                                </div>
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    {s.label}
                                </p>
                                <p className={`text-xl font-extrabold ${accent.statAccent}`}>
                                    {s.value}
                                </p>
                                {s.helper && (
                                    <p className="text-xs text-gray-600">{s.helper}</p>
                                )}
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
