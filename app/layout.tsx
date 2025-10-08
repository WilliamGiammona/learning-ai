// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/NavBar";

export const metadata: Metadata = {
  title: "Learning AI",
  description: "Learning AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
