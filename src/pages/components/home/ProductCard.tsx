import React from "react";
import { Eye, ShoppingCart } from "lucide-react";
import type { Product } from "../../types/home";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[46%] lg:w-[32%] xl:w-[28%] bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
      <div className="h-44 md:h-52 overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-base md:text-lg font-semibold text-blue-900">{p.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.description}</p>
        {p.price && <p className="mt-2 font-semibold text-gray-800">{p.price}</p>}
        <div className="mt-4 flex gap-2">
          <a href={p.href ?? "#"} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold border hover:bg-gray-50">
            Ver más <Eye className="size-4" />
          </a>
          <a href="/productos" className="inline-flex items-center gap-2 rounded-lg bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700">
            Comprar <ShoppingCart className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
