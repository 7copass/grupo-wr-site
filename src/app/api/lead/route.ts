import { NextResponse } from "next/server";

export type LeadPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  segmento?: string;
  credito?: number | string;
  origem?: string;
};

// Rota de captura de leads.
// STUB: por enquanto apenas valida e registra no log do servidor.
// TODO (quando o usuário liberar): gravar no Supabase e/ou acionar a API de WhatsApp.
export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const nome = (body.nome ?? "").trim();
  const telefone = (body.telefone ?? "").replace(/\D/g, "");

  if (nome.length < 2 || telefone.length < 10) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 }
    );
  }

  // ---- Ponto de integração futura ----
  // await supabase.from("leads").insert({ ...body });
  // await enviarWhatsApp(telefone, ...);
  console.log("[LEAD] novo lead recebido:", {
    nome,
    telefone,
    email: body.email,
    segmento: body.segmento,
    credito: body.credito,
    origem: body.origem,
  });

  return NextResponse.json({ ok: true });
}
