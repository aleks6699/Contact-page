import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Инициализация шрифтов
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My project",
  description: "Testing project",
  authors: [{ name: "Oleksandr", url: "https://github.com/aleks6699" }],
  keywords: "Next.js, React, TypeScript, project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${roboto.className} ${inter.className} ${manrope.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}