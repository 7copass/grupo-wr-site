import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { IconMail, IconPhone, IconPin, IconShield, IconWhatsApp } from "./icons";

const cols = [
  {
    title: "Consórcio",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Simular", href: "#simulador" },
      { label: "Condições", href: "#consorcio" },
      { label: "Dúvidas", href: "#faq" },
    ],
  },
  {
    title: "Grupo WR",
    links: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Fale conosco", href: "#contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-wr-border bg-[#08080a]">
      <div className="container-wr py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-wr-silver-500">
              {site.tagline}. Consórcio de imóvel, carro e moto com segurança e
              transparência.
            </p>
            <a
              href={whatsappLink("Olá! Quero falar com o Grupo WR.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red mt-5 px-5 py-2.5 text-sm"
            >
              <IconWhatsApp size={17} />
              Fale no WhatsApp
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-wr-silver-500 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-wr-silver-500">
              <li className="flex items-center gap-2.5">
                <IconPhone size={16} className="text-wr-red" />
                {site.phoneDisplay}
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail size={16} className="text-wr-red" />
                {site.email}
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin size={16} className="text-wr-red" />
                {site.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-wr-red/30 bg-wr-red/5 p-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-wr-red">
            <IconShield size={16} />
            Fique atento contra fraudes!
          </p>
          <p className="mt-1 text-xs text-wr-silver-500">
            O Grupo WR NÃO autoriza pagamentos a terceiros. Verifique sempre o
            nome do beneficiário antes de efetuar qualquer pagamento. Em caso de
            dúvida, entre em contato pelos nossos canais oficiais.
          </p>
        </div>

        <div className="mt-8 border-t border-wr-border pt-6 text-xs leading-relaxed text-wr-silver-500">
          {/* TODO: ajustar dados legais conforme razão social/CNPJ e se é administradora própria ou representante */}
          {site.legal.razaoSocial} — CNPJ {site.legal.cnpj}. Consórcio regido
          pela Lei nº 11.795/2008 e fiscalizado pelo Banco Central do Brasil.
          Este site tem caráter informativo; valores e condições são
          ilustrativos e sujeitos a análise e aprovação.
          <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row">
            <span>
              © {new Date().getFullYear()} {site.name}. Todos os direitos
              reservados.
            </span>
            <span className="flex gap-4">
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white">
                Política de Cookies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
