"use client";

import { useState } from "react";
import { TagInput } from "../TagInput";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] text-white placeholder-gray-600 text-sm outline-none focus:border-white/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

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
        <h2 className="text-xl font-semibold text-white">Projects</h2>
        <p className="text-sm text-gray-500 mt-1">Things you&apos;ve built — up to 6</p>
      </div>

      {projects.length === 0 && (
        <div className="text-center py-8 text-gray-600 text-sm border border-dashed border-[#2a2a2a] rounded-xl">
          No projects yet — add your first one below.
        </div>
      )}

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-[#2a2a2a] rounded-xl overflow-hidden"
          >
            {/* Header row */}
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/[0.03] transition-colors"
              onClick={() => toggle(project.id)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-6 h-6 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-xs text-gray-500 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white/80 truncate">
                  {project.name || `Project ${index + 1}`}
                </span>
                {project.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40 flex-shrink-0">
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
                  className="text-xs text-gray-600 hover:text-red-400 transition-colors"
                >
                  Remove
                </button>
                <span className="text-gray-600 text-xs">
                  {expandedId === project.id ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Expanded form */}
            {expandedId === project.id && (
              <div className="px-4 pb-5 pt-4 space-y-4 border-t border-[#1e1e1e] bg-[#0a0a0a]">
                {/* Project name */}
                <div>
                  <label className={labelClass}>
                    Project name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      updateProject(project.id, { name: e.target.value })
                    }
                    placeholder="e.g. AI Resume Builder"
                    className={inputClass}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className={labelClass}>
                    Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, { description: e.target.value })
                    }
                    rows={3}
                    placeholder="Describe what you built and why. What problem does it solve?"
                    className={`${inputClass} resize-none`}
                  />
                  <p className="mt-1 text-xs text-gray-600">
                    AI will make this sound impressive.
                  </p>
                </div>

                {/* Tech stack */}
                <div>
                  <label className={labelClass}>
                    Tech stack <span className="text-red-400">*</span>
                  </label>
                  <TagInput
                    tags={project.techStack}
                    onChange={(techStack) =>
                      updateProject(project.id, { techStack })
                    }
                    placeholder="e.g. React, Node.js, MongoDB…"
                  />
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      GitHub link{" "}
                      <span className="text-gray-600 font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={project.githubLink}
                      onChange={(e) =>
                        updateProject(project.id, { githubLink: e.target.value })
                      }
                      placeholder="https://github.com/…"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Live link{" "}
                      <span className="text-gray-600 font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={project.liveLink}
                      onChange={(e) =>
                        updateProject(project.id, { liveLink: e.target.value })
                      }
                      placeholder="https://…"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={project.featured}
                    onClick={() =>
                      updateProject(project.id, { featured: !project.featured })
                    }
                    className={`w-9 h-5 rounded-full transition-colors duration-200 relative flex-shrink-0 ${
                      project.featured ? "bg-white" : "bg-[#333]"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-black transition-transform duration-200 ${
                        project.featured ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                  <label className="text-sm text-white/60 cursor-default">
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
        className="w-full py-3 text-sm text-gray-500 border border-dashed border-[#2a2a2a] rounded-xl hover:border-white/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        {projects.length >= 6
          ? "Maximum 6 projects reached"
          : `+ Add ${projects.length === 0 ? "a project" : "another project"}`}
      </button>
    </div>
  );
}
