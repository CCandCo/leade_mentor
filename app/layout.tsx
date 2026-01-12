import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const shibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-shibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeaDe - Mentor Dashboard",
  description: "A dashboard for mentors to manage their mentees and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${martianMono.variable} ${shibstedGrotesk.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
