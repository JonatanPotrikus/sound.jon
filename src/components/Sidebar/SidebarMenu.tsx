import { Search, Library, Home as HomeIcon } from "lucide-react";

export default function SidebarMenu() {
  return (
    <nav className="space-y-5 mt-2">
      <a href="/" className="flex gap-4 font-xs font-semibold text-zinc-200">
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
  );
}
