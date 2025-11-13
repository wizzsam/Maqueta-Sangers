import React from "react";
import Hero from "./components/home/Hero";
import ServicesSection from "./components/home/SecciónServicios";
import ProductsCarousel from "./components/home/CarruselProductos";
import { SLIDES, WHATSAPP_PHONE, WA_MSG, PRODUCTS, SECTORES } from "./data/home";
import SectorsMarquee from "./components/home/SectorsMarquee";
import Imagen_bg from "../assets/img_sangers.png";
import ComplianceSection from "./components/home/ComplianceSection";
import ClientsSection from "./components/home/ClientsSection";
import FaqSection from "./components/home/FaqSection";
import ContactCta from "./components/home/ContactCta";


export default function Home() {
  return (
    <main className="w-full">
      <Hero slides={SLIDES} waPhone={WHATSAPP_PHONE} waMsg={WA_MSG} />
      <ServicesSection />
      <SectorsMarquee
        title="Sectores que atendemos"
        subtitle="Atendemos hogares y también operaciones comerciales e industriales."
        bgImage={Imagen_bg}
        items={SECTORES}
        speedMs={14000}   // más rápido (ajusta a tu gusto: 12000–22000)
      />
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Productos</h2>
              <p className="text-gray-600 mt-1">Insumos y equipos para control de plagas y saneamiento.</p>
            </div>
            <a href="/productos" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
              Ver todo
            </a>
          </div>
          <ProductsCarousel products={PRODUCTS} />
        </div>
      </section>
      <section>
        <ComplianceSection />
      </section>
      <section>
        <ClientsSection />
      </section>
      <section>
        <ContactCta waPhone={WHATSAPP_PHONE} waMsg={WA_MSG} />
      </section>
      <section>
        <FaqSection />
      </section>
    </main>
  );
}
