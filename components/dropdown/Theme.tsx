"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ToggleTheme() {
  const { setTheme } = useTheme();

  const Themes = [
    { title: "Light", icon: Sun, value: "light" },
    { title: "Dark", icon: Moon, value: "dark" },
    { title: "System", icon: Computer, value: "system" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="bg-light-200 dark:bg-dark-300/60 cursor-pointer focus:ring-0">
          <Sun
            className="text-primary-100 size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            fill="#ff7000"
          />
          <Moon
            className="text-primary-100 absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            fill="#ff7000"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-dark-200 bg-light-200 dark:border-dark-300 border-light-200">
        {Themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setTheme(theme.value)}
            className="dark:hover:bg-dark-300 hover:bg-light-400/40 group flex cursor-pointer items-center gap-2"
          >
            <theme.icon className="group-hover:text-primary-100 group-hover:fill-primary-100 text-gray-dark fill-gray-dark size-4" />
            <p className="p3-medium dark:text-gray-dark text-gray-light group-hover:text-primary-100">{theme.title}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
