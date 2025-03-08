import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My project",
  description: "Testing project",
  authors: [{ name: "Oleksandr", url: "hhttps://github.com/aleks6699" }],
  keywords: "Next.js, React, TypeScript, project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${inter.variable} ${manrope.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
