import { whatsappLink } from "@/lib/site";
import { IconWhatsApp } from "./icons";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Olá! Quero simular um consórcio com o Grupo WR.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <IconWhatsApp size={30} />
    </a>
  );
}
