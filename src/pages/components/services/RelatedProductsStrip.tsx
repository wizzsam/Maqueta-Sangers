import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Eye, ShoppingCart } from "lucide-react";
import type { Service } from "../../types/services";
import type { Product } from "../../types/home";
import { PRODUCTS } from "../../data/home";

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

    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex items-end justify-between mb-4">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-blue-900">
                            Productos para este servicio
                        </h3>
                        <p className="text-sm text-gray-600">
                            Insumos recomendados para planes de {service.name.toLowerCase()}.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                >
                    {related.map((p) => (
                        <article
                            key={p.id}
                            className="shrink-0 w-[260px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <h4 className="text-sm font-semibold text-blue-900 line-clamp-2">
                                    {p.title}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                    {p.description}
                                </p>
                                {p.price && (
                                    <p className="text-sm font-semibold text-gray-900">
                                        {p.price}
                                    </p>
                                )}
                                <div className="mt-2 flex gap-2">
                                    <a
                                        href={p.href ?? "#"}
                                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold hover:bg-gray-50"
                                    >
                                        Ver más
                                        <Eye size={14} />
                                    </a>
                                    <a
                                        href={p.href ?? "#"}
                                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-red-600 text-white px-3 py-1.5 text-xs font-semibold hover:bg-red-700"
                                    >
                                        Comprar
                                        <ShoppingCart size={14} />
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
