import React from "react";
import { motion } from "framer-motion";
import type { TimelineItem, MetricItem } from "../../types/about";

type Props = {
    timeline: TimelineItem[];
    metrics: MetricItem[];
};

export default function GrowthSection({ timeline, metrics }: Props) {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                    Nuestro Crecimiento
                </h2>

                {/* Timeline chips */}
                <div className="mt-8 rounded-3xl bg-white shadow-sm px-4 py-6 md:px-8">
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {timeline.map((t, i) => (
                            <motion.div
                                key={t.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className="flex flex-col items-center text-center gap-2"
                            >
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold shadow">
                                    {t.year}
                                </span>
                                <p className="text-xs font-semibold text-gray-800">
                                    {t.title}
                                </p>
                                <p className="text-[11px] text-gray-500 leading-snug">
                                    {t.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <div className="mt-8 grid gap-4 md:grid-cols-4">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                            className="rounded-3xl bg-gradient-to-b from-red-50 to-white px-5 py-5 text-center border border-red-100"
                        >
                            <p className="text-2xl md:text-3xl font-extrabold text-red-600">
                                {m.value}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">
                                {m.label}
                            </p>
                            {m.helper && (
                                <p className="mt-1 text-xs text-gray-500">{m.helper}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
