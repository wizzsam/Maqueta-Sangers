import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BgServicios from "../../../assets/Desratizacion.webp";

type Props = {};

const ServicesHero: React.FC<Props> = () => {
    return (
        <section
            className="relative h-[60vh] min-h-[420px] w-full overflow-hidden text-white"
            style={{
                backgroundImage: `url(${BgServicios})`,
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70 backdrop-blur-[2px]" />

            <div className="relative z-10 h-full">
                <div className="max-w-7xl mx-auto h-full px-6 flex flex-col justify-center pt-20 md:pt-16">
                    {/* migas */}
                    <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-xs md:text-sm text-slate-200/80 mb-3 tracking-wide"
                    >
                        <Link
                            to="/"
                            className="text-slate-300/80 hover:text-slate-100 transition-colors"
                        >
                            Inicio
                        </Link>
                        <span className="mx-1 text-slate-400">/</span>
                        <span className="text-orange-400 font-semibold">Servicios</span>
                    </motion.p>

                    {/* título + descripción */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Nuestros{" "}
                            <span className="text-orange-400">Servicios especializados</span>
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-100/90">
                            Soluciones profesionales de saneamiento ambiental para hogares,
                            comercios e industria. Protocolos certificados, respuesta rápida y
                            atención personalizada.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
