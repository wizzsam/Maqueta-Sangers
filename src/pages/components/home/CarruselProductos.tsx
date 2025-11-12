import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/home";

export default function ProductsCarousel({ products }: { products: Product[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [idx, setIdx] = useState(0);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;
    const next = (i + items.length) % items.length;
    el.scrollTo({ left: items[next].offsetLeft, behavior: "smooth" });
    setIdx(next);
  };

  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const near = items.reduce(
      (best, it, i) => {
        const dist = Math.abs(it.offsetLeft - el.scrollLeft);
        return dist < best.dist ? { i, dist } : best;
      },
      { i: 0, dist: Number.POSITIVE_INFINITY }
    );
    setIdx(near.i);
  };

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReduce || document.hidden) return;
    const id = setInterval(next, 4500);
    const onVis = () => clearInterval(id);
    document.addEventListener("visibilitychange", onVis);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", onVis); };
  }, [paused, idx]);

  return (
    <div className="relative mt-6">
      <div
        ref={ref}
        onScroll={onScroll}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 600)}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      <button onClick={prev} className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 border hover:bg-gray-50">
        <ChevronLeft className="size-5" />
      </button>
      <button onClick={next} className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 border hover:bg-gray-50">
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-red-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
