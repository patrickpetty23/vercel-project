import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Roulette",
  description: "Discover your next favorite meal with Restaurant Roulette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {/* Simple Header */}
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <Link href="/">
                <h1 className="text-xl font-bold text-gray-900">
                  🍽️ Restaurant Roulette
                </h1>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main>{children}</main>

          {/* Navigation */}
          <Navigation />
        </div>
      </body>
    </html>
  );
}
