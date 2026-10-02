"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconShield, IconX } from "./icons";

const AUTO_CLOSE_MS = 5000;

// Mesma ordem/arquivos da seção "Marcas Parceiras".
const brands = [
  { src: "/brands/fiat.png", alt: "Fiat Consórcio", w: 480, h: 320 },
  {
    src: "/brands/volkswagen.png",
    alt: "Consórcio Volkswagen com a Embracon",
    w: 480,
    h: 232,
  },
  { src: "/brands/yamaha.png", alt: "Yamaha Consórcio", w: 480, h: 223 },
  { src: "/brands/embracon.png", alt: "Consórcio Embracon", w: 480, h: 233 },
  { src: "/brands/ancora.png", alt: "Âncora Consórcios", w: 480, h: 194 },
];

export default function AuthorizedPopup() {
  // Aparece sempre que a página carrega/recarrega (sem persistência em
  // localStorage/sessionStorage — é esse o comportamento pedido).
  const [open, setOpen] = useState(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => setOpen(false), AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="authorized-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="panel panel-glow reveal relative w-full max-w-md overflow-hidden p-6 sm:p-8">
        {/* barra de progresso do fechamento automático */}
        <div className="absolute inset-x-0 top-0 h-1 bg-wr-border">
          <div className="wr-countdown-bar h-full bg-wr-red" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-full text-wr-silver-500 transition-colors hover:text-white"
        >
          <IconX size={18} />
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wr-red/15 text-wr-red">
          <IconShield size={26} />
        </div>

        <h2
          id="authorized-popup-title"
          className="mt-4 text-xl font-extrabold text-white sm:text-2xl"
        >
          Somos revendedores <span className="red-text">autorizados</span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-wr-silver-500">
          O Grupo WR é revendedor autorizado das administradoras de consórcio
          Fiat, Volkswagen, Yamaha, Embracon e Âncora. Negocie com segurança.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-wr-border bg-wr-panel/60 px-4 py-3">
          {brands.map((b) => (
            <Image
              key={b.src}
              src={b.src}
              alt={b.alt}
              width={b.w}
              height={b.h}
              className="h-7 w-auto object-contain opacity-90"
            />
          ))}
        </div>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={() => setOpen(false)}
          className="btn btn-red mt-6 w-full px-6 py-3 text-sm"
        >
          OK, entendi
        </button>
      </div>
    </div>
  );
}
