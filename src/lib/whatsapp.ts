// Cliente da API de WhatsApp (Quepasa) — usado no servidor para notificar
// a equipe quando um lead é capturado. O token/URL vêm de variáveis de ambiente
// (.env.local localmente, Environment Variables na Vercel) e nunca vão para o
// cliente nem para o repositório.

export type SendResult = { ok: boolean; status?: number; error?: string };

export async function sendWhatsAppText(
  to: string,
  text: string
): Promise<SendResult> {
  const token = process.env.WHATSAPP_API_TOKEN;
  const base = process.env.WHATSAPP_BASE_URL;

  if (!token || !base) {
    return { ok: false, error: "whatsapp_not_configured" };
  }

  // Quepasa v3: POST {base}/v3/message  com header X-QUEPASA-TOKEN
  const url = `${base.replace(/\/+$/, "")}/v3/message`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-QUEPASA-TOKEN": token,
      },
      body: JSON.stringify({ recipient: to, text }),
      // não deixa uma API lenta travar a resposta ao visitante
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return { ok: false, status: res.status, error: body.slice(0, 300) };
    }
    return { ok: true, status: res.status };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

// Monta a mensagem de notificação do lead.
export function buildLeadMessage(data: {
  nome: string;
  telefone: string;
  segmentoLabel: string;
  credito?: string;
  origem?: string;
}) {
  const linhas = [
    "🔔 *Novo lead — Site Grupo WR*",
    "",
    `👤 *Nome:* ${data.nome}`,
    `📱 *WhatsApp:* ${data.telefone}`,
    `🎯 *Interesse:* ${data.segmentoLabel}`,
  ];
  if (data.credito) linhas.push(`💰 *Crédito:* ${data.credito}`);
  if (data.origem) linhas.push(`🌐 *Origem:* ${data.origem}`);
  linhas.push(
    `🕒 ${new Date().toLocaleString("pt-BR", { timeZone: "America/Belem" })}`
  );
  return linhas.join("\n");
}
