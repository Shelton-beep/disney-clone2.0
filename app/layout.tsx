import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disney Clone+ 2.0",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
