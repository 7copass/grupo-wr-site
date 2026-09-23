import { NextResponse } from "next/server";
import { segments } from "@/lib/plans";
import { buildLeadMessage, sendWhatsAppText } from "@/lib/whatsapp";

export type LeadPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  segmento?: string;
  credito?: number | string;
  origem?: string;
};

// Rota de captura de leads.
// Envia os dados do lead para o WhatsApp da equipe (WHATSAPP_TO) via Quepasa.
export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const nome = (body.nome ?? "").trim();
  const telefone = (body.telefone ?? "").trim();

  if (nome.length < 2 || telefone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 }
    );
  }

  const segmentoLabel =
    segments.find((s) => s.id === body.segmento)?.label ??
    body.segmento ??
    "Não informado";

  const to = process.env.WHATSAPP_TO ?? "5593984009798";
  const mensagem = buildLeadMessage({
    nome,
    telefone,
    segmentoLabel,
    credito: body.credito ? String(body.credito) : undefined,
    origem: body.origem,
  });

  // Envia a notificação. Não bloqueia o visitante se a API falhar —
  // registramos o erro no log para acompanhamento.
  const envio = await sendWhatsAppText(to, mensagem);
  if (!envio.ok) {
    console.error("[LEAD] falha ao enviar WhatsApp:", envio, {
      nome,
      telefone,
      segmento: segmentoLabel,
      origem: body.origem,
    });
  } else {
    console.log("[LEAD] enviado ao WhatsApp:", { nome, telefone, segmentoLabel });
  }

  return NextResponse.json({ ok: true });
}
