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

function LoadingOverlay() {
  return (
    <div
      className="max-w-2xl mx-auto"
      style={{ padding: "2rem" }}
    >
      <div
        className="nb-card flex flex-col items-center justify-center gap-6 py-20 px-8 text-center"
      >
        {/* Bouncing dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: "var(--main)",
                border: "2px solid var(--border)",
                animation: `bounce 0.8s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
        <div>
          <p className="font-black text-lg" style={{ color: "var(--foreground)" }}>
            AI is polishing your portfolio…
          </p>
          <p
            className="text-sm mt-1.5 font-medium"
            style={{ color: "color-mix(in oklch, var(--foreground) 50%, transparent)" }}
          >
            Claude is rewriting your content into professional copy.
          </p>
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </div>
  );
}

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
    return <LoadingOverlay />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <StepIndicator currentStep={currentStep} />

      {/* Form card */}
      <div className="nb-card mt-8 p-6 sm:p-8">
        {stepComponents[currentStep]}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="nb-btn-secondary px-6 py-2.5"
        >
          ← Back
        </button>

        <div className="flex items-center gap-3">
          {currentStep === 5 && (
            <button
              onClick={handleSkip}
              className="nb-btn-dashed px-5 py-2.5"
            >
              Skip this step
            </button>
          )}

          {currentStep < 6 ? (
            <button
              onClick={handleNext}
              className="nb-btn-primary px-7 py-2.5"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="nb-btn-primary py-3 px-8 text-base"
              style={{ boxShadow: "4px 4px 0px var(--border)" }}
            >
              Generate my portfolio →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
