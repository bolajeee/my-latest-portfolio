import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import { ThemeProviders } from "@/components/ThemeProviders";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingContact from "@/components/FloatingContact";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});



export const metadata: Metadata = {
  title: "Ibrahim O. Ibrahim - Fullstack Engineer & Food Process Innovator",
  description: "Portfolio of Ibrahim O. Ibrahim - Fullstack Engineer with 5+ years of experience in React.js, React Native, Node.js, and modern web technologies. Specializing in scalable applications and food process innovation.",
  keywords: "fullstack engineer, react developer, nodejs, food process innovation, web development, mobile development",
  authors: [{ name: "Ibrahim O. Ibrahim" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviders>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
        </ThemeProviders>
      </body>
    </html>
  );
}