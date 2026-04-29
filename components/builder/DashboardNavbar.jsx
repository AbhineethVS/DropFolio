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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-20
                 flex items-center justify-between
                 pl-6 pr-4 py-3 backdrop-blur-sm rounded-full
                 border border-[#333] bg-[#1f1f1f57]
                 w-[calc(100%-2rem)] sm:w-auto gap-x-8"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 -translate-x-1/2 opacity-80" />
          <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 -translate-y-1/2 opacity-80" />
          <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 -translate-y-1/2 opacity-80" />
          <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 -translate-x-1/2 opacity-80" />
        </div>
        <span className="text-white font-semibold text-sm tracking-wider">DROPFOLIO</span>
      </Link>

      {/* Nav items */}
      <nav className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
        >
          Dashboard
        </Link>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
        >
          Log Out
        </button>
      </nav>
    </header>
  );
}
