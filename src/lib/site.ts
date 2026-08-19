// Configuração central do Grupo WR.
// >>> Ajuste estes dados quando tiver as informações oficiais. <<<

export const site = {
  name: "Grupo WR",
  tagline: "Realizando sonhos com planejamento",
  // Contato — TODO: substituir pelos dados oficiais
  whatsapp: "5599999999999", // apenas números, com DDI + DDD
  phoneDisplay: "(00) 0000-0000",
  email: "contato@grupowr.com.br",
  city: "Sua cidade — UF",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  // Dados legais — TODO: preencher
  legal: {
    razaoSocial: "Grupo WR",
    cnpj: "00.000.000/0000-00",
    // WR é administradora própria (autorizada Bacen) ou representante de outra administradora?
    // Ajustar o texto do rodapé conforme a resposta.
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "O que é consórcio?", href: "#consorcio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Simular", href: "#simulador" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
] as const;
