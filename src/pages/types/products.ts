import type { ServiceId } from "./services";

export type ProductDetail = {
    id: string;               // mismo id que PRODUCT.id
    serviceId: ServiceId;     // a qué servicio está asociado
    longDescription: string;
    bullets: string[];
    techSheetUrl?: string;    // ficha técnica (PDF o enlace)
    safetySheetUrl?: string;  // hoja de seguridad
    resolutionUrl?: string;   // resolución / registro sanitario
    dosage?: string;          // info de dosis
};
