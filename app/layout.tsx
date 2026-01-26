import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARTURA — Where Art Comes Alive",
  description:
    "Discover museum-quality art prints and exclusive collections. ARTURA brings masterpieces to life through immersive digital experiences.",
  keywords: ["art", "prints", "gallery", "Van Gogh", "masterpieces", "premium art"],
  openGraph: {
    title: "ARTURA — Where Art Comes Alive",
    description: "Discover museum-quality art prints and exclusive collections.",
    type: "website",
  },
};

import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
