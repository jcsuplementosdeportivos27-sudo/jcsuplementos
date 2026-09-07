import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-20 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="hero-content">
          <p className="mb-6 text-xs font-semibold tracking-[0.36em] text-red-500 sm:text-sm">
            SUPLEMENTOS · RENDIMIENTO · DISCIPLINA
          </p>

          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            HAZ QUE
            <br />
            CADA <span className="text-red-600">DÍA</span>
            <br />
            CUENTE.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Suplementos deportivos para quienes entrenan con intención, buscan
            mejorar su rendimiento y quieren llevar su progreso al siguiente
            nivel.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
            >
              Ver productos
            </a>

            <a
              href="https://wa.me/524491815518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-red-600/50 bg-transparent px-8 py-4 text-sm font-bold text-white transition duration-300 hover:bg-red-600"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[150px]" />

          <Image
            src="/logo/jc-logo.png"
            alt="JC Suplementos Deportivos"
            width={720}
            height={720}
            priority
            className="relative z-10 h-auto w-full max-w-[560px] object-contain"
          />
        </div>
      </div>

      <a
        href="#productos"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="text-[9px] tracking-[0.35em] text-zinc-600">
          DESCUBRE JC
        </span>

        <span className="mt-3 h-12 w-px bg-gradient-to-b from-red-600 to-transparent" />
      </a>
    </section>
  );
}