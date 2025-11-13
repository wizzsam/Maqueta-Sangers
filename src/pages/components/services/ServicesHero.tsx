import React from "react";
import { motion } from "framer-motion";
import {
    Bug,
    SprayCan,
    Droplets,
    Rat,
    ShieldAlert,
    Bird,
    MessageCircle,
} from "lucide-react";
import type { Service, ServiceAccent } from "../../types/services";

const iconMap = {
    bug: Bug,
    spray: SprayCan,
    droplets: Droplets,
    rat: Rat,
    shield: ShieldAlert,
    bird: Bird,
} as const;

type Props = {
    services: Service[];
    activeId: Service["id"];
    onChange: (id: Service["id"]) => void;
};

export default function ServicesHero({ services, activeId, onChange }: Props) {
    return (
        <section className="pt-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                    Servicios
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-blue-900">
                    Nuestros <span className="text-red-600">Servicios</span>
                </h1>
                <p className="mt-2 max-w-2xl text-gray-600 text-sm md:text-base">
                    Soluciones profesionales de saneamiento ambiental adaptadas a hogares,
                    comercios e industria. Respuesta rápida, protocolos certificados y
                    atención personalizada.
                </p>

                {/* Tabs de servicios */}
                <div className="mt-6 flex flex-wrap gap-3">
                    {services.map((s) => {
                        const Icon = iconMap[s.icon];
                        const isActive = s.id === activeId;
                        return (
                            <button
                                key={s.id}
                                onClick={() => onChange(s.id)}
                                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${isActive
                                        ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:text-red-600"
                                    }`}
                            >
                                <Icon
                                    size={18}
                                    className={`transition-transform group-hover:scale-110 ${isActive ? "text-red-600" : "text-red-500"
                                        }`}
                                />
                                <span>{s.name}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-gray-500 shadow-sm border border-gray-100">
                    <MessageCircle size={14} className="text-red-500" />
                    <span>
                        Toca un servicio para ver el detalle, proceso y productos
                        relacionados.
                    </span>
                </div>
            </div>
        </section>
    );
}
