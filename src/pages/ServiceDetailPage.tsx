import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { SERVICES } from "./data/services";
import type { ServiceId } from "./types/services";

import ServiceDetail from "./components/services/ServiceDetail";
import ServiceProcess from "./components/services/ServiceProcess";
import ServiceStats from "./components/services/ServiceStats";
import RelatedProductsStrip from "./components/services/RelatedProductsStrip";
import ServicesCTA from "./components/services/ServicesCTA";
import ServicesHero from "./components/services/ServicesHero";

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: ServiceId }>();

  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    // si meten un id raro, los mandamos al listado general
    return <Navigate to="/servicios" replace />;
  }

  return (
    <main className="w-full bg-gray-50">
      {/* Hero general de servicios (puedes crear uno específico si quieres) */}
      <ServicesHero />

      {/* Bloques que ya tenías para cada servicio */}
      <ServiceDetail service={service} />
      <ServiceProcess service={service} />
      <ServiceStats service={service} />
      <RelatedProductsStrip service={service} />
      <ServicesCTA />
    </main>
  );
};

export default ServiceDetailPage;
