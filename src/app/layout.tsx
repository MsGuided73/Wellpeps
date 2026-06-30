import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "How Open Water RX Works | Online Intake & Provider Review",
  description:
    "Learn how Open Water RX works: choose a care path, complete an online intake, receive licensed provider review, and get treatment shipped discreetly if prescribed.",
  icons: {
    icon: "/images/how-it-works-00-icon-for-openwaterrx-com.ico",
    apple: "/images/how-it-works-00-open-water-rx.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B7A8C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F8F8F6] text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
