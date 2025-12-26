"use client";

import { Dispatch, SetStateAction } from "react";

import { Badge } from "../ui/badge";

interface FilterBadgeProps {
  filter: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<string>>;
}

const FilterBadge = ({ filter, setIsActive, isActive }: FilterBadgeProps) => {
  const handleClick = (filter: string) => {
    if (isActive) {
      setIsActive("");
      return;
    }
    setIsActive(filter);
  };
  return (
    <Badge
      className={`dark:bg-dark-200 bg-light-200 cursor-pointer rounded-lg px-6 py-3 ${isActive ? "dark:bg-dark-300 bg-light-400/80" : ""}`}
      onClick={() => handleClick(filter)}
    >
      <p className={`p3-medium dark:text-gray-dark text-gray-light ${isActive ? "gradient-primary-text" : ""}`}>
        {filter}
      </p>
    </Badge>
  );
};

export default FilterBadge;
