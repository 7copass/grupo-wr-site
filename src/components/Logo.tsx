// Logo do Grupo WR recriado em SVG (emblema + wordmark).
// Para usar o PNG oficial: coloque o arquivo em /public/logo-wr.png e troque
// o bloco <svg> do emblema por <img src="/logo-wr.png" ... />.

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="wrSilver" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#c9ccd0" />
            <stop offset="1" stopColor="#7a7d82" />
          </linearGradient>
          <linearGradient id="wrRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0242d" />
            <stop offset="1" stopColor="#a50f16" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="47" fill="#0b0b0d" stroke="url(#wrSilver)" strokeWidth="3" />
        <path
          d="M50 6 a44 44 0 0 1 38 22"
          fill="none"
          stroke="url(#wrRed)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1"
        >
          <tspan fill="url(#wrSilver)">W</tspan>
          <tspan fill="url(#wrRed)">R</tspan>
        </text>
      </svg>
      <div className="leading-none">
        <div className="text-lg font-extrabold tracking-tight">
          <span className="metal-text">GRUPO</span>
          <span className="red-text">WR</span>
        </div>
        <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-wr-silver-500">
          Realizando sonhos
        </div>
      </div>
    </div>
  );
}
