import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

type Props = {
    mission: string;
    vision: string;
};

export default function MissionVision({ mission, vision }: Props) {
    const cardBase =
        "rounded-3xl px-6 py-6 md:px-8 md:py-7 text-white shadow-lg flex flex-col gap-3 cursor-default";

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Misión */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            scale: 1.03,
                            y: -4,
                        }}
                        whileTap={{ scale: 0.99 }}
                        className={`${cardBase} bg-red-600 hover:shadow-xl`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                <Target className="text-white" size={20} />
                            </span>
                            <h3 className="text-xl font-semibold">Misión</h3>
                        </div>
                        <p className="text-sm md:text-base text-white/95">{mission}</p>
                    </motion.article>

                    {/* Visión */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{
                            scale: 1.03,
                            y: -4,
                        }}
                        whileTap={{ scale: 0.99 }}
                        className={`${cardBase} bg-teal-500 hover:shadow-xl`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                <Eye className="text-white" size={20} />
                            </span>
                            <h3 className="text-xl font-semibold">Visión</h3>
                        </div>
                        <p className="text-sm md:text-base text-white/95">{vision}</p>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
