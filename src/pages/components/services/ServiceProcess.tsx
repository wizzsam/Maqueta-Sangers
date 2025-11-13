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
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="text-center mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {service.processTitle}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Conoce la manera en la que brindamos nuestro servicio de calidad.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    {service.processSteps.map((step, index) => (
                        <motion.article
                            key={step.order}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col items-center text-center rounded-3xl bg-white shadow-sm border border-gray-100 px-4 py-5"
                        >
                            <div
                                className={`flex items-center justify-center h-10 w-10 rounded-full mb-2 text-sm font-bold ${accent.stepNumber}`}
                            >
                                {step.order}
                            </div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                {step.title}
                            </h4>
                            <p className="mt-1 text-xs text-gray-600 leading-snug">
                                {step.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
