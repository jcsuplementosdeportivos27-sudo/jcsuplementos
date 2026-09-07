import {
  FaDumbbell,
  FaLocationDot,
  FaComments,
} from "react-icons/fa6";

const benefits = [
  {
    icon: FaDumbbell,
    title: "Productos seleccionados",
    text: "Opciones enfocadas en fuerza, rendimiento, recuperación y estilo de vida fitness.",
  },
  {
    icon: FaLocationDot,
    title: "Entrega local",
    text: "Entregas en Rincón de Romos y zonas cercanas, sujeto a disponibilidad.",
  },
  {
    icon: FaComments,
    title: "Atención personalizada",
    text: "Pregunta por stock, sabores, presentaciones y disponibilidad directamente con nosotros.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-zinc-950 px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-500">
            Más que suplementos
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu progreso también es{" "}
            <span className="text-red-600">nuestra meta.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            JC nace para acercarte suplementos deportivos con atención directa,
            una imagen profesional y una experiencia de compra sencilla.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-black/40 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-600/25 bg-red-600/10 transition duration-300 group-hover:bg-red-600">
                  <Icon className="text-xl text-red-500 transition group-hover:text-white" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}