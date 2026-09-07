import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="productos"
      className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-28 lg:px-10"
    >
      {/* Iluminación */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Encabezado */}
        <div className="section-reveal mb-14 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-red-500">
            Selección JC
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Productos destacados
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            Conoce algunos de los productos que manejamos. Escríbenos para
            consultar disponibilidad, presentaciones y entregas.
          </p>
        </div>

        {/* Productos */}
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}