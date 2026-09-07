import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 px-7 py-16 text-center sm:px-12 lg:py-24">
          
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 bg-red-600/10 blur-[130px]" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-500">
              Contacto directo
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              ¿Listo para llevar tu entrenamiento al
              <span className="text-red-600"> siguiente nivel?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400">
              Pregunta por disponibilidad, sabores, presentaciones y entregas
              en Rincón de Romos y alrededores.
            </p>

            <a
              href="https://wa.me/524491815518?text=Hola%20JC%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20suplementos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-red-500"
            >
              <FaWhatsapp className="text-xl" />
              Hablar por WhatsApp
            </a>

            <p className="mt-5 text-xs tracking-[0.2em] text-zinc-600">
              JC · RINCÓN DE ROMOS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}