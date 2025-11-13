import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ShoppingCart,
    Eye,
    FileText,
    FileCheck2,
    ShieldCheck,
    MessageCircle,
} from "lucide-react";

import { SERVICES } from "./data/services";
import { PRODUCTS } from "./data/home";
import { PRODUCT_DETAILS } from "./data/products";
import type { Product } from "./types/home";
import type { ProductDetail } from "./types/products";
import { WA_PHONE } from "./data/services";
import { getServicesAccentClasses } from "./components/services/ServiceDetail";

export default function ServiceProductsPage() {
    const { serviceId } = useParams<{ serviceId: string }>();

    const service = SERVICES.find((s) => s.id === serviceId);
    if (!service) {
        return (
            <main className="pt-24 max-w-4xl mx-auto px-6 py-10">
                <p className="text-sm text-gray-500 mb-2">
                    El servicio seleccionado no existe.
                </p>
                <Link
                    to="/servicios"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
                >
                    <ArrowLeft size={16} />
                    Volver a servicios
                </Link>
            </main>
        );
    }

    const accent = getServicesAccentClasses(service.accent);

    const serviceProducts: Product[] = PRODUCTS.filter((p) =>
        service.relatedProductIds.includes(p.id)
    );

    const [activeProductId, setActiveProductId] = useState<string | undefined>(
        serviceProducts[0]?.id
    );

    const activeProduct = serviceProducts.find((p) => p.id === activeProductId);
    const activeDetail: ProductDetail | undefined = PRODUCT_DETAILS.find(
        (d) => d.id === activeProductId
    );

    return (
        <main className="w-full bg-gray-50">
            {/* Header / breadcrumb */}
            <section className="pt-24">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <Link
                        to="/servicios"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-red-600"
                    >
                        <ArrowLeft size={14} />
                        Volver a servicios
                    </Link>

                    <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-blue-900">
                        Productos para{" "}
                        <span className="text-red-600">{service.name}</span>
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
                        Insumos y equipos recomendados para los planes de{" "}
                        {service.name.toLowerCase()}. Selecciona un producto para ver el
                        detalle técnico, usos y documentación.
                    </p>
                </div>
            </section>

            {/* Carrusel / tira de productos */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 pb-4">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {serviceProducts.map((p) => {
                            const isActive = p.id === activeProductId;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => setActiveProductId(p.id)}
                                    className={`text-left shrink-0 w-[240px] rounded-2xl border bg-white px-4 py-4 transition-all shadow-sm ${isActive
                                        ? "border-red-500 shadow-md"
                                        : "border-gray-200 hover:border-red-300"
                                        }`}
                                >
                                    <div className="h-28 overflow-hidden rounded-xl mb-3 bg-gray-50">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                        Producto
                                    </p>
                                    <h3 className="text-sm font-semibold text-blue-900 line-clamp-2">
                                        {p.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                                        {p.description}
                                    </p>
                                    {p.price && (
                                        <p className="mt-2 text-sm font-bold text-gray-900">
                                            {p.price}
                                        </p>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Panel de detalle */}
            {activeProduct && (
                <section className="bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 24 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-3"
                            >
                                <p className="text-xs font-semibold text-gray-500 uppercase">
                                    Producto para {service.name}
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold text-blue-900">
                                    {activeProduct.title}
                                </h2>
                                {activeProduct.price && (
                                    <p className={`${accent.statAccent} font-extrabold text-lg`}>
                                        {activeProduct.price}
                                    </p>
                                )}
                                <p className="text-sm md:text-base text-gray-700">
                                    {activeDetail?.longDescription ?? activeProduct.description}
                                </p>

                                {activeDetail?.bullets?.length ? (
                                    <div className="mt-3">
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            Características principales
                                        </h3>
                                        <ul className="mt-2 space-y-1.5">
                                            {activeDetail.bullets.map((b) => (
                                                <li
                                                    key={b}
                                                    className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                                                >
                                                    <ShieldCheck
                                                        size={16}
                                                        className={accent.bulletIcon}
                                                    />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}

                                {activeDetail?.dosage && (
                                    <div className="mt-3 rounded-2xl bg-gray-50 px-4 py-3 text-xs md:text-sm text-gray-700">
                                        <span className="font-semibold">Dosis recomendada: </span>
                                        {activeDetail.dosage}
                                    </div>
                                )}

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {activeDetail?.techSheetUrl && (
                                        <a
                                            href={activeDetail.techSheetUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                        >
                                            <FileText size={16} />
                                            Ficha técnica
                                        </a>
                                    )}
                                    {activeDetail?.safetySheetUrl && (
                                        <a
                                            href={activeDetail.safetySheetUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                        >
                                            <FileCheck2 size={16} />
                                            Hoja de seguridad
                                        </a>
                                    )}
                                    {activeDetail?.resolutionUrl && (
                                        <a
                                            href={activeDetail.resolutionUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                        >
                                            <Eye size={16} />
                                            Resolución / registro
                                        </a>
                                    )}
                                </div>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <a
                                        href={activeProduct.href ?? "#"}
                                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow ${accent.primaryBtn}`}
                                    >
                                        Añadir al carrito
                                        <ShoppingCart size={16} />
                                    </a>
                                    <a
                                        href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                                            `Hola, deseo más información sobre el producto ${activeProduct.title} para ${service.name}.`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs md:text-sm font-semibold text-gray-800 hover:bg-gray-50"
                                    >
                                        <MessageCircle size={16} />
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id + "-img"}
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -24 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-6"
                            >
                                <img
                                    src={activeProduct.image}
                                    alt={activeProduct.title}
                                    className="max-h-80 w-full object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            )}
        </main>
    );
}
