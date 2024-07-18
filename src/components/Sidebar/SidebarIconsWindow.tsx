export default function SidebarIconsWindow() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer" title="Close" />
      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:cursor-pointer" />
      <div className="w-3 h-3 bg-green-500 rounded-full hover:cursor-pointer" />
    </div>
  );
}
