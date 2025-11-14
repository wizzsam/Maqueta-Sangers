// src/components/productos/ProductDetail.tsx
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MessageCircle,
  Phone,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS } from "./ProductsCatalog";
import FichaTecnicaRaticida from "../../../assets/docs/Ficha_Tecnica_Raticida_Agrochem.pdf";

// Define the Product type locally based on the structure of PRODUCTS items
type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  category: string;
  toxicidad: string;
  brand: string;
  presentation: string;
  use: string;
};

// Datos extendidos por producto (descripción larga, pdf, etc.)
type ProductExtra = {
  longDescription: string;
  features: string[];
  benefits: string[];
  usageSteps: string[];
  pdfUrl?: string;
};

const PRODUCT_EXTRA: Record<string, ProductExtra> = {
  "rat-1": {
    longDescription:
      "Raticida anticoagulante de uso profesional, diseñado para control seguro y efectivo de ratas y ratones en almacenes, sótanos y áreas críticas.",
    features: [
      "Efecto residual hasta 90 días.",
      "Formulación palatable para roedores.",
      "Apto para estaciones de cebo profesionales.",
      "Compatible con programas integrados de saneamiento.",
    ],
    benefits: [
      "Reduce rápidamente la población de roedores.",
      "Minimiza riesgos para mascotas y personas cuando se usa correctamente.",
      "Ayuda a cumplir normas de inocuidad y auditorías.",
    ],
    usageSteps: [
      "Colocar el producto en estaciones de cebo fuera del alcance de niños y mascotas.",
      "Marcar y registrar los puntos de aplicación.",
      "Revisar las estaciones cada 2–3 días y reponer si es necesario.",
    ],
    pdfUrl: FichaTecnicaRaticida,
  },
  "paloma-2": {
    longDescription:
      "Trampa robusta y reutilizable para captura ética de palomas en azoteas, techos y estructuras expuestas.",
    features: [
      "Estructura metálica reforzada.",
      "Puertas de acceso fácil para liberación controlada.",
      "Compatible con diferentes tipos de cebos.",
    ],
    benefits: [
      "Reduce el impacto de excretas en fachadas y equipos.",
      "Permite un control ordenado en entornos urbanos.",
    ],
    usageSteps: [
      "Ubicar la trampa en el recorrido habitual de las palomas.",
      "Colocar cebo atractivo (granos, maíz, etc.).",
      "Verificar diariamente y coordinar el retiro con personal autorizado.",
    ],
    pdfUrl: FichaTecnicaRaticida,
  },
  // Puedes añadir extras para el resto de IDs ("gel-3", "trampa-4", etc.)
};

const WHATSAPP_PHONE = "51999999999";
const WA_BASE = `https://wa.me/${WHATSAPP_PHONE}`;

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [mainImg, setMainImg] = useState<string | null>(null);

  const product: Product | undefined = useMemo(
    () => PRODUCTS.find((p) => p.id === id),
    [id]
  );

  const extra = product ? PRODUCT_EXTRA[product.id] : undefined;

  if (!product) {
    return (
      <section className="bg-[#f5f7fb] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-slate-600 mb-6 hover:text-slate-900"
          >
            <ArrowLeft className="size-4" />
            Volver
          </button>
          <p className="text-slate-700 text-sm">
            No encontramos este producto. Es posible que el enlace haya cambiado.
          </p>
        </div>
      </section>
    );
  }

  const imgToShow = mainImg ?? product.image;
  const waUrl = `${WA_BASE}?text=${encodeURIComponent(
    `Hola, deseo más información sobre el producto "${product.name}".`
  )}`;

  return (
   <section className="bg-[#f5f7fb] pt-24 pb-12 md:pt-28 md:pb-16">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* breadcrumb + volver */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="size-4 cursor-pointer" />
            Volver al catálogo
          </button>
          <p className="hidden md:inline-flex items-center gap-1 text-xs text-slate-400">
            Productos
            <ChevronRight className="size-3" />
            <span className="text-slate-600">{product.name}</span>
          </p>
        </div>

        {/* Layout principal */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Columna izquierda: imágenes + descripción breve */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 md:p-6">
            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-50">
              <img
                src={imgToShow}
                alt={product.name}
                className="w-full max-h-[420px] object-contain md:object-cover"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-white">
                <ShieldCheck className="size-3 text-emerald-300" />
                Uso profesional
              </div>
            </div>

            {/* mini galerías – por ahora solo 1 imagen, pero listo para más */}
            <div className="mt-3 flex gap-2">
              {[product.image].map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setMainImg(img)}
                  className={`h-16 w-20 rounded-xl border ${
                    imgToShow === img
                      ? "border-orange-500"
                      : "border-slate-200 hover:border-orange-300"
                  } overflow-hidden bg-white`}
                >
                  <img
                    src={img}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Título + descripción corta */}
            <div className="mt-5">
              <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {product.description}
              </p>

              {/* chips rápidos */}
              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                  {product.type}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  Categoría: {product.category}
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-semibold">
                  Toxicidad: {product.toxicidad}
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha: ficha rápida + CTAs */}
          <aside className="space-y-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.16em]">
                Ficha rápida
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs md:text-[0.8rem] text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">Marca</p>
                  <p>{product.brand}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Presentación</p>
                  <p>{product.presentation}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Uso recomendado</p>
                  <p>{product.use}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Aplicación</p>
                  <p>{product.category}</p>
                </div>
              </div>

              {/* CTAs */}
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


                {extra?.pdfUrl && (
                  <a
                    href={extra.pdfUrl}
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300/70"
                  >
                    <Download className="size-4" />
                    Descargar ficha técnica completa (PDF)
                  </a>
                )}
              </div>
            </div>

            {/* bloque de confianza */}
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

        {/* Secciones de detalle largas */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Columna izquierda: texto largo */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4">
              Descripción
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {extra?.longDescription ?? product.description}
            </p>

            {extra && (
              <>
                <h3 className="mt-6 text-base font-semibold text-slate-900">
                  Características principales
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700 list-disc list-inside">
                  {extra.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <h3 className="mt-6 text-base font-semibold text-slate-900">
                  Beneficios
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700 list-disc list-inside">
                  {extra.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <h3 className="mt-6 text-base font-semibold text-slate-900">
                  Cómo utilizar este producto
                </h3>
                <ol className="mt-2 space-y-1.5 text-sm text-slate-700 list-decimal list-inside">
                  {extra.usageSteps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </>
            )}
          </div>

          {/* Columna derecha: preguntas u otras cosas */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-6">
              <h3 className="text-sm font-semibold text-slate-900">
                Preguntas frecuentes
              </h3>
              <div className="mt-3 space-y-3 text-xs md:text-sm text-slate-700">
                <div>
                  <p className="font-semibold">
                    ¿Este producto es seguro para usar en mi negocio?
                  </p>
                  <p>
                    Sí, siempre que se aplique siguiendo las indicaciones de la
                    etiqueta y las normas de seguridad del fabricante.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    ¿Pueden ayudarme con la aplicación del producto?
                  </p>
                  <p>
                    Podemos coordinar servicios de saneamiento integral para que
                    nuestro equipo técnico realice la aplicación por ti.
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
      </div>
    </section>
  );
}
