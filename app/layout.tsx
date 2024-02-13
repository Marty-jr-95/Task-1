import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Marty Muhanga | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-primary">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
