import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="https://jcsuplementosdeportivos27-sudo.github.io/jcsuplementos/logo/jc-logo.png"
              alt="JC Suplementos Deportivos"
              width={70}
              height={70}
              className="h-16 w-16 object-contain"
            />

            <div>
              <p className="text-base font-bold tracking-[0.14em] text-white">
                JC
              </p>

              <p className="mt-1 text-xs tracking-[0.18em] text-zinc-500">
                SUPLEMENTOS DEPORTIVOS
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Haz que cada día cuente.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://wa.me/524491815518"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-red-600/40 hover:bg-red-600/10 hover:text-white"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/jcsuplementosdeportivos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-red-600/40 hover:bg-red-600/10 hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61594037527372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-red-600/40 hover:bg-red-600/10 hover:text-white"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/5 pt-7 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © 2026 JC Suplementos Deportivos.
          </p>

          <p className="text-xs text-zinc-700">
            Rincón de Romos, Aguascalientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
