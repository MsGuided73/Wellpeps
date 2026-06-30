import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WellPeps — Modern Telehealth & Wellness Programs",
  description:
    "WellPeps connects you with licensed providers for personalized weight management, peptide therapy, sexual wellness, and hair restoration — evaluated online and shipped discreetly if prescribed.",
};

export const viewport: Viewport = {
  themeColor: "#082B59",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F9FC] text-[#4B5C73] font-sans">
        {children}
      </body>
    </html>
  );
}
