import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <article className="product-card group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/0 transition-all duration-500 group-hover:from-red-600/10 group-hover:to-red-600/5" />

      <div className="relative z-10">
        {/* IMAGEN */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        {/* INFORMACIÓN */}
        <div className="px-6 pb-7 pt-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-red-500">
            {product.category}
          </span>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {product.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {product.description}
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-red-500"
          >
            Consultar producto

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}