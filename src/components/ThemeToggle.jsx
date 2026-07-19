import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 88 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event) => {
      const nextX = Math.max(
        12,
        Math.min(window.innerWidth - 140, event.clientX - dragOffset.current.x)
      );
      const nextY = Math.max(
        12,
        Math.min(window.innerHeight - 48, event.clientY - dragOffset.current.y)
      );

      setPosition({ x: nextX, y: nextY });
    };

    const handlePointerUp = () => setIsDragging(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  return (
    <button
      onClick={toggleTheme}
      onPointerDown={handlePointerDown}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={cn(
        "fixed max-sm:hidden z-50 flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-background/70 px-2.5 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_6px_16px_rgba(168,85,247,0.12)] backdrop-blur-md transition-all duration-300 hover:border-purple-300/60 hover:bg-background/90 focus:outline-none cursor-grab active:cursor-grabbing",
        "focus:outline-none"
      )}
      aria-label="Toggle theme"
      title="Drag to move"
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300",
          isDarkMode ? "bg-yellow-400/20 text-yellow-300" : "bg-slate-900/10 text-slate-700"
        )}
      >
        {isDarkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>

      <span className="text-xs font-medium text-foreground/90">
        {isDarkMode ? "Dark" : "Light"}
      </span>
    </button>
  );
};