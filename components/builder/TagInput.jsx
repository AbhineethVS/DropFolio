"use client";

import { useState, useRef } from "react";

export function TagInput({ tags, onChange, placeholder = "Type and press Enter or comma…" }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const addTag = (value) => {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInputValue("");
  };

  const removeTag = (index) => {
    onChange(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.endsWith(",")) {
      addTag(value.slice(0, -1));
    } else {
      setInputValue(value);
    }
  };

  return (
    <div
      className="min-h-[48px] flex flex-wrap gap-2 items-center p-3 rounded-lg border border-[#333] bg-[#1a1a1a] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-[#2a2a2a] border border-[#444] text-white/90"
        >
          {tag}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeTag(i);
            }}
            className="text-gray-400 hover:text-white ml-0.5 leading-none"
            aria-label={`Remove ${tag}`}
          >
            ×
          </button>
        </span>
      ))}
      <input
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-1 min-w-[120px] bg-transparent outline-none text-sm text-white placeholder-gray-600"
      />
    </div>
  );
}
