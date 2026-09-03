"use client";

import { useState } from "react";
import { segments } from "@/lib/plans";
import { whatsappLink } from "@/lib/site";
import { iconById, IconCheck, IconWhatsApp } from "./icons";

type Props = {
  variant?: "compact" | "full";
  origem?: string;
  defaultSegment?: string;
  defaultCredito?: string;
};

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function LeadForm({
  variant = "full",
  origem = "landing",
  defaultSegment = "imovel",
  defaultCredito = "",
}: Props) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [segmento, setSegmento] = useState(defaultSegment);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  const compact = variant === "compact";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (nome.trim().length < 2 || telefone.replace(/\D/g, "").length < 10) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const payload = {
      nome,
      telefone,
      email,
      segmento,
      credito: defaultCredito,
      origem,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    const msg = `Olá! Sou ${nome} e quero simular um consórcio de ${
      segments.find((s) => s.id === segmento)?.label ?? segmento
    } com o Grupo WR.`;
    return (
      <div className="text-center py-4">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-wr-red/15 text-wr-red">
          <IconCheck size={28} />
        </div>
        <h3 className="text-xl font-extrabold text-white">
          Recebemos seu contato, {nome.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-sm text-wr-silver-500">
          Nossa equipe vai falar com você em instantes. Quer adiantar?
        </p>
        <a
          href={whatsappLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-red mt-5 px-6 py-3 text-sm"
        >
          <IconWhatsApp size={17} />
          Falar no WhatsApp agora
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      {!compact && (
        <p className="eyebrow mb-1">Simulação gratuita e sem compromisso</p>
      )}
      <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <input
          className="field"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          aria-label="Nome"
        />
        <input
          className="field"
          placeholder="WhatsApp (00) 00000-0000"
          value={telefone}
          onChange={(e) => setTelefone(maskPhone(e.target.value))}
          inputMode="tel"
          aria-label="WhatsApp"
        />
      </div>

      {!compact && (
        <input
          className="field"
          placeholder="Seu melhor e-mail (opcional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          aria-label="E-mail"
        />
      )}

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-wr-silver-500">
          O que você quer conquistar?
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {segments.map((s) => {
            const Icon = iconById[s.icon];
            const active = segmento === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSegmento(s.id)}
                className={`flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-wr-red bg-wr-red/10 text-white"
                    : "border-wr-border text-wr-silver-500 hover:border-wr-silver-500"
                }`}
              >
                <Icon size={17} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-wr-red">
          Preencha seu nome e um WhatsApp válido para continuar.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-red w-full px-6 py-3.5 text-base disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Quero simular agora"}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-wr-silver-500">
        Ao enviar, você concorda em ser contatado pelo Grupo WR. Não enviamos
        spam. Seus dados estão seguros.
      </p>
    </form>
  );
}
