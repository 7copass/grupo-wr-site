// Conjunto de ícones SVG (estilo Lucide, stroke 1.75, currentColor).
// Um único set, mesma linguagem visual em todo o site — sem emojis.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconHome = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </Base>
);

export const IconCar = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 16.5V13l1.8-5A2 2 0 0 1 7.7 6.7h8.6a2 2 0 0 1 1.9 1.3L20 13v3.5" />
    <path d="M3 13h18" />
    <path d="M4 16.5h16v2.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.5Z" />
    <circle cx="7.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
  </Base>
);

export const IconBike = (p: IconProps) => (
  <Base {...p}>
    <circle cx="5.5" cy="16.5" r="3.3" />
    <circle cx="18.5" cy="16.5" r="3.3" />
    <path d="M5.5 16.5 9 9h4l2.5 4.5" />
    <path d="M9 9l-1.5-2H5.5" />
    <path d="M13 9h3.5l2 4.5" />
    <path d="M12.5 13.5h-4" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m4.5 12.5 4.5 4.5 10.5-11" />
  </Base>
);

export const IconPercent = (p: IconProps) => (
  <Base {...p}>
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="7.5" cy="7.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </Base>
);

export const IconWallet = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a1 1 0 0 1 1 1v1.5" />
    <path d="M4 7.5V17a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H6a2 2 0 0 1-2-2Z" />
    <circle cx="15.5" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
  </Base>
);

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2.5" />
    <path d="M4 9.5h16M8 3.5v3M16 3.5v3" />
    <path d="M12 13v3l2 1.2" />
  </Base>
);

export const IconTrendingDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 7l6.5 6.5 3.5-3.5L21 17" />
    <path d="M15 17h6v-6" />
  </Base>
);

export const IconCreditCard = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="18" height="12" rx="2.5" />
    <path d="M3 10h18M6.5 14.5h4" />
  </Base>
);

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.3 7 8.5 4.1-1.2 7-4.3 7-8.5V6l-7-2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const IconSpark = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5v3M12 17.5v3M4.5 12h3M16.5 12h3M6.6 6.6l2.1 2.1M15.3 15.3l2.1 2.1M17.4 6.6l-2.1 2.1M8.7 15.3l-2.1 2.1" />
    <circle cx="12" cy="12" r="2.4" />
  </Base>
);

export const IconTrophy = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 4.5h10v4a5 5 0 0 1-10 0v-4Z" />
    <path d="M7 6H4.5v1.5A3 3 0 0 0 7 10.4M17 6h2.5v1.5A3 3 0 0 1 17 10.4" />
    <path d="M12 13.5V17M9 20h6M10 17h4v3h-4z" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconX = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconPlus = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const IconStar = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4Z" />
  </Base>
);

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Base>
);

export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21c4-4.5 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.5 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const IconWhatsApp = ({ size = 24, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.6 1.4h.1c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-4.9 1 1-4.8-.3-.4C5.6 18.4 5 16.7 5 15c0-6 4.9-10.9 11-10.9S27 9 27 15s-4.9 9.8-11 9.8zm6-8.2c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
  </svg>
);

// Registry por id — usado onde a escolha do ícone vem de dados (ex.: segmentos).
export const iconById = {
  home: IconHome,
  car: IconCar,
  bike: IconBike,
} as const;

export type IconId = keyof typeof iconById;
