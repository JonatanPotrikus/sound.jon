import SidebarMenu from "./SidebarMenu";
import SidebarIconsWindow from "./SidebarIconsWindow";
import YourLibrary from "./YourLibrary";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-zinc-950 p-6">
      <SidebarIconsWindow />
      <SidebarMenu />
      <YourLibrary />
    </aside>
  );
}
