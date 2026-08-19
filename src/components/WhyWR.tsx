import { IconShield, IconSpark, IconStar, IconWallet } from "./icons";

const stats = [
  { value: "+2 mil", label: "clientes atendidos", star: false },
  { value: "+R$50mi", label: "em créditos liberados", star: false },
  { value: "100%", label: "digital e transparente", star: false },
  { value: "4.9", label: "avaliação dos clientes", star: true },
];

const pillarIcons = [IconShield, IconSpark, IconWallet];

const pillars = [
  {
    title: "Segurança e credibilidade",
    text: "Operação séria, transparente e acompanhada de perto por especialistas em consórcio.",
  },
  {
    title: "Atendimento humano",
    text: "Um consultor dedicado para te orientar em cada etapa, do primeiro contato à contemplação.",
  },
  {
    title: "Planejamento de verdade",
    text: "Montamos o plano ideal para o seu momento, sem empurrar parcelas que não cabem no seu bolso.",
  },
];

export default function WhyWR() {
  return (
    <section id="sobre" className="section">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Por que Grupo WR</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">Escolha </span>
            <span className="metal-text">segurança</span>
            <span className="text-white"> e </span>
            <span className="red-text">credibilidade</span>
          </h2>
          <p className="mt-3 text-wr-silver-500">
            Experiência que ajuda a realizar os planos de milhares de pessoas em
            todo o Brasil. Com a gente, sua jornada é digital e levada a sério.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="panel p-6 text-center"
            >
              <div className="flex items-center justify-center gap-1.5 text-3xl font-extrabold metal-text">
                {s.value}
                {s.star && <IconStar size={22} className="text-wr-red" />}
              </div>
              <div className="mt-1 text-sm text-wr-silver-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <div
                key={p.title}
                className="rounded-2xl border-l-2 border-wr-red bg-wr-panel/40 p-6"
              >
                <Icon size={24} className="text-wr-red" />
                <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-wr-silver-500">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
