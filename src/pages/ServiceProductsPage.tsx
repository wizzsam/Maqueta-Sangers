// src/pages/ServiceProductsPage.tsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ShoppingCart,
    Eye,
    FileText,
    FileCheck2,
    ShieldCheck,
    MessageCircle,
    Phone,
    Download,
    ChevronRight,
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
    const navigate = useNavigate();

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

    const [mainImg, setMainImg] = useState<string | null>(
        activeProduct?.image ?? null
    );

    if (!activeProduct) {
        return (
            <main className="pt-24 max-w-4xl mx-auto px-6 py-10">
                <p className="text-sm text-gray-500 mb-2">
                    No hay productos relacionados configurados para este servicio.
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

    const imgToShow = mainImg ?? activeProduct.image;
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
        `Hola, deseo más información sobre el producto "${activeProduct.title}" para el servicio ${service.name}.`
    )}`;

    return (
        <main className="bg-[#f5f7fb] pt-24 pb-12 md:pt-28 md:pb-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* BREADCRUMB + VOLVER */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-600 hover:text-slate-900"
                    >
                        <ArrowLeft className="size-4" />
                        Volver
                    </button>
                    <p className="hidden md:inline-flex items-center gap-1 text-xs text-slate-400">
                        Servicios
                        <ChevronRight className="size-3" />
                        <span className="text-slate-600">{service.name}</span>
                        <ChevronRight className="size-3" />
                        <span className="text-slate-800 font-semibold">
                            {activeProduct.title}
                        </span>
                    </p>
                </div>

                {/* CABECERA SERVICIO + SELECTOR DE PRODUCTO */}
                <section className="mb-6">
                    <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
                        Productos para{" "}
                        <span className="text-red-600">{service.name}</span>
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
                        Insumos y equipos recomendados para los planes de{" "}
                        {service.name.toLowerCase()}. Selecciona un producto para ver el
                        detalle técnico, documentos y formas de uso.
                    </p>

                    {/* tirita de productos como mini catálogo */}
                    <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                        {serviceProducts.map((p) => {
                            const isActive = p.id === activeProductId;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => {
                                        setActiveProductId(p.id);
                                        setMainImg(p.image);
                                    }}
                                    className={`shrink-0 w-[220px] rounded-2xl border bg-white px-4 py-3 text-left transition-all ${isActive
                                            ? "border-red-500 shadow-md"
                                            : "border-slate-200 hover:border-red-300 shadow-sm"
                                        }`}
                                >
                                    <div className="h-20 rounded-xl overflow-hidden bg-slate-50 mb-2 flex items-center justify-center">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-[11px] font-semibold text-slate-500 uppercase">
                                        Producto recomendado
                                    </p>
                                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                                        {p.title}
                                    </h3>
                                    {p.price && (
                                        <p className="mt-1 text-xs font-bold text-slate-900">
                                            {p.price}
                                        </p>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* LAYOUT PRINCIPAL TIPO ProductDetail */}
                <section>
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                        {/* COLUMNA IZQUIERDA: IMAGEN + DESC CORTA */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct.id}
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 24 }}
                                transition={{ duration: 0.35 }}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 md:p-6"
                            >
                                {/* Imagen principal */}
                                <div className="relative rounded-2xl overflow-hidden bg-slate-50">
                                    <img
                                        src={imgToShow}
                                        alt={activeProduct.title}
                                        className="w-full max-h-[420px] object-contain md:object-cover"
                                    />
                                    <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-white">
                                        <ShieldCheck className="size-3 text-emerald-300" />
                                        Producto para {service.name}
                                    </div>
                                </div>

                                {/* mini “galería”: por ahora solo 1 img, pero lista para más */}
                                <div className="mt-3 flex gap-2">
                                    {[activeProduct.image].map((img) => (
                                        <button
                                            key={img}
                                            type="button"
                                            onClick={() => setMainImg(img)}
                                            className={`h-16 w-20 rounded-xl border overflow-hidden bg-white ${imgToShow === img
                                                    ? "border-orange-500"
                                                    : "border-slate-200 hover:border-orange-300"
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={activeProduct.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Título + descripción corta */}
                                <div className="mt-5">
                                    <h2 className="text-lg md:text-2xl font-extrabold text-slate-900">
                                        {activeProduct.title}
                                    </h2>
                                    {activeProduct.price && (
                                        <p
                                            className={`mt-1 text-base md:text-lg font-extrabold ${accent.statAccent}`}
                                        >
                                            {activeProduct.price}
                                        </p>
                                    )}
                                    <p className="mt-2 text-sm text-slate-600">
                                        {activeDetail?.longDescription ??
                                            activeProduct.description}
                                    </p>

                                    {/* chips rápidos */}
                                    <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                                            Producto para saneamiento ambiental
                                        </span>
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                                            Servicio: {service.name}
                                        </span>
                                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-semibold">
                                            Uso profesional
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* COLUMNA DERECHA: FICHA RÁPIDA + CTAs */}
                        <aside className="space-y-4">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
                                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.16em]">
                                    Ficha rápida
                                </h3>
                                <div className="mt-4 grid grid-cols-2 gap-3 text-xs md:text-[0.8rem] text-slate-600">
                                    <div>
                                        <p className="font-semibold text-slate-800">Servicio</p>
                                        <p>{service.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Presentación</p>
                                        <p>{activeProduct.price ?? "Consultar"}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">
                                            Uso recomendado
                                        </p>
                                        <p>
                                            {activeDetail?.bullets?.[0] ??
                                                `Producto complementario para planes de ${service.name.toLowerCase()}.`}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">
                                            Dosis / rendimiento
                                        </p>
                                        <p>
                                            {activeDetail?.dosage ?? "Ver ficha técnica o consultar."}
                                        </p>
                                    </div>
                                </div>

                                {/* CTAs principales */}
                                <div className="mt-6 flex flex-col gap-2">
                                    <a
                                        href={waUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/70"
                                    >
                                        <MessageCircle className="size-4" />
                                        Consultar por WhatsApp
                                    </a>

                                    <a
                                        href={activeProduct.href ?? "#"}
                                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow ${accent.primaryBtn}`}
                                    >
                                        <ShoppingCart className="size-4" />
                                        Añadir al carrito / cotización
                                    </a>

                                    {/* documentos técnicos si existen */}
                                    {(activeDetail?.techSheetUrl ||
                                        activeDetail?.safetySheetUrl ||
                                        activeDetail?.resolutionUrl) && (
                                            <div className="mt-3 flex flex-col gap-2">
                                                {activeDetail.techSheetUrl && (
                                                    <a
                                                        href={activeDetail.techSheetUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                                    >
                                                        <Download className="size-4" />
                                                        Descargar ficha técnica (PDF)
                                                    </a>
                                                )}
                                                {activeDetail.safetySheetUrl && (
                                                    <a
                                                        href={activeDetail.safetySheetUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                                    >
                                                        <FileCheck2 className="size-4" />
                                                        Hoja de seguridad
                                                    </a>
                                                )}
                                                {activeDetail.resolutionUrl && (
                                                    <a
                                                        href={activeDetail.resolutionUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                                    >
                                                        <Eye className="size-4" />
                                                        Resolución / registro sanitario
                                                    </a>
                                                )}
                                            </div>
                                        )}

                                    <a
                                        href={`tel:+${WA_PHONE}`}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-orange-700 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                                    >
                                        <Phone className="size-4" />
                                        Llamar a Sangers
                                    </a>
                                </div>
                            </div>

                            {/* Bloque de confianza */}
                            <div className="bg-slate-900 rounded-3xl text-white p-5 md:p-6">
                                <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-amber-300">
                                    Saneamiento seguro
                                </h3>
                                <p className="mt-2 text-xs md:text-sm text-slate-100">
                                    Todos nuestros productos son seleccionados para cumplir con
                                    normas sanitarias vigentes y buenas prácticas de saneamiento
                                    ambiental.
                                </p>
                            </div>
                        </aside>
                    </div>

                    {/* SECCIÓN INFERIOR: DETALLE LARGO + FAQ / CTA */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                        {/* Descripción larga */}
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-7">
                            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4">
                                Descripción
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-700">
                                {activeDetail?.longDescription ?? activeProduct.description}
                            </p>

                            {activeDetail?.bullets?.length ? (
                                <>
                                    <h3 className="mt-6 text-base font-semibold text-slate-900">
                                        Características principales
                                    </h3>
                                    <ul className="mt-2 space-y-1.5 text-sm text-slate-700 list-disc list-inside">
                                        {activeDetail.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}

                            {activeDetail?.dosage && (
                                <>
                                    <h3 className="mt-6 text-base font-semibold text-slate-900">
                                        Dosis recomendada
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-700">
                                        {activeDetail.dosage}
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Preguntas + CTA cotización */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Preguntas frecuentes
                                </h3>
                                <div className="mt-3 space-y-3 text-xs md:text-sm text-slate-700">
                                    <div>
                                        <p className="font-semibold">
                                            ¿Este producto es adecuado para mi tipo de negocio?
                                        </p>
                                        <p>
                                            Sí, siempre que se aplique siguiendo las indicaciones de la
                                            ficha técnica y las recomendaciones de nuestro equipo
                                            técnico.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            ¿Pueden ayudarme con la aplicación del producto?
                                        </p>
                                        <p>
                                            Podemos coordinar servicios de saneamiento integral para que
                                            nuestro equipo realice la aplicación por ti y emita la
                                            certificación correspondiente.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-500 rounded-3xl text-white p-5 md:p-6">
                                <h3 className="text-base font-semibold">
                                    ¿Listo para cotizar este producto?
                                </h3>
                                <p className="mt-2 text-sm text-orange-50">
                                    Escríbenos por WhatsApp o llámanos para recibir una propuesta
                                    según la cantidad y tipo de servicio que necesitas.
                                </p>
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/20"
                                >
                                    <MessageCircle className="size-4" />
                                    Cotizar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
