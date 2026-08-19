"use client";

import { useMemo, useState } from "react";
import {
  brl,
  buildPlans,
  getSegment,
  segments,
  type SegmentId,
} from "@/lib/plans";
import { whatsappLink } from "@/lib/site";
import { iconById, IconArrowRight } from "./icons";

export default function Simulator() {
  const [segId, setSegId] = useState<SegmentId>("imovel");
  const seg = getSegment(segId);
  const [credito, setCredito] = useState(seg.min + (seg.max - seg.min) * 0.4);

  // reajusta o crédito ao trocar de segmento
  function changeSeg(id: SegmentId) {
    const s = getSegment(id);
    setSegId(id);
    setCredito(s.min + (s.max - s.min) * 0.4);
  }

  const plans = useMemo(
    () => buildPlans(seg, seg.min, credito),
    [seg, credito]
  );

  const fill = ((credito - seg.min) / (seg.max - seg.min)) * 100;

  return (
    <section id="simulador" className="section">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Simulador</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">O que você quer </span>
            <span className="metal-text">conquistar?</span>
          </h2>
          <p className="mt-3 text-wr-silver-500">
            Escolha o bem e a faixa de crédito. Os valores são estimativos — um
            consultor confirma as condições exatas para você.
          </p>
        </div>

        {/* Seletor de segmento */}
        <div className="mx-auto mt-8 flex max-w-md gap-3">
          {segments.map((s) => {
            const Icon = iconById[s.icon];
            const active = segId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => changeSeg(s.id)}
                className={`flex-1 rounded-2xl border px-3 py-4 text-center transition ${
                  active
                    ? "border-wr-red bg-wr-red/10"
                    : "border-wr-border bg-wr-panel/50 hover:border-wr-silver-500"
                }`}
              >
                <Icon
                  size={26}
                  className={`mx-auto ${active ? "text-wr-red" : "text-wr-silver-500"}`}
                />
                <div
                  className={`mt-2 text-sm font-semibold ${
                    active ? "text-white" : "text-wr-silver-500"
                  }`}
                >
                  {s.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <div className="panel mx-auto mt-6 max-w-2xl p-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-wr-silver-500">
                Crédito desejado
              </div>
              <div className="text-2xl font-extrabold text-white">
                {brl(credito)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-wr-silver-500">
                Parcela a partir de
              </div>
              <div className="text-2xl font-extrabold red-text">
                {brl(plans[0]?.parcelaReduzida ?? 0)}
              </div>
            </div>
          </div>
          <input
            type="range"
            className="wr-range mt-5"
            min={seg.min}
            max={seg.max}
            step={500}
            value={credito}
            onChange={(e) => setCredito(Number(e.target.value))}
            style={{ ["--fill" as string]: `${fill}%` }}
            aria-label="Faixa de crédito"
          />
          <div className="mt-2 flex justify-between text-xs text-wr-silver-500">
            <span>{brl(seg.min)}</span>
            <span>{brl(seg.max)}</span>
          </div>
        </div>

        {/* Cards de cartas */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.id}
              className="panel flex flex-col p-6 transition hover:-translate-y-1 hover:panel-glow"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-wr-silver-500">
                  {seg.label}
                </span>
                <span className="rounded-full bg-wr-red/15 px-3 py-1 text-xs font-bold text-wr-red">
                  {p.reducao}% de redução
                </span>
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-wr-silver-500">
                Crédito de
              </div>
              <div className="text-2xl font-extrabold text-white">
                {brl(p.credito)}
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-wr-silver-500">
                Parcela inicial de
              </div>
              <div className="text-xl font-extrabold red-text">
                {brl(p.parcelaReduzida)}
              </div>

              <dl className="mt-4 space-y-1 border-t border-wr-border pt-4 text-xs text-wr-silver-500">
                <div className="flex justify-between">
                  <dt>Taxa de administração</dt>
                  <dd className="text-white">{p.taxaAdm.toFixed(2)}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Fundo de reserva</dt>
                  <dd className="text-white">{p.fundoReserva.toFixed(2)}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Prazo do plano</dt>
                  <dd className="text-white">{p.prazoMeses} meses</dd>
                </div>
              </dl>

              <a
                href={whatsappLink(
                  `Olá! Tenho interesse na carta de ${seg.label} de ${brl(
                    p.credito
                  )} (parcela a partir de ${brl(
                    p.parcelaReduzida
                  )}). Pode me passar as condições?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-red mt-6 w-full py-3 text-sm"
              >
                Quero esta carta
                <IconArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-wr-silver-500">
          {plans.length} produtos exibidos. Valores ilustrativos, sujeitos a
          análise e às condições do grupo.
        </p>
      </div>
    </section>
  );
}
