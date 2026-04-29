"use client";

import { useState, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { StepIndicator } from "./StepIndicator";
import { PersonalInfo } from "./steps/PersonalInfo";
import { Education } from "./steps/Education";
import { Skills } from "./steps/Skills";
import { Projects } from "./steps/Projects";
import { Honors } from "./steps/Honors";
import { SocialLinks } from "./steps/SocialLinks";

const initialFormData = {
  // Step 1 — Personal Info
  fullName: "",
  slug: "",
  title: "",
  bio: "",
  photo: null,
  photoPreview: "",
  location: "",
  openToWork: false,

  // Step 2 — Education
  college: "",
  branch: "",
  yearOfStudy: "",
  graduationYear: "",
  cgpa: "",
  coursework: "",

  // Step 3 — Skills
  skills: [],

  // Step 4 — Projects
  projects: [],

  // Step 5 — Honors
  honors: [],

  // Step 6 — Social Links
  email: "",
  github: "",
  linkedin: "",
  twitter: "",
  instagram: "",
  website: "",
  customLinkLabel: "",
  customLinkUrl: "",
};

export function BuilderShell() {
  const { user } = useUser();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = useCallback((updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSkip = () => {
    if (currentStep < 6) setCurrentStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("DropFolio formData:", formData);
    router.push("/preview");
  };

  const stepComponents = {
    1: <PersonalInfo formData={formData} updateFormData={updateFormData} />,
    2: <Education formData={formData} updateFormData={updateFormData} />,
    3: <Skills formData={formData} updateFormData={updateFormData} />,
    4: <Projects formData={formData} updateFormData={updateFormData} />,
    5: <Honors formData={formData} updateFormData={updateFormData} />,
    6: (
      <SocialLinks
        formData={formData}
        updateFormData={updateFormData}
        userEmail={user?.primaryEmailAddress?.emailAddress}
      />
    ),
  };

  if (isSubmitting) {
    return (
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        <p className="text-white/60 text-lg tracking-wide">AI is polishing your portfolio…</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <StepIndicator currentStep={currentStep} />

      {/* Form card */}
      <div className="mt-8 rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6 sm:p-8">
        {stepComponents[currentStep]}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-6 py-2.5 text-sm rounded-full border border-[#333] text-gray-400 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Back
        </button>

        <div className="flex items-center gap-3">
          {currentStep === 5 && (
            <button
              onClick={handleSkip}
              className="px-5 py-2.5 text-sm rounded-full border border-[#333] text-gray-500 hover:text-white hover:border-white/40 transition-colors"
            >
              Skip this step
            </button>
          )}

          {currentStep < 6 ? (
            <button
              onClick={handleNext}
              className="px-7 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all duration-150"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-2.5 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all duration-150"
            >
              Generate my portfolio →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
