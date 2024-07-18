import { Heart } from "lucide-react";
import Image from "next/image";

export default function FooterPlayNowArtist() {
  return (
    <div className="flex items-center gap-4">
      <Image src="/rua.jpeg" width={56} height={56} alt="Capa do Lógica Insana" />
      <div className="flex flex-col gap-1">
        <strong className="font-semibold text-xs">Rua</strong>
        <span className="text-xs text-zinc-400">Lógica Insana, GHR048, Nag048, Jxn P </span>
      </div>
      <Heart size={18} className="text-zinc-500" />
    </div>
  );
}
