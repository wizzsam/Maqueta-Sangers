// src/pages/components/services/RelatedProductsStrip.tsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../types/services";
import type { Product } from "../../types/home";
import { PRODUCTS } from "../../data/home";
import { getServicesAccentClasses } from "./ServiceDetail";

type Props = {
    service: Service;
};

export default function RelatedProductsStrip({ service }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const related: Product[] = PRODUCTS.filter((p) =>
        service.relatedProductIds.includes(p.id)
    );

    if (!related.length) return null;

    const scroll = (dir: "left" | "right") => {
        const el = containerRef.current;
        if (!el) return;
        const delta = dir === "left" ? -320 : 320;
        el.scrollBy({ left: delta, behavior: "smooth" });
    };

    const accent = getServicesAccentClasses(service.accent);

    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* cabecera */}
                <div className="flex items-end justify-between mb-4">
                    <div>
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-gray-500 uppercase">
                            Productos relacionados
                        </p>
                        <h3 className="text-lg md:text-xl font-extrabold text-blue-900">
                            Productos para{" "}
                            <span className="text-red-600">{service.name}</span>
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Insumos y equipos recomendados para planes de{" "}
                            {service.name.toLowerCase()}.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* carrusel */}
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                >
                    {related.map((p) => (
                        <article
                            key={p.id}
                            className="shrink-0 w-[260px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-[2px] transition-all"
                        >
                            {/* imagen */}
                            <div className="h-40 overflow-hidden relative bg-gray-50">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* contenido */}
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-[11px] font-semibold text-gray-500 uppercase">
                                    Producto
                                </p>
                                <h4 className="text-sm font-semibold text-blue-900 line-clamp-2">
                                    {p.title}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                    {p.description}
                                </p>

                                {p.price && (
                                    <p className={`mt-1 text-sm font-extrabold ${accent.statAccent}`}>
                                        {p.price}
                                    </p>
                                )}

                                <div className="mt-3 flex flex-col gap-2 text-xs">
                                    {/* Ver productos del servicio (detalle por servicio) */}
                                    <Link
                                        to={`/servicios/${service.id}/productos`}
                                        className="inline-flex items-center justify-center gap-1 rounded-full bg-red-600 text-white px-3 py-1.5 font-semibold shadow hover:bg-red-700 transition-colors"
                                    >
                                        Ver productos del servicio
                                        <Eye size={14} />
                                    </Link>

                                    {/* Comprar / enlace propio del producto */}
                                    <a
                                        href={p.href ?? "#"}
                                        className="inline-flex items-center justify-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-800 hover:bg-gray-50"
                                    >
                                        <ShoppingCart size={14} />
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
