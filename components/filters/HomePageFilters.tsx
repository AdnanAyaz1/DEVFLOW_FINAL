"use client";
import { useState } from "react";

import { HOME_FILTERS } from "@/constants";

import FilterBadge from "../badge/FilterBadge";

const HomePageFilters = () => {
  const [activeFilter, setIsActive] = useState("");
  return (
    <div className="flex flex-wrap gap-3">
      {HOME_FILTERS.map((filter) => {
        return (
          <FilterBadge key={filter} filter={filter} isActive={activeFilter === filter} setIsActive={setIsActive} />
        );
      })}
    </div>
  );
};

export default HomePageFilters;
