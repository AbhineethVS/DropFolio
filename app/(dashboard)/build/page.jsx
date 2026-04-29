import { BuilderShell } from "@/components/builder/BuilderShell";

export const metadata = {
  title: "Build your portfolio — DropFolio",
};

export default function BuildPage() {
  return (
    <main className="pt-10 pb-20 px-4">
      <BuilderShell />
    </main>
  );
}
