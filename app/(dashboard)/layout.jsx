import { DashboardNavbar } from "@/components/builder/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <DashboardNavbar />
      {children}
    </div>
  );
}
