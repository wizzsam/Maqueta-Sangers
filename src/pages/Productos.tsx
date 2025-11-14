import React from "react";
import ProductsHero from "./components/productos/ProductsHero";
import ProductsCatalog from "./components/productos/ProductsCatalog";


export default function ProductosPage() {
  return (
    <main className="w-full">
      {/* Hero de productos */}
      <ProductsHero waPhone="51999999999" />

      {/* aquí ya vendría la grilla/carrusel de productos */}
      <section
        id="listado-productos"
        className="max-w-6xl mx-auto px-6 "
      >
        {/* TODO: cards, filtros, etc. */}
      </section>
      <section>
          <ProductsCatalog />
      </section>
    </main>
  );
}
