import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu (Ray) Wang",
  description: "Personal portfolio showcasing my skills, projects, and experience in full-stack development and AI technologies.",
  keywords: "developer, portfolio, react, nextjs, typescript, ai, full-stack",
  authors: [{ name: "Yu (Ray) Wang" }],
  icons: {
    icon: '/pagewebicon.svg',
    shortcut: '/pagewebicon.svg',
    apple: '/pagewebicon.svg',
  },
  openGraph: {
    title: "Yu Wang - Full Stack Developer",
    description: "Personal portfolio showcasing my skills, projects, and experience",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
