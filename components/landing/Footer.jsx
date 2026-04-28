const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222] w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Wordmark + tagline */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading font-semibold text-white text-lg tracking-wider">
              DROPFOLIO
            </span>
            <span className="text-[#a1a1a1] text-sm">
              Your portfolio, built in minutes.
            </span>
          </div>

          {/* Footer links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[#a1a1a1] text-sm hover:text-white transition-colors duration-200"
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-[#222222]">
          <p className="text-[#a1a1a1] text-sm">
            © 2026 DROPFOLIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
