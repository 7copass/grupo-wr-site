import Image from "next/image";

// Dimensões reais dos PNGs (public/brands/*.png) para o next/image calcular
// o aspect-ratio corretamente — a altura exibida é controlada via className.
const brands = [
  {
    src: "/brands/volkswagen.png",
    alt: "Consórcio Volkswagen com a Embracon",
    w: 480,
    h: 232,
  },
  { src: "/brands/fiat.png", alt: "Fiat Consórcio", w: 480, h: 320 },
  { src: "/brands/yamaha.png", alt: "Yamaha Consórcio", w: 480, h: 223 },
  { src: "/brands/embracon.png", alt: "Consórcio Embracon", w: 480, h: 233 },
  { src: "/brands/ancora.png", alt: "Âncora Consórcios", w: 480, h: 194 },
];

export default function Brands() {
  return (
    <section className="section !pt-0">
      <div className="container-wr">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Marcas parceiras</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            <span className="text-white">Autorizados a trabalhar com as</span>{" "}
            <span className="red-text">melhores marcas</span>
          </h2>
          <p className="mt-3 text-wr-silver-500">
            Representamos administradoras e marcas de referência no mercado de
            consórcios do Brasil.
          </p>
        </div>

        <div className="panel mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-9 px-8 py-10 sm:gap-x-14 sm:px-12">
          {brands.map((b) => (
            <div
              key={b.src}
              className="flex h-12 items-center opacity-85 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={b.w}
                height={b.h}
                className="h-full w-auto max-w-[200px] object-contain sm:max-w-[240px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
