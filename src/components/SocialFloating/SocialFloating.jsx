"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const socials = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/524491815518",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
      href: "https://www.instagram.com/jcsuplementosdeportivos/",

  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61594037527372",
  },
];

export default function SocialFloating() {
  return (
    <aside className="fixed bottom-6 right-5 z-[80] flex flex-col items-end gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="social-bubble group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/80 text-white shadow-2xl backdrop-blur-xl"
          >
            <Icon className="min-w-5 text-lg" />

            <span className="social-label whitespace-nowrap text-sm font-medium">
              {social.name}
            </span>
          </a>
        );
      })}
    </aside>
  );
}