import {
  Home as HomeIcon,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Volume2,
  PictureInPicture2,
  Maximize2,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-2 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/rua.jpeg" width={56} height={56} alt="Capa do Lógica Insana" />
        <div className="flex flex-col gap-1">
          <strong className="font-semibold text-xs">Rua</strong>
          <span className="text-xs text-zinc-400">Lógica Insana, GHR048, Nag048, Jxn P </span>
        </div>
        <Heart size={18} className="text-zinc-500"/>
      </div>
      <div className="flex flex-col  items-center">
        <div className="flex items-center gap-3 py-2">
          <Shuffle size={18} className="text-zinc-200" />
          <SkipBack size={18} className="text-zinc-200" />
          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto ">
            <Play size={18} />
          </button>
          <SkipForward size={18} className="text-zinc-200" />
          <Repeat size={18} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-500">
            <div className="h-1 rounded-full w-40 bg-zinc-100 hover:bg-green-400"></div>
          </div>
          <span className="text-sm text-zinc-400">3:20</span>
        </div>
      </div>

      <div className=" flex items-center gap-4">
        <Mic2 size={18} className="text-zinc-200" />
        <ListMusic size={18} className="text-zinc-200" />
        <MonitorSpeaker size={20} className="text-zinc-200" />
        <Volume2 size={18} className="text-zinc-200" />

        <div className="h-1 rounded-full w-16 bg-zinc-500">
          <div className="h-1 rounded-full w-16 bg-zinc-100 hover:bg-green-400"></div>
        </div>

        <PictureInPicture2 size={18} className="text-zinc-200" />
        <Maximize2 size={18} className="text-zinc-200 mr-2" />
      </div>
    </footer>
  );
}
