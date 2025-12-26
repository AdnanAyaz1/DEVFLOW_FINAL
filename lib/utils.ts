import { clsx, type ClassValue } from "clsx";
import { FaCode } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { techRegistry } from "@/constants/techRegistory";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizeTag = (tag: string) => {
  return tag.toLowerCase().replace(/\./g, "").replace(/\s+/g, "").trim();
};

export const resolveTechTag = (input: string) => {
  const normalized = normalizeTag(input);

  for (const tech of Object.values(techRegistry)) {
    if (tech.aliases.includes(normalized)) {
      return tech;
    }
  }

  // fallback for unknown tags (e.g. "security")
  return {
    label: input,
    icon: FaCode,
    color: "bg-gray-100 text-gray-700",
  };
};
