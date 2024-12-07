import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Amit Kumar Verma - Full Stack Web Developer",
    default:
      "Amit Kumar Verma - Full Stack Developer (MERN)",
  },
  description:
    "Amit Kumar Verma is a full-stack developer skilled in React, Next.js, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Appwrite, Shadcn, Bootstrap, and Tailwind CSS. I focus on creating impactful web applications and continuously evolve with new technologies.",
  openGraph: {
    title: "Amit Kumar Verma - Full Stack Developer (MERN)",

  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-black"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <div className="relative lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto dark:bg-black dark:bg-dot-white/[0.09]">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto dark:border-neutral-800 dark:border-r-0 dark:border-b-0 dark:bg-[#0B0A05] dark:bg-grid-small-white/[0.2]">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
