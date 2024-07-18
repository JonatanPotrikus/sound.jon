import { Play } from "lucide-react";
import Image from "next/image";

export default function RecentlyPlayed() {
  
  return(
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
    <a href="/artist/logica-insana" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/logica-insana.png" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Lógica Insana</strong>
      <button className="w-12 h-12 flex shadow-lg shadow-zinc-700 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play size={20}/>
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/jxnp.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Jxn.P</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/naga048.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Naga 048</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/sabotage.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Sabotage</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/bishop.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Bishop</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/lalauAD.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Lalau AD</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/kaabe.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Kaabe</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
    <a href="" className="bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
      <Image src="/thiagão.jpeg" width={64} height={64} alt="Capa do Lógica Insana" />
      <strong>Thiagão</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
        <Play />
      </button>
    </a>
  </div>
  )
}