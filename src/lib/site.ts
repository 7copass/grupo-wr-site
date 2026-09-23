// Configuração central do Grupo WR.
// >>> Ajuste estes dados quando tiver as informações oficiais. <<<

export const site = {
  name: "Grupo WR",
  tagline: "Realizando sonhos com planejamento",
  // Contato
  whatsapp: "5593984009798", // apenas números, com DDI + DDD
  phoneDisplay: "(93) 98400-9798",
  email: "grupowrconsorcios@gmail.com",
  city: "Santarém — PA",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  // Dados legais
  legal: {
    razaoSocial: "Grupo WR",
    cnpj: "66.643.266/0001-60",
    // TODO: confirmar se é administradora própria (autorizada Bacen) ou
    // representante/vendedor de cotas de outra administradora — ajusta o texto do rodapé.
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
