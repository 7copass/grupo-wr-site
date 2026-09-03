// Produtos, planos e cálculo dinâmico das parcelas do consórcio Grupo WR.
//
// A parcela é sempre uma fração fixa do crédito (fator), que muda conforme o
// plano (número de parcelas). Os fatores de AUTOMÓVEL e PESADO vêm da tabela
// oficial (FIAT / Crédito Referencial e Pesado):
//   Leve 100x  = 0,90986%   (R$100.000 -> R$909,86)
//   Leve 80x   = 1,29063%   (R$100.000 -> R$1.290,63)
//   Pesado 100x = 1,23076%  (R$300.000 -> R$3.692,28)
// IMÓVEL e MOTO usam fatores estimativos (official: false) até chegar a tabela
// oficial desses segmentos.

export type SegmentId = "imovel" | "automovel" | "pesado" | "moto";

export type PlanOption = {
  parcelas: number; // número de parcelas (ex.: 100, 80)
  factor: number; // parcela = credito * factor
};

export type Segment = {
  id: SegmentId;
  label: string;
  icon: "home" | "car" | "bike" | "truck";
  min: number;
  max: number;
  step: number;
  plans: PlanOption[];
  official: boolean; // true = fatores da tabela oficial
};

export const segments: Segment[] = [
  {
    id: "imovel",
    label: "Imóvel",
    icon: "home",
    min: 100000,
    max: 500000,
    step: 5000,
    plans: [{ parcelas: 200, factor: 0.006 }],
    official: false,
  },
  {
    id: "automovel",
    label: "Automóvel",
    icon: "car",
    min: 50000,
    max: 180000,
    step: 5000,
    plans: [
      { parcelas: 100, factor: 0.0090986 },
      { parcelas: 80, factor: 0.0129063 },
    ],
    official: true,
  },
  {
    id: "pesado",
    label: "Pesado",
    icon: "truck",
    min: 250000,
    max: 690000,
    step: 10000,
    plans: [{ parcelas: 100, factor: 0.0123076 }],
    official: true,
  },
  {
    id: "moto",
    label: "Moto",
    icon: "bike",
    min: 12000,
    max: 60000,
    step: 1000,
    plans: [{ parcelas: 60, factor: 0.0195 }],
    official: false,
  },
];

export function getSegment(id: SegmentId): Segment {
  return segments.find((s) => s.id === id) ?? segments[0];
}

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

// Parcela dinâmica: fração fixa do crédito conforme o plano.
export function parcela(credito: number, plan: PlanOption) {
  return credito * plan.factor;
}

// Gera N valores de crédito (arredondados ao step) do mínimo até o crédito escolhido,
// para montar os cards de exemplo.
export function buildCredits(seg: Segment, credito: number, count = 6): number[] {
  const hi = Math.min(seg.max, Math.max(seg.min, credito));
  const lo = seg.min;
  if (hi <= lo) return [lo];
  const step = (hi - lo) / (count - 1);
  const vals: number[] = [];
  for (let i = 0; i < count; i++) {
    const raw = lo + step * i;
    vals.push(Math.round(raw / seg.step) * seg.step);
  }
  return Array.from(new Set(vals));
}
