"use client";

import { useState } from "react";
import { IconPlus } from "./icons";

const faqs = [
  {
    q: "O que é consórcio?",
    a: "Consórcio é uma modalidade de compra planejada em que um grupo de pessoas se une para formar uma poupança comum. Todo mês, um ou mais participantes são contemplados (por sorteio ou lance) e recebem uma carta de crédito para adquirir o bem desejado.",
  },
  {
    q: "Qual a diferença entre financiamento e consórcio?",
    a: "No financiamento você paga juros altos e geralmente precisa de entrada. No consórcio não há juros — você paga apenas uma taxa de administração, o que torna o custo total bem menor.",
  },
  {
    q: "Existe taxa de adesão ou entrada?",
    a: "No Grupo WR você não precisa de entrada. As condições de cada plano são apresentadas de forma transparente antes de você aderir.",
  },
  {
    q: "O que é carta de crédito?",
    a: "É o valor que você recebe ao ser contemplado. Com ela, você compra o imóvel, carro ou moto à vista, tendo poder de negociação como um comprador que paga na hora.",
  },
  {
    q: "Como funciona a contemplação?",
    a: "A contemplação acontece por sorteio ou por lance nas assembleias mensais. Quanto maior o lance, maiores as chances de ser contemplado antes.",
  },
  {
    q: "O que é lance?",
    a: "É uma antecipação de parcelas que você oferece para tentar ser contemplado mais cedo. Quem oferece o maior lance na assembleia é contemplado.",
  },
  {
    q: "E se eu não der lances?",
    a: "Sem problema. Você continua concorrendo normalmente por sorteio em todas as assembleias até ser contemplado.",
  },
  {
    q: "Preciso ter valor de entrada?",
    a: "Não. Uma das grandes vantagens do consórcio é justamente não exigir entrada para começar a participar.",
  },
  {
    q: "Tem análise de crédito para aderir?",
    a: "Para participar do grupo a adesão é simples. A análise de crédito ocorre no momento da contemplação, para liberação da carta.",
  },
  {
    q: "Tem chance de eu não ser contemplado?",
    a: "Todos os participantes são contemplados até o fim do grupo. Dando lances você pode antecipar bastante esse momento.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Tire suas dúvidas</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">Ainda ficou com </span>
            <span className="red-text">dúvidas?</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="panel overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-wr-border text-wr-red transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <IconPlus size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-wr-silver-500">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
