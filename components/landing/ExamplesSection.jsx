// TODO: Replace placeholder cards with real portfolios after launch

const portfolios = [
  {
    name: "Alex Morgan",
    role: "Product Designer",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
  {
    name: "Priya Nair",
    role: "Full Stack Dev",
    gradient: "from-[#0d1b2a] via-[#1b263b] to-[#415a77]",
  },
  {
    name: "James Liu",
    role: "Brand Strategist",
    gradient: "from-[#1a0a2e] via-[#2d1b4e] to-[#4a2070]",
  },
];

export function ExamplesSection() {
  return (
    <section id="examples" className="py-24 w-full px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            See what&apos;s possible
          </h2>
          <p className="text-[#a1a1a1] text-lg">
            Portfolios built by real creators on DROPFOLIO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map(({ name, role, gradient }) => (
            <div
              key={name}
              className="bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden group hover:border-[#333333] transition-colors duration-200"
            >
              {/* Gradient thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-white/60 text-xl font-semibold">
                      {name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <h3 className="font-heading text-white font-semibold text-lg">{name}</h3>
                  <p className="text-[#a1a1a1] text-sm">{role}</p>
                </div>
                <a
                  href="#"
                  className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2"
                >
                  View Portfolio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
