import ButtonsNavigate from "@/components/ButtonsNavigate";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <ButtonsNavigate />

          <h1 className="font-semibold text-3xl mt-8 my-4">Good evening</h1>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <a href="" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/logica-insana.png" width={64} height={64} alt="Capa do Lógica Insana" />
              <strong>Lógica Insana</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4  invisible group-hover:visible">
                <Play />
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

          <h1 className="font-semibold text-2xl mt-12 ml-2 my-6">Made For Jon</h1>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/discover-weekly.jpeg" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold">Discovery Weekly</strong>
              <span className="text-sm text-zinc-400">Your weekly mixtape of fresh music. </span>
            </a>

            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/logica-insana.png" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold">Lógica Insana</strong>
              <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
            </a>

            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/daily-mix-2.jpeg" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold">Mix Daily 1</strong>
              <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
            </a>

            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/naga048.jpeg" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold">Mix Daily 2</strong>
              <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
            </a>

            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/negro-rudy.jpeg" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold text-ellipsis">Negro Rudhy</strong>
              <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
            </a>

            <a href="#" className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white/5 hover:bg-white/10">
              <Image className="rounded-md w-full" src="/radar.jpeg" width={120} height={120} alt="Imagem de capa" />
              <strong className="font-semibold text-ellipsis">Radar de novidades</strong>
              <span className="text-sm text-zinc-400">Jxn. P, Sam.Ronin, Naga 048, GHR 44, Lalau AD </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
