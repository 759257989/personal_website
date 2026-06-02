import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu (Ray) Wang — Software Engineer",
  description:
    "Arcade-style portfolio of Yu (Ray) Wang — software engineer building backend systems, AI applications, and full-stack apps.",
  keywords:
    "Yu Wang, software engineer, developer, portfolio, backend, AI, full-stack, Go, Java, Python, React",
  authors: [{ name: "Yu (Ray) Wang" }],
  icons: {
    icon: "/pagewebicon.svg",
    shortcut: "/pagewebicon.svg",
    apple: "/pagewebicon.svg",
  },
  openGraph: {
    title: "Yu (Ray) Wang — Software Engineer",
    description:
      "Arcade-style portfolio showcasing backend systems, AI applications, and full-stack projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
