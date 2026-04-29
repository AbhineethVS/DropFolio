"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function DashboardNavbar() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header
      className="w-full bg-secondary-background sticky top-0 z-50"
      style={{ borderBottom: "2px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-[6px] shrink-0"
            style={{
              background: "var(--main)",
              border: "2px solid var(--border)",
              boxShadow: "2px 2px 0px var(--border)",
            }}
          >
            <span className="font-black text-black text-sm leading-none">D</span>
          </div>
          <span className="font-black text-foreground text-base tracking-widest uppercase">
            DROPFOLIO
          </span>
        </Link>

        {/* Nav actions */}
        <nav className="flex items-center gap-3">
          <Link href="/dashboard" className="nb-btn-secondary px-4 py-2">
            Dashboard
          </Link>
          <button onClick={handleSignOut} className="nb-btn-primary px-4 py-2">
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
}
