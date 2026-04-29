import Link from "next/link";

export function CTABanner() {
  return (
    <section className="w-full bg-black dark:bg-[#34d399] py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl md:text-5xl font-black text-white dark:text-black leading-tight">
          Ready to get noticed?
        </h2>
        <p className="text-base font-medium text-white/70 dark:text-black/70">
          Build your portfolio in 5 minutes. Free forever.
        </p>
        <Link
          href="/sign-up"
          className="px-8 py-3.5 text-base font-black text-black bg-[#34d399] dark:bg-black dark:text-white rounded-[var(--nb-radius)] border-2 border-white dark:border-black transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
          style={{ boxShadow: "3px 3px 0px #fff" }}
        >
          Build mine now →
        </Link>
      </div>
    </section>
  );
}
