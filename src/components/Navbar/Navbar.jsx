"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#inicio"
          className="group flex items-center gap-3 transition duration-300"
        >
          <Image
            src="https://jcsuplementosdeportivos27-sudo.github.io/jcsuplementos/logo/jc-logo.png"
            alt="JC Suplementos Deportivos"
            width={58}
            height={58}
            priority
            className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">
              JC
            </p>

            <p className="text-[10px] tracking-[0.16em] text-zinc-500">
              SUPLEMENTOS DEPORTIVOS
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm text-zinc-400 transition duration-300 hover:text-white"
          >
            Inicio
          </a>

          <a
            href="#productos"
            className="text-sm text-zinc-400 transition duration-300 hover:text-white"
          >
            Productos
          </a>

          <a
            href="#nosotros"
            className="text-sm text-zinc-400 transition duration-300 hover:text-white"
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="text-sm text-zinc-400 transition duration-300 hover:text-white"
          >
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:border-red-500 hover:bg-red-600"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
