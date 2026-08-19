"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site, whatsappLink } from "@/lib/site";
import { IconMenu, IconWhatsApp, IconX } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-wr-border bg-[#0b0b0d]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wr flex h-[68px] items-center justify-between">
        <a href="#top" aria-label="Grupo WR">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-wr-silver-500 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappLink("Olá! Quero saber mais sobre o consórcio do Grupo WR.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-red px-5 py-2.5 text-sm"
          >
            <IconWhatsApp size={17} />
            Fale no WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-wr-border text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <IconX size={20} /> : <IconMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-wr-border bg-[#0b0b0d] md:hidden">
          <div className="container-wr flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-wr-silver-500 hover:bg-wr-panel hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink("Olá! Quero saber mais sobre o consórcio do Grupo WR.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red mt-2 px-5 py-3 text-sm"
            >
              <IconWhatsApp size={17} />
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
