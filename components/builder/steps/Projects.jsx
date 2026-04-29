"use client";

import { useState } from "react";
import { TagInput } from "../TagInput";

let _idCounter = 0;
const newId = () => ++_idCounter;

const emptyProject = () => ({
  id: newId(),
  name: "",
  description: "",
  techStack: [],
  githubLink: "",
  liveLink: "",
  featured: false,
});

export function Projects({ formData, updateFormData }) {
  const [expandedId, setExpandedId] = useState(null);
  const projects = formData.projects;

  const addProject = () => {
    const p = emptyProject();
    updateFormData({ projects: [...projects, p] });
    setExpandedId(p.id);
  };

  const updateProject = (id, updates) => {
    updateFormData({
      projects: projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const removeProject = (id) => {
    updateFormData({ projects: projects.filter((p) => p.id !== id) });
    if (expandedId === id) setExpandedId(null);
  };

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>
          Projects
        </h2>
        <p className="text-sm mt-1 font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}>
          Things you&apos;ve built — up to 6
        </p>
      </div>

      {projects.length === 0 && (
        <div
          className="text-center py-8 text-sm font-semibold"
          style={{
            border: "2px dashed var(--border)",
            borderRadius: "var(--radius-base)",
            color: "color-mix(in oklch, var(--foreground) 40%, transparent)",
          }}
        >
          No projects yet — add your first one below.
        </div>
      )}

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              border: "2px solid var(--border)",
              borderRadius: "var(--radius-base)",
              boxShadow: expandedId === project.id ? "var(--shadow-lg)" : "var(--shadow)",
              background: "var(--secondary-background)",
              transition: "box-shadow 150ms ease",
              overflow: "hidden",
            }}
          >
            {/* Header row */}
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-150"
              style={{ background: expandedId === project.id ? "var(--background)" : "transparent" }}
              onClick={() => toggle(project.id)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: "var(--main)",
                    border: "2px solid var(--border)",
                    color: "var(--main-foreground)",
                  }}
                >
                  {index + 1}
                </span>
                <span className="text-sm font-bold truncate" style={{ color: "var(--foreground)" }}>
                  {project.name || `Project ${index + 1}`}
                </span>
                {project.featured && (
                  <span
                    className="text-[10px] px-2 py-0.5 font-bold flex-shrink-0"
                    style={{
                      background: "var(--main)",
                      border: "2px solid var(--border)",
                      borderRadius: "4px",
                      color: "var(--main-foreground)",
                    }}
                  >
                    Pinned
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeProject(project.id);
                  }}
                  className="text-xs font-bold hover:text-red-500 transition-colors duration-150"
                  style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}
                >
                  Remove
                </button>
                <span
                  className="text-xs font-bold"
                  style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
                >
                  {expandedId === project.id ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Expanded form */}
            {expandedId === project.id && (
              <div
                className="px-4 pb-5 pt-4 space-y-4"
                style={{ borderTop: "2px solid var(--border)", background: "var(--background)" }}
              >
                {/* Project name */}
                <div>
                  <label className="nb-label">
                    Project name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(project.id, { name: e.target.value })}
                    placeholder="e.g. AI Resume Builder"
                    className="nb-input"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="nb-label">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, { description: e.target.value })}
                    rows={3}
                    placeholder="Describe what you built and why. What problem does it solve?"
                    className="nb-input resize-none"
                  />
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}
                  >
                    AI will make this sound impressive.
                  </p>
                </div>

                {/* Tech stack */}
                <div>
                  <label className="nb-label">
                    Tech stack <span className="text-red-500">*</span>
                  </label>
                  <TagInput
                    tags={project.techStack}
                    onChange={(techStack) => updateProject(project.id, { techStack })}
                    placeholder="e.g. React, Node.js, MongoDB…"
                  />
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="nb-label">
                      GitHub link{" "}
                      <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      type="url"
                      value={project.githubLink}
                      onChange={(e) => updateProject(project.id, { githubLink: e.target.value })}
                      placeholder="https://github.com/…"
                      className="nb-input"
                    />
                  </div>
                  <div>
                    <label className="nb-label">
                      Live link{" "}
                      <span className="font-medium" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)" }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      type="url"
                      value={project.liveLink}
                      onChange={(e) => updateProject(project.id, { liveLink: e.target.value })}
                      placeholder="https://…"
                      className="nb-input"
                    />
                  </div>
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={project.featured}
                    onClick={() => updateProject(project.id, { featured: !project.featured })}
                    className="w-9 h-5 rounded-full transition-colors duration-200 relative flex-shrink-0"
                    style={{
                      background: project.featured ? "var(--main)" : "color-mix(in oklch, var(--foreground) 20%, transparent)",
                      border: "2px solid var(--border)",
                    }}
                  >
                    <span
                      className="absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full transition-transform duration-200"
                      style={{
                        background: "var(--foreground)",
                        transform: project.featured ? "translateX(16px)" : "translateX(0)",
                      }}
                    />
                  </button>
                  <label
                    className="text-sm font-medium cursor-default"
                    style={{ color: "color-mix(in oklch, var(--foreground) 65%, transparent)" }}
                  >
                    Pin this project to the top of my portfolio
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add project button */}
      <button
        type="button"
        onClick={addProject}
        disabled={projects.length >= 6}
        className="nb-btn-dashed w-full py-3"
      >
        {projects.length >= 6
          ? "Maximum 6 projects reached"
          : `+ Add ${projects.length === 0 ? "a project" : "another project"}`}
      </button>
    </div>
  );
}
