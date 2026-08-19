import LeadForm from "./LeadForm";
import { IconCheck } from "./icons";

export default function FinalCta() {
  return (
    <section id="contato" className="section">
      <div className="container-wr">
        <div className="panel panel-glow relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(225,25,34,0.25),transparent)]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Agora é a sua vez</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                <span className="text-white">Dê o primeiro passo rumo à </span>
                <span className="metal-text">sua conquista</span>
              </h2>
              <p className="mt-4 max-w-md text-wr-silver-500">
                Preencha o formulário e um consultor do Grupo WR entra em contato
                com a melhor proposta para você — sem compromisso.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-wr-silver">
                {[
                  "Simulação gratuita e personalizada",
                  "Sem juros e sem entrada",
                  "Atendimento 100% digital",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wr-red/15 text-wr-red">
                      <IconCheck size={13} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-wr-border bg-[#0e0e11]/60 p-6 sm:p-8">
              <LeadForm variant="full" origem="cta-final" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
