import { DashboardNavbar } from "@/components/builder/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans">
      <DashboardNavbar />
      {children}
    </div>
  );
}
