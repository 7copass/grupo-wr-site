# Grupo WR — Página de captura (consórcio)

Landing page de captação de leads para o consórcio do **Grupo WR**, inspirada na
estrutura da Bamaq Digital, com identidade própria (preto / vermelho / prata
metálica).

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**. Deploy alvo:
**Vercel**.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura

```
src/
  app/
    layout.tsx        # fontes (Poppins) + metadata/SEO
    page.tsx          # composição das seções
    globals.css       # design system (tokens de cor, botões, inputs)
    api/lead/route.ts # endpoint de captura de leads (STUB)
  components/
    Header.tsx        Hero.tsx        Simulator.tsx   Steps.tsx
    Conditions.tsx    WhyWR.tsx       Testimonials.tsx Faq.tsx
    FinalCta.tsx      Footer.tsx      LeadForm.tsx     Logo.tsx
    WhatsAppFab.tsx
  lib/
    site.ts           # >>> dados do Grupo WR (contato, legal, WhatsApp) <<<
    plans.ts          # segmentos + geração das cartas de crédito
```

## O que falta preencher (dados oficiais)

Editar **`src/lib/site.ts`**:
- `whatsapp` — número com DDI+DDD (ex.: `5531999999999`)
- `phoneDisplay`, `email`, `city`
- `legal.razaoSocial`, `legal.cnpj`
- Texto legal do rodapé em `Footer.tsx` — ajustar conforme o WR seja
  **administradora própria** (autorizada Bacen) ou **representante** de outra.

Logo oficial: colocar o PNG em `public/logo-wr.png` e trocar o bloco SVG em
`components/Logo.tsx` por `<img>`. (Hoje o logo é recriado em SVG.)

Tabela de cartas de crédito: valores em `src/lib/plans.ts` são **ilustrativos**.
Substituir por tabela oficial quando disponível.

## Integração de leads (pendente — a fazer quando liberar)

Hoje `POST /api/lead` só valida e loga no servidor (stub). Pontos de integração
marcados com `TODO` em `src/app/api/lead/route.ts`:
1. Gravar o lead no **Supabase** (tabela `leads`).
2. Acionar a **API de WhatsApp** para contato direto com o lead.

O formulário (`LeadForm.tsx`) já envia nome, telefone, e-mail, segmento e origem.

## Notas de design

- Cores e estilos centralizados em CSS variables (`--wr-*`) em `globals.css` —
  trocar a paleta é trivial.
- `scroll-behavior` está em `auto`. Para reativar rolagem suave em âncoras,
  mudar para `smooth` em `globals.css`.
