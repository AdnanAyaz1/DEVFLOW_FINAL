import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

import { normalizeTag } from "@/lib/utils";

import TagBadge from "../badge/TagBadge";

interface TagInputFieldProps {
  value: string[];
  onChange: (tags: string[]) => void;
  errorMessage?: string;
}

export const TagInputField = ({ value, onChange, errorMessage }: TagInputFieldProps) => {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    const raw = tagInput.trim();
    if (!raw) return;
    if (value.length >= 5) return;

    const normalizedNew = normalizeTag(raw);
    const hasDuplicate = value.some((tag) => normalizeTag(tag) === normalizedNew);
    if (hasDuplicate) {
      setTagInput("");
      return;
    }

    onChange([...value, raw]);
    setTagInput("");
  };

  const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div>
      <label htmlFor="tags-input" className="p2-semibold text-dark-400 dark:text-light-300">
        Tags <span className="text-red-600">*</span>
      </label>
      <div className="mt-3.5 space-y-3">
        <input
          id="tags-input"
          type="text"
          value={tagInput}
          onChange={(event) => setTagInput(event.target.value)}
          onKeyDown={handleTagKeyDown}
          className="dark:bg-dark-200 bg-light-300 mt-1 h-13.25 w-full rounded-md px-3 outline-0"
          placeholder="e.g. javascript"
        />
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <div className="relative" key={tag}>
              <TagBadge tag={tag} />
              <button
                type="button"
                onClick={() => onChange(value.filter((t) => t !== tag))}
                className="text-dark-400 dark:text-light-300 absolute top-0 -right-2 cursor-pointer"
              >
                <FaRegCircleXmark />
              </button>
            </div>
          ))}
        </div>
      </div>
      {errorMessage && <span className="p5-medium my-2 text-red-600">{errorMessage}</span>}
      <p className="dark:text-dark-gray text-gray-light p3-regular mt-2">
        Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
      </p>
    </div>
  );
};
