const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <footer
      className="w-full bg-white dark:bg-[#0f0f0f] px-4 md:px-6"
      style={{ borderTop: "var(--nb-border)" }}
    >
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 bg-[#34d399] flex items-center justify-center rounded-[6px]"
                style={{ border: "var(--nb-border)", boxShadow: "2px 2px 0px #000" }}
              >
                <span className="font-black text-black text-xs leading-none">D</span>
              </div>
              <span className="font-black text-black dark:text-white text-sm tracking-widest uppercase">
                DROPFOLIO
              </span>
            </div>
            <span className="text-sm font-medium text-black/50 dark:text-white/50">
              Your portfolio, built in minutes.
            </span>
          </div>

          {/* Footer links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-150"
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "var(--nb-border)" }}
        >
          <p className="text-sm font-medium text-black/50 dark:text-white/50">
            © 2026 DROPFOLIO. All rights reserved.
          </p>
          <span
            className="text-xs font-bold text-black dark:text-white px-3 py-1 bg-[#34d399] rounded-full border-2 border-black dark:border-white"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            Made with Claude AI
          </span>
        </div>
      </div>
    </footer>
  );
}
