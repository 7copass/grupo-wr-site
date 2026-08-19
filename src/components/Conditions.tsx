import {
  IconCalendar,
  IconCreditCard,
  IconTrendingDown,
  IconWallet,
} from "./icons";

const items = [
  {
    Icon: IconCreditCard,
    title: "Pague a 1ª parcela como quiser",
    text: "PIX, boleto ou cartão de crédito. Flexibilidade total para começar.",
  },
  {
    Icon: IconCalendar,
    title: "Carência após contemplação",
    text: "Prazo de carência para você se organizar depois de ser contemplado por lance.",
  },
  {
    Icon: IconWallet,
    title: "Use seu FGTS",
    text: "No consórcio de imóveis, utilize o FGTS como lance para acelerar sua contemplação.",
  },
  {
    Icon: IconTrendingDown,
    title: "Sem juros do financiamento",
    text: "Você paga apenas a taxa de administração, muito menor que os juros de um financiamento.",
  },
];

export default function Conditions() {
  return (
    <section id="consorcio" className="section grain-bg">
      <div className="container-wr">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Condições exclusivas</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              <span className="text-white">Feitas para </span>
              <span className="metal-text">você conquistar</span>
            </h2>
            <p className="mt-4 max-w-md text-wr-silver-500">
              O consórcio é a forma mais inteligente de planejar uma grande
              compra: você forma uma poupança coletiva, sem os juros de um
              financiamento, e é contemplado por sorteio ou lance.
            </p>

            <div className="mt-8 grid gap-4 rounded-2xl border border-wr-border bg-wr-panel/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-wr-silver-500">Financiamento</span>
                <span className="text-sm font-bold text-wr-silver-500 line-through">
                  Juros altos + entrada
                </span>
              </div>
              <div className="chrome-divider" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  Consórcio Grupo WR
                </span>
                <span className="text-sm font-bold red-text">
                  Sem juros + sem entrada
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="panel p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wr-red/12 text-wr-red">
                  <it.Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-wr-silver-500">{it.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-wr-silver-500">
          O Grupo WR não autoriza pagamentos a terceiros. Pagamentos são feitos
          exclusivamente pelos canais oficiais.
        </p>
      </div>
    </section>
  );
}
