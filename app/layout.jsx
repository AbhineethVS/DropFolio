import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DropFolio",
  description: "Portfolio generator for CS/IT students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn(spaceGrotesk.variable)} suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
