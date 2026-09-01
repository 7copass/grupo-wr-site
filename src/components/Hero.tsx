import LeadForm from "./LeadForm";
import { IconPercent, IconTrophy, IconWallet } from "./icons";

const badges = [
  { Icon: IconPercent, title: "Sem juros", sub: "e sem entrada" },
  { Icon: IconWallet, title: "Parcelas", sub: "que cabem no bolso" },
  { Icon: IconTrophy, title: "Várias chances", sub: "de contemplação" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain-bg">
      {/* brilho superior */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[120%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(225,25,34,0.22),transparent)]" />

      <div className="container-wr relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Coluna texto */}
        <div className="reveal">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wr-red" />
            Consórcio Grupo WR
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="metal-text">Planejamento</span>
            <br />
            <span className="metal-text">inteligente</span>{" "}
            <span className="text-white">para</span>
            <br />
            <span className="text-white">alcançar seus </span>
            <span className="red-text">objetivos.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-wr-silver-500">
            Conquiste seu imóvel, carro ou moto sem juros e sem entrada. No
            consórcio do Grupo WR, você realiza seus sonhos com planejamento.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-3 rounded-2xl border border-wr-border bg-wr-panel/70 px-4 py-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-wr-red/12 text-wr-red">
                  <b.Icon size={18} />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-white">{b.title}</div>
                  <div className="text-xs text-wr-silver-500">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div>
              <div className="text-2xl font-extrabold metal-text">8,9/10</div>
              <div className="text-xs text-wr-silver-500">avaliação dos clientes</div>
            </div>
            <div className="h-8 w-px bg-wr-border" />
            <div>
              <div className="text-2xl font-extrabold metal-text">100%</div>
              <div className="text-xs text-wr-silver-500">digital e seguro</div>
            </div>
          </div>
        </div>

        {/* Coluna form */}
        <div className="reveal">
          <div className="panel panel-glow p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-white">
              Simule seu consórcio em <span className="red-text">1 minuto</span>
            </h2>
            <p className="mt-1 text-sm text-wr-silver-500">
              Preencha e um consultor entra em contato com a melhor proposta.
            </p>
            <div className="mt-5">
              <LeadForm variant="compact" origem="hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="chrome-divider" />
    </section>
  );
}
