// Dados dos segmentos e geração das cartas de crédito (valores estimativos/ilustrativos).
// TODO: substituir por tabela oficial do Grupo WR quando disponível.

export type SegmentId = "imovel" | "carro" | "moto";

export type Segment = {
  id: SegmentId;
  label: string;
  icon: "home" | "car" | "bike";
  min: number;
  max: number;
  // prazo (meses) e taxa administrativa usados na estimativa da parcela
  prazoMeses: number;
  taxaAdm: number; // %
  fundoReserva: number; // %
  reducaoAteContemplacao: number; // % de redução da parcela
};

export const segments: Segment[] = [
  {
    id: "imovel",
    label: "Imóvel",
    icon: "home",
    min: 100000,
    max: 500000,
    prazoMeses: 200,
    taxaAdm: 18,
    fundoReserva: 3,
    reducaoAteContemplacao: 50,
  },
  {
    id: "carro",
    label: "Carro",
    icon: "car",
    min: 40000,
    max: 200000,
    prazoMeses: 80,
    taxaAdm: 17,
    fundoReserva: 3,
    reducaoAteContemplacao: 30,
  },
  {
    id: "moto",
    label: "Moto",
    icon: "bike",
    min: 12000,
    max: 60000,
    prazoMeses: 60,
    taxaAdm: 16,
    fundoReserva: 3,
    reducaoAteContemplacao: 25,
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

// Parcela cheia estimada: (crédito + taxas) / prazo
export function parcelaCheia(seg: Segment, credito: number) {
  const total = credito * (1 + (seg.taxaAdm + seg.fundoReserva) / 100);
  return total / seg.prazoMeses;
}

// Parcela reduzida (plano com redução até a contemplação)
export function parcelaReduzida(seg: Segment, credito: number) {
  return parcelaCheia(seg, credito) * (1 - seg.reducaoAteContemplacao / 100);
}

export type Plan = {
  id: string;
  credito: number;
  parcela: number;
  parcelaReduzida: number;
  prazoMeses: number;
  taxaAdm: number;
  fundoReserva: number;
  reducao: number;
};

// Gera N cartas dentro da faixa selecionada
export function buildPlans(seg: Segment, min: number, max: number, count = 6): Plan[] {
  const lo = Math.max(seg.min, Math.min(min, max));
  const hi = Math.min(seg.max, Math.max(min, max));
  const step = count > 1 ? (hi - lo) / (count - 1) : 0;
  const plans: Plan[] = [];
  for (let i = 0; i < count; i++) {
    const raw = lo + step * i;
    // arredonda para múltiplos "bonitos"
    const credito = Math.round(raw / 500) * 500;
    plans.push({
      id: `${seg.id}-${i}`,
      credito,
      parcela: parcelaCheia(seg, credito),
      parcelaReduzida: parcelaReduzida(seg, credito),
      prazoMeses: seg.prazoMeses,
      taxaAdm: seg.taxaAdm,
      fundoReserva: seg.fundoReserva,
      reducao: seg.reducaoAteContemplacao,
    });
  }
  // remove duplicados por crédito
  return plans.filter((p, i, arr) => arr.findIndex((x) => x.credito === p.credito) === i);
}
