import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
// misma ruta que ProductsHero
import BgNosotros from "../../../assets/Desratizacion.webp";

type Props = {
    title: string;
    highlighted: string;
    subtitle: string;
};

const AboutHero: React.FC<Props> = ({ title, highlighted, subtitle }) => {
    return (
        <section
            className="relative h-[60vh] min-h-[420px] w-full overflow-hidden text-white"
            style={{
                backgroundImage: `url(${BgNosotros})`,
            }}
        >
            {/* overlay con degradado + blur ligero */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-indigo-900/85 backdrop-blur-[2px]" />

            {/* contenido */}
            <div className="relative z-10 h-full">
                <div className="max-w-6xl mx-auto h-full px-6 flex flex-col justify-center pt-20 md:pt-16">
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
                        <span className="text-orange-300 font-semibold">Nosotros</span>
                    </motion.p>

                    {/* título */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <ShieldCheck className="hidden sm:block size-8 md:size-9 text-orange-300" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            {title}{" "}
                            <span className="block text-orange-300">
                                {highlighted}
                            </span>
                        </h1>
                    </motion.div>

                    {/* descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-3 max-w-2xl text-sm md:text-base text-slate-100/90 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    {/* pills opcionales */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20">
                            <span className="size-2 rounded-full bg-emerald-300" />
                            <span>Más de 15 años en saneamiento ambiental</span>
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20">
                            <span className="size-2 rounded-full bg-orange-300" />
                            <span>Empresa familiar comprometida con la salud pública</span>
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
