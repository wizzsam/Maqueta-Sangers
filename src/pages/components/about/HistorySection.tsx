import React from "react";
import { motion } from "framer-motion";

type Props = {
    image: string;
    heading: string;
    paragraphs: string[];
};

export default function HistorySection({ image, heading, paragraphs }: Props) {
    return (
        <section className="bg-gray-50 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-3xl shadow-lg"
                >
                    <img
                        src={image}
                        alt="Equipo de Sangers trabajando"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-3"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                        {heading}
                    </h2>
                    {paragraphs.map((p) => (
                        <p key={p.slice(0, 20)} className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {p}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
