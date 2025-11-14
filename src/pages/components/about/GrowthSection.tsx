import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { TimelineItem, MetricItem } from "../../types/about";

type Props = {
    timeline: TimelineItem[];
    metrics: MetricItem[];
};

// ───────────────────────── Metric card con contador ─────────────────────────

type MetricCardProps = {
    metric: MetricItem;
    index: number;
};

const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
    const [displayValue, setDisplayValue] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });

    const numeric = Number(
        String(metric.value).replace(/[^0-9]/g, "")
    );
    const suffix = String(metric.value).replace(/[0-9]/g, "");

    useEffect(() => {
        if (!inView || !numeric) return;

        let frame: number;
        const duration = 1200; // ms
        const start = performance.now();

        const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(progress * numeric);
            setDisplayValue(current);

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [inView, numeric]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
            className="rounded-3xl bg-gradient-to-b from-red-50 to-white px-5 py-5 text-center border border-red-100 shadow-sm hover:shadow-md hover:border-red-300 transition-all"
        >
            <p className="text-2xl md:text-3xl font-extrabold text-red-600">
                {numeric && displayValue !== null ? displayValue : metric.value}
                {numeric ? suffix : ""}
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
                {metric.label}
            </p>
            {metric.helper && (
                <p className="mt-1 text-xs text-gray-500">
                    {metric.helper}
                </p>
            )}
        </motion.div>
    );
};

// ───────────────────────── Sección principal ─────────────────────────

export default function GrowthSection({ timeline, metrics }: Props) {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                    Nuestro Crecimiento
                </h2>

                {/* Timeline chips */}
                <div className="mt-8 rounded-3xl bg-white shadow-sm px-4 py-6 md:px-8 relative overflow-hidden">
                    {/* línea de fondo para simular timeline */}
                    <div className="pointer-events-none absolute inset-x-6 top-10 hidden md:block">
                        <div className="h-px w-full bg-gradient-to-r from-red-200 via-red-100 to-transparent" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
                        {timeline.map((t, i) => (
                            <motion.div
                                key={t.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="relative flex flex-col items-center text-center gap-2 rounded-2xl bg-white/80 border border-gray-100 px-3 py-4 shadow-sm hover:border-red-300 hover:shadow-md transition-all"
                            >
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold shadow-md">
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

                {/* Metrics con contador */}
                <div className="mt-9 grid gap-4 md:grid-cols-4">
                    {metrics.map((m, i) => (
                        <MetricCard key={m.id} metric={m} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
