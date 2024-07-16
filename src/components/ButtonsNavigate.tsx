import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ButtonsNavigate() {
  return (
    <div className="flex items-center gap-3">
      <button className="p-1 rounded-full bg-black/50">
        <ChevronLeft />
      </button>

      <button className="p-1 rounded-full bg-black/20 cursor-not-allowed">
        <ChevronRight />
      </button>
    </div>
  );
}
