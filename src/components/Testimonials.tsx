import { IconStar } from "./icons";

const testimonials = [
  {
    name: "Rafael Menezes",
    tag: "Carro",
    text: "Sempre quis trocar de carro sem cair nos juros do financiamento. No Grupo WR encontrei um plano que coube no meu orçamento e em pouco tempo fui contemplado.",
  },
  {
    name: "Patrícia Andrade",
    tag: "Imóvel",
    text: "Não tenho palavras para descrever a alegria de conquistar meu apartamento. Atendimento sério e transparente do começo ao fim. Recomendo demais!",
  },
  {
    name: "Juliano Costa",
    tag: "Moto",
    text: "Fui contemplado logo nos primeiros meses e realizei o sonho da minha moto nova. Equipe atenciosa que me orientou em cada etapa. Valeu, Grupo WR!",
  },
  {
    name: "Fernanda Lopes",
    tag: "Imóvel",
    text: "O consultor montou um plano do meu jeito, sem me empurrar parcela alta. Deu tudo certo e hoje moro na casa própria. Gratidão!",
  },
  {
    name: "Marcos Vinícius",
    tag: "Carro",
    text: "Já é o segundo veículo que adquiro pelo consórcio. Processo ágil, seguro e sem burocracia. Confio de olhos fechados no Grupo WR.",
  },
  {
    name: "Camila Ribeiro",
    tag: "Moto",
    text: "Melhor custo-benefício que encontrei. Planejei, participei e fui contemplada. Indico para todo mundo que quer realizar um sonho com organização.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section grain-bg">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Quem conquistou</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">O que dizem </span>
            <span className="metal-text">sobre nós</span>
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="panel break-inside-avoid p-6"
            >
              <div className="flex gap-0.5 text-wr-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} size={15} className="fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-wr-silver">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#d7d9dc] to-[#7a7d82] text-sm font-extrabold text-[#131316]">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-wr-red">{t.tag}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
