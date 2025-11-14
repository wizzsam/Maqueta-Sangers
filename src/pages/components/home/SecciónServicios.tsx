import React from "react";
import { Bug, Droplets, Phone, MessageCircle, SprayCan, ChevronRight,Rat, BugOff, Bird } from "lucide-react";
import { WHATSAPP_PHONE } from "../../data/home";

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">Servicios especializados</h2>
      <p className="text-gray-600 mt-1 text-center">
        Atención para hogares, comercios e industria. Respuesta rápida y garantía.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* plagas */}
        <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><Bug className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Control de Plagas</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Desinsectación contra cucarachas, hormigas, arañas y más. Tratamientos seguros y efectivos.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Control de Plagas.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
           
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>

        {/* desinfección */}
        <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><SprayCan className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Desinfección & Sanitización</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Nebulización y desinfección de ambientes críticos con productos certificados.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Desinfección & Sanitización.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
         
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>

        {/* cisternas */}
        <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><Droplets className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Limpieza de Cisternas</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Lavado, desinfección y certificación para reservorios de agua potable.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Limpieza de Cisternas.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
        
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>
         <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><Rat className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Desratización</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Eliminación y control de ratas en cualquier lugar.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Desratización.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
          
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>
          <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><BugOff className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Desinsectación</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Eliminación y control de insectos en cualquier lugar.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Desinsectación.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>
        <article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-50 p-3"><Bird className="size-6 text-red-600" /></div>
            <h3 className="text-lg font-semibold">Control de palomas</h3>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Eliminación y control de palomas en cualquier lugar.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Quiero cotizar Control de palomas.")}`}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
              Cotizar <MessageCircle className="size-4" />
            </a>
            
            <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:underline">
              Ver más <ChevronRight className="size-4" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
