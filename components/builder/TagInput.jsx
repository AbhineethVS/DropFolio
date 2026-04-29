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
      className="min-h-[48px] flex flex-wrap gap-2 items-center p-3 cursor-text transition-all duration-150"
      style={{
        borderRadius: "var(--radius-base)",
        border: "2px solid var(--border)",
        background: "var(--background)",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold text-black"
          style={{
            background: "var(--main)",
            border: "2px solid var(--border)",
            borderRadius: "6px",
            boxShadow: "2px 2px 0px var(--border)",
          }}
        >
          {tag}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeTag(i);
            }}
            className="font-black leading-none hover:opacity-60 transition-opacity ml-0.5"
            style={{ color: "var(--main-foreground)" }}
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
        className="flex-1 min-w-[120px] bg-transparent outline-none text-sm font-medium"
        style={{ color: "var(--foreground)" }}
      />
    </div>
  );
}
