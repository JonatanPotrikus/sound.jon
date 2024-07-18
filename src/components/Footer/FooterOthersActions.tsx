import { Mic2, ListMusic, MonitorSpeaker, Volume2, PictureInPicture2, Maximize2 } from "lucide-react";

export default function FooterOtherActions() {
  return (
    <div className=" flex items-center gap-4">
      <Mic2 size={18} className="text-zinc-200" />
      <ListMusic size={18} className="text-zinc-200" />
      <MonitorSpeaker size={20} className="text-zinc-200" />
      <Volume2 size={18} className="text-zinc-200" />

      <div className="h-1 rounded-full w-16 bg-zinc-500">
        <div className="h-1 rounded-full w-16 bg-zinc-100 hover:bg-green-400"></div>
      </div>

      <PictureInPicture2 size={18} className="text-zinc-200" />
      <Maximize2 size={18} className="text-zinc-200 mr-2 cursor-pointer" />
    </div>
  );
}
