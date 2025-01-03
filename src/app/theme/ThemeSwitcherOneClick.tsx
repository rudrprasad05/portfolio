"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcherOneClick = ({ seeName }: { seeName: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme == "light")
    return (
      <button
        className={cn(
          " hover:bg-background/60 transition rounded-md fixed top-2 right-2",
          seeName && "flex gap-3 items-center"
        )}
        onClick={() => setTheme("dark")}
      >
        <div className="flex items-center p-3">
          <Moon className="mx-auto stroke-primary h-6 w-6" />
        </div>
        <div>{seeName && "Light"}</div>
      </button>
    );
  if (theme == "dark")
    return (
      <button
        className={cn(
          " hover:bg-background/60 transition rounded-md fixed top-2 right-2",
          seeName && "flex gap-3 items-center"
        )}
        onClick={() => setTheme("light")}
      >
        <div className="p-3 flex items-center">
          <Sun className="mx-auto stroke-primary h-6 w-6" />
        </div>
        <div>{seeName && "Dark"}</div>
      </button>
    );
};

export default ThemeSwitcherOneClick;
