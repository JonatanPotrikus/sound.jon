import { Play, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react";

export default function FooterPlayerControls() {
  return (
    <div className="flex flex-col  items-center">
      <div className="flex items-center gap-3 py-2 hover:cursor-pointer">
        <Shuffle size={18} className="text-zinc-200" />
        <SkipBack size={18} className="text-zinc-200" />
        <button className="w-10 h-10 animate-pulse hover:animate-none flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto ">
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
  );
}
