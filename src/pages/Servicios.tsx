import React, { useState } from "react";
import ServicesHero from "./components/services/ServicesHero";
import ServiceDetail from "./components/services/ServiceDetail";
import ServiceProcess from "./components/services/ServiceProcess";
import ServiceStats from "./components/services/ServiceStats";
import RelatedProductsStrip from "./components/services/RelatedProductsStrip";
import ServicesCTA from "./components/services/ServicesCTA";

import { SERVICES, DEFAULT_SERVICE_ID } from "./data/services";
import type { Service } from "./types/services";

export default function Servicios() {
    const [activeId, setActiveId] = useState<Service["id"]>(DEFAULT_SERVICE_ID);
    const activeService =
        SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

    return (
        <main className="w-full bg-gray-50">
            <ServicesHero
                services={SERVICES}
                activeId={activeService.id}
                onChange={setActiveId}
            />
            <ServiceDetail service={activeService} />
            <ServiceProcess service={activeService} />
            <ServiceStats service={activeService} />
            <RelatedProductsStrip service={activeService} />
            <ServicesCTA />
        </main>
    );
}