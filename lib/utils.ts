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

export const extractNameInitials = (name: string) => {
  const namesArray = name.trim().split(" ");
  if (namesArray.length === 0) return "";

  if (namesArray.length === 1) {
    return namesArray[0].charAt(0).toUpperCase();
  }

  const firstInitial = namesArray[0].charAt(0).toUpperCase();
  const lastInitial = namesArray[namesArray.length - 1].charAt(0).toUpperCase();

  return firstInitial + lastInitial;
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
};
