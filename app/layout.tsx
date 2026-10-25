import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "A friendly ghost-themed 404 page."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
