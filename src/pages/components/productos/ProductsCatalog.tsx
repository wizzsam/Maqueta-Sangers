// src/components/productos/ProductsCatalog.tsx
import React, { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal, CheckCircle2 } from "lucide-react";
// al inicio del archivo
import { useNavigate } from "react-router-dom";

import VenenoRatas from "../../../assets/productos/venenorata.webp";
import TrampaPaloma from "../../../assets/productos/trampaPaloma.jpg";
import GelCucaracha from "../../../assets/productos/gelcucaracha.jpeg";
import TrampaRata from "../../../assets/productos/TrampaRata.webp";
import Cloro from "../../../assets/productos/Cloro.jpeg";
import PuasAntiPalomas from "../../../assets/productos/PuasAntiPalomas.jpeg";
import Insecticida from "../../../assets/productos/Insecticida.jpg";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  category: string;
  presentation: string;
  use: string;
  brand: string;
  badges: string[];
  toxicidad: "Baja" | "Media" | "Alta";
};

export const PRODUCTS: Product[] = [
  {
    id: "rat-1",
    name: "Raticida Agrochem",
    description: "Efecto residual 90 días, control profesional de ratas.",
    image: VenenoRatas,
    type: "Raticida",
    category: "Desratización",
    presentation: "Bloques",
    use: "Interior / Exterior",
    brand: "Agrochem",
    badges: ["Bajo olor", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "paloma-2",
    name: "Trampa para palomas",
    description: "Trampa efectiva para todo tipo de palomas.",
    image: TrampaPaloma,
    type: "Trampa",
    category: "Control de aves",
    presentation: "Unidad",
    use: "Exterior",
    brand: "Sangers",
    badges: ["Registro sanitario vigente", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "gel-3",
    name: "Gel para cucarachas",
    description: "Gel efectivo para el control de cucarachas.",
    image: GelCucaracha,
    type: "Gel",
    category: "Desinsectación",
    presentation: "Jeringa",
    use: "Interior / Exterior",
    brand: "Agrochem",
    badges: ["Bajo olor", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "trampa-4",
    name: "Trampa para ratas",
    description: "Trampa de alta eficiencia para el control de ratas.",
    image: TrampaRata,
    type: "Trampa",
    category: "Desratización",
    presentation: "Unidad",
    use: "Industrial",
    brand: "Sangers",
    badges: ["Registro sanitario vigente", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "cloro-5",
    name: "Cloro Líquido",
    description: "Cloro líquido para desinfección y limpieza.",
    image: Cloro,
    type: "Desinfectante",
    category: "Desinfección",
    presentation: "Bidón",
    use: "Industrial",
    brand: "Sangers",
    badges: ["Registro sanitario vigente", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "puas-6",
    name: "Púas Anti Palomas",
    description: "Púas para evitar la presencia de palomas en superficies.",
    image: PuasAntiPalomas,
    type: "Disuasivo",
    category: "Control de aves",
    presentation: "Tira",
    use: "Exterior",
    brand: "Sangers",
    badges: ["Registro sanitario vigente", "Profesional"],
    toxicidad: "Baja",
  },
  {
    id: "insecticida-7",
    name: "Insecticida",
    description: "Insecticida para el control efectivo de insectos.",
    image: Insecticida,
    type: "Insecticida",
    category: "Desinfección",
    presentation: "Spray",
    use: "Interior / Exterior",
    brand: "Sangers",
    badges: ["Registro sanitario vigente", "Profesional"],
    toxicidad: "Baja",
  },
];

type Filters = {
  types: string[];
  categories: string[];
  uses: string[];
  brand: string; // 'all' o nombre de marca
};

const TYPE_OPTIONS = [
  "Raticida",
  "Trampa",
  "Gel",
  "Desinfectante",
  "Disuasivo",
  "Insecticida",
];

const CATEGORY_OPTIONS = [
  "Desratización",
  "Desinfección",
  "Desinsectación",
  "Control de aves",
];

const USE_OPTIONS = ["Interior", "Exterior", "Industrial", "Doméstico"];

const BRAND_OPTIONS = ["all", "Agrochem", "Sangers"];

const PAGE_SIZE = 4;

export default function ProductsCatalog() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    types: [],
    categories: [],
    uses: [],
    brand: "all",
  });
  const [page, setPage] = useState(1);

  const toggleFilter = (
    key: keyof Omit<Filters, "brand">,
    value: string
  ): void => {
    setFilters((prev) => {
      const current = prev[key];
      const exists = current.includes(value);
      const nextArray = exists
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: nextArray };
    });
  };

  const handleBrandChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, brand: value }));
  };

  // resetea a página 1 cuando cambian filtros o búsqueda
  useEffect(() => {
    setPage(1);
  }, [search, filters]);

  const filtered = useMemo(() => {
    let base = [...PRODUCTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      base = base.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      );
    }

    // filtro por tipo
    if (filters.types.length > 0) {
      base = base.filter((p) => filters.types.includes(p.type));
    }

    // filtro por categoría
    if (filters.categories.length > 0) {
      base = base.filter((p) => filters.categories.includes(p.category));
    }

    // filtro por uso (match por substring)
    if (filters.uses.length > 0) {
      base = base.filter((p) =>
        filters.uses.some((u) =>
          p.use.toLowerCase().includes(u.toLowerCase())
        )
      );
    }

    // filtro por marca
    if (filters.brand !== "all") {
      base = base.filter((p) => p.brand === filters.brand);
    }

    return base;
  }, [search, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE);


  return (
    <section className="bg-[#f5f7fb] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* layout principal: filtros + grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR FILTROS */}
          <aside className="lg:w-64 bg-white rounded-2xl shadow-sm border border-slate-100 p-5 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="size-4 text-orange-500" />
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.16em]">
                Filtrar
              </h3>
            </div>

            <FilterGroup title="Tipo de producto">
              {TYPE_OPTIONS.map((t) => (
                <FilterCheckbox
                  key={t}
                  label={t}
                  checked={filters.types.includes(t)}
                  onChange={() => toggleFilter("types", t)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Categoría">
              {CATEGORY_OPTIONS.map((c) => (
                <FilterCheckbox
                  key={c}
                  label={c}
                  checked={filters.categories.includes(c)}
                  onChange={() => toggleFilter("categories", c)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Uso">
              {USE_OPTIONS.map((u) => (
                <FilterCheckbox
                  key={u}
                  label={u}
                  checked={filters.uses.includes(u)}
                  onChange={() => toggleFilter("uses", u)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Marca">
              <select
                value={filters.brand}
                onChange={handleBrandChange}
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
              >
                <option value="all">Todas las marcas</option>
                {BRAND_OPTIONS.filter((b) => b !== "all").map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </FilterGroup>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1">
            {/* BUSCADOR */}
            <div className="mb-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Busca por nombre, marca o tipo de producto"
                  className="w-full rounded-2xl bg-white border border-slate-200 pl-9 pr-4 py-2.5 text-sm md:text-[0.95rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {filtered.length} producto(s) encontrados
              </p>
            </div>

            {/* GRID DE CARDS */}
            <div className="grid gap-6 md:grid-cols-2">
              {paginated.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 text-center text-sm text-slate-500">
                No encontramos productos con ese criterio. Intenta con otro
                nombre o marca.
              </div>
            )}

            {/* PAGINACIÓN */}
            {filtered.length > PAGE_SIZE && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    currentPage === 1
                      ? "border-slate-200 text-slate-300 cursor-default"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Anterior
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        p === currentPage
                          ? "bg-orange-500 text-white"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    currentPage === totalPages
                      ? "border-slate-200 text-slate-300 cursor-default"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================
   SUBCOMPONENTES
   ============================= */

type FilterGroupProps = {
  title: string;
  children: React.ReactNode;
};

function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.16em]">
        {title}
      </p>
      <div className="mt-2 space-y-1.5">{children}</div>
    </div>
  );
}

type FilterCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function FilterCheckbox({ label, checked, onChange }: FilterCheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-xs md:text-[0.8rem] text-slate-600 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500/70"
      />
      <span>{label}</span>
    </label>
  );
}

function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/productos/${product.id}`);
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Imagen */}
      <div className="relative h-40 md:h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
        {/* Chip tipo */}
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-slate-700 shadow">
          <CheckCircle2 className="size-3 text-emerald-500" />
          {product.type}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 px-4 pt-3 pb-4 flex flex-col">
        <h3 className="text-sm md:text-base font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-1 text-xs md:text-[0.8rem] text-slate-600 line-clamp-2">
          {product.description}
        </p>

        {/* Badges */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.badges.map((b) => (
            <span
              key={b}
              className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.65rem] font-medium text-slate-600"
            >
              {b}
            </span>
          ))}
          <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.65rem] font-semibold text-emerald-600">
            Toxicidad: {product.toxicidad}
          </span>
        </div>

        {/* Info pequeña */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem] text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Presentación</p>
            <p>{product.presentation}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Uso</p>
            <p>{product.use}</p>
          </div>
        </div>

        {/* Botones */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleVerMas}
            className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/70"
          >
            Ver más
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-xl border border-teal-500/90 bg-teal-50 px-4 py-2 text-xs md:text-sm font-semibold text-teal-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500/70"
          >
            Ver ficha técnica
          </button>
        </div>
      </div>
    </article>
  );
}
