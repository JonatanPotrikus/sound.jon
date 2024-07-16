import {
  Search,
  Library,
  Home as HomeIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer" title="Close" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:cursor-pointer" />
        <div className="w-3 h-3 bg-green-500 rounded-full hover:cursor-pointer" />
      </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex gap-4 font-xs font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex gap-4 font-xs font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="" className="flex gap-4 font-xs font-semibold text-zinc-200 ">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Lógica Insana
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Naga 048
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Ronin
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Ghr 44
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Eduardo Taddeo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Notorious B.i.g
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          2 Pac
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Sabotage
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          APC 16
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rapping Hood
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rodox
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Pepper
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Victin
        </a>
      </nav>
    </aside>
  );
}
