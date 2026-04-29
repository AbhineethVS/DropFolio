// TODO: Replace placeholder cards with real portfolios after launch

const portfolios = [
  {
    name: "Alex Morgan",
    role: "Product Designer",
    headerBg: "bg-[#34d399]",
    headerBorder: "border-black",
    avatarBg: "bg-black",
    avatarText: "text-white",
  },
  {
    name: "Priya Nair",
    role: "Full Stack Dev",
    headerBg: "bg-blue-400",
    headerBorder: "border-black",
    avatarBg: "bg-black",
    avatarText: "text-white",
  },
  {
    name: "James Liu",
    role: "Brand Strategist",
    headerBg: "bg-amber-400",
    headerBorder: "border-black",
    avatarBg: "bg-black",
    avatarText: "text-white",
  },
];

export function ExamplesSection() {
  return (
    <section id="examples" className="py-20 w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[36px] font-black text-black dark:text-white text-center mb-14">
          See what&apos;s possible
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map(({ name, role, headerBg, avatarBg, avatarText }) => (
            <div
              key={name}
              className="bg-white dark:bg-[#1a1a1a] rounded-[var(--nb-radius)] border-2 border-black dark:border-white overflow-hidden transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-1"
              style={{ boxShadow: "var(--nb-shadow)" }}
            >
              {/* Colored header */}
              <div
                className={`h-36 ${headerBg} flex items-end justify-center pb-0 relative border-b-2 border-black dark:border-white`}
              >
                <div
                  className={`absolute -bottom-6 w-12 h-12 rounded-full ${avatarBg} border-2 border-black dark:border-white flex items-center justify-center`}
                  style={{ boxShadow: "2px 2px 0px #000" }}
                >
                  <span className={`${avatarText} text-lg font-black`}>{name.charAt(0)}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="pt-10 pb-6 px-6 flex flex-col gap-3">
                <div>
                  <h3 className="font-black text-black dark:text-white text-lg">{name}</h3>
                  <p className="text-sm font-medium text-black/60 dark:text-white/60">{role}</p>
                </div>
                <a
                  href="#"
                  className="text-sm font-bold text-[#059669] hover:text-[#34d399] transition-colors duration-150"
                >
                  View portfolio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
