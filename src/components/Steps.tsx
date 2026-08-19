const steps = [
  {
    n: "1",
    title: "Escolha seu objetivo",
    text: "Selecione o bem que você quer conquistar: imóvel, carro ou moto.",
  },
  {
    n: "2",
    title: "Monte seu plano",
    text: "Defina a carta de crédito e a parcela que cabem no seu bolso.",
  },
  {
    n: "3",
    title: "Realize seu sonho",
    text: "Confirme seus dados, participe do grupo e seja contemplado.",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="section">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Simples assim</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">Realize seu sonho em </span>
            <span className="red-text">3 passos</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.n} className="relative">
              {idx < steps.length - 1 && (
                <div className="absolute right-0 top-9 hidden h-px w-1/2 translate-x-1/2 bg-gradient-to-r from-wr-red/60 to-transparent md:block" />
              )}
              <div className="panel h-full p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f0242d] to-[#a50f16] text-2xl font-extrabold text-white shadow-[0_10px_30px_-10px_var(--wr-red-glow)]">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-wr-silver-500">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
