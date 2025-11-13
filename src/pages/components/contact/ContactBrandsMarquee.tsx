import React from "react";
import "../../styles/marquee.css"; // ajusta la ruta según dónde pongas el CSS

// IMPORTA AQUÍ TUS LOGOS REALES
// Ejemplos, cambia rutas/nombres por los tuyos:
import brand1 from "../../../assets/brands/brand1.jpg";
import brand2 from "../../../assets/brands/brand2.jpg";
import brand3 from "../../../assets/brands/brand3.jpg";
import brand4 from "../../../assets/brands/brand4.jpg";
import brand5 from "../../../assets/brands/brand5.jpg";

import brand6 from "../../../assets/brands/brand6.jpg";
import brand7 from "../../../assets/brands/brand7.jpg";
import brand8 from "../../../assets/brands/brand8.jpg";
import brand9 from "../../../assets/brands/brand9.jpg";
import brand10 from "../../../assets/brands/brand10.jpg";

type Brand = {
  src: string;
  alt: string;
};

const topBrands: Brand[] = [
  { src: brand1, alt: "Marca 1" },
  { src: brand2, alt: "Marca 2" },
  { src: brand3, alt: "Marca 3" },
  { src: brand4, alt: "Marca 4" },
  { src: brand5, alt: "Marca 5" },
];

const bottomBrands: Brand[] = [
  { src: brand6, alt: "Marca 6" },
  { src: brand7, alt: "Marca 7" },
  { src: brand8, alt: "Marca 8" },
  { src: brand9, alt: "Marca 9" },
  { src: brand10, alt: "Marca 10" },
];

const ContactBrandsMarquee: React.FC = () => {
return (
  <section className="bg-white px-6 pt-14 pb-12">
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 pb-4">
        Marcas <span className="text-orange-500">que </span><span className="text-red-500">Confiaron</span>
      </h2>

      {/* Fila superior */}
      <div className="marquee">
        <div className="marquee__inner">
          {[...topBrands, ...topBrands].map((brand, index) => (
            <div key={index} className="marquee__item">
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fila inferior */}
      <div className="marquee marquee--reverse">
        <div className="marquee__inner">
          {[...bottomBrands, ...bottomBrands].map((brand, index) => (
            <div key={index} className="marquee__item">
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default ContactBrandsMarquee;