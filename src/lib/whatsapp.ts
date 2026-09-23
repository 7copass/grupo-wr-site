// Cliente da API de WhatsApp (apibridge) — usado no servidor para notificar
// a equipe quando um lead é capturado. O token/URL vêm de variáveis de ambiente
// (.env.local localmente, Environment Variables na Vercel) e nunca vão para o
// cliente nem para o repositório.
//
// Contrato:
//   POST {WHATSAPP_SEND_URL}?token={WHATSAPP_API_TOKEN}
//   body: { "chatId": "<numero>", "text": "<mensagem>" }
//   resposta: { "success": true|false, "status": "..." }

export type SendResult = { ok: boolean; status?: number; error?: string };

export async function sendWhatsAppText(
  to: string,
  text: string
): Promise<SendResult> {
  const token = process.env.WHATSAPP_API_TOKEN;
  const sendUrl = process.env.WHATSAPP_SEND_URL;

  if (!token || !sendUrl) {
    return { ok: false, error: "whatsapp_not_configured" };
  }

  const url = `${sendUrl}?token=${encodeURIComponent(token)}`;
  const chatId = to.replace(/\D/g, "");

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId, text }),
      // não deixa uma API lenta travar a resposta ao visitante
      signal: AbortSignal.timeout(12000),
    });

    const data = (await res.json().catch(() => null)) as
      | { success?: boolean; status?: string }
      | null;

    if (res.ok && data?.success) {
      return { ok: true, status: res.status };
    }
    return {
      ok: false,
      status: res.status,
      error: data?.status ?? `http_${res.status}`,
    };
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
