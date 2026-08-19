import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo WR | Realizando sonhos com planejamento",
  description:
    "Conquiste seu imóvel, carro ou moto com o consórcio do Grupo WR. Sem juros, sem entrada e com parcelas que cabem no seu bolso. Simule agora.",
  openGraph: {
    title: "Grupo WR | Consórcio inteligente",
    description:
      "Realize seus sonhos com planejamento. Consórcio de imóvel, carro e moto sem juros e sem entrada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
