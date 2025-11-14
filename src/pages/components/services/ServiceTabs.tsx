import React from "react";
import {
    Bug,
    SprayCan,
    Droplets,
    Rat,
    ShieldAlert,
    Bird,
    MessageCircle,
} from "lucide-react";
import type { Service } from "../../types/services";

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

const ServiceTabs: React.FC<Props> = ({ services, activeId, onChange }) => {
    return (
        <section className="bg-gray-50 pt-6 pb-2">
            <div className="max-w-7xl mx-auto px-6">
                {/* card debajo del hero, sin solaparse */}
                <div className="rounded-2xl bg-white shadow-lg border border-gray-100 px-4 py-4 md:px-6 md:py-5">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-3">
                        <MessageCircle size={16} className="text-red-500" />
                        <span>
                            Selecciona un servicio para ver el detalle, proceso y productos
                            relacionados.
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {services.map((s) => {
                            const Icon = iconMap[s.icon];
                            const isActive = s.id === activeId;

                            return (
                                <button
                                    key={s.id}
                                    onClick={() => onChange(s.id)}
                                    className={[
                                        "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all",
                                        isActive
                                            ? "bg-red-600 text-white shadow-md"
                                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-white",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    <Icon
                                        size={18}
                                        className={`transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-red-500"
                                            }`}
                                    />
                                    <span>{s.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTabs;
