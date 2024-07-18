"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonsNavigate() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      setCanGoBack(!!window.history.state);
      setCanGoForward(!!window.history.state && window.history.state.idx > 0 && window.history.length - 1 > 0);
    };

    window.addEventListener("popstate", updateNavigationState);
    updateNavigationState();

    return () => {
      window.removeEventListener("popstate", updateNavigationState);
    };
  }, []);

  const goBack = () => {
    if (canGoBack) {
      router.back();
    }
  };

  const goForward = () => {
    if (canGoForward) {
      router.forward();
    }
  };

  return (
    <div className="flex items-center gap-3 py-2">
      <button
        onClick={goBack}
        className={`p-1 rounded-full ${canGoBack ? "bg-black/50 cursor-pointer" : "bg-black/20 cursor-not-allowed"}`}
        disabled={!canGoBack}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={goForward}
        className={`p-1 rounded-full ${canGoForward ? "bg-black/50 cursor-pointer" : "bg-black/20 cursor-not-allowed"}`}
        disabled={!canGoForward}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
