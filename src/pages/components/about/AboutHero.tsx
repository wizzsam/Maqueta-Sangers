import React from "react";
import { motion } from "framer-motion";

type Props = {
    title: string;
    highlighted: string;
    subtitle: string;
};

export default function AboutHero({ title, highlighted, subtitle }: Props) {
    return (
        <section className="pt-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase"
                >
                    Nosotros
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-2 text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-blue-900"
                >
                    Conoce a{" "}
                    <span className="text-red-600">{highlighted}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-3 max-w-2xl text-gray-600"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
