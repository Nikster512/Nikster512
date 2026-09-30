import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Component Lab — React Playground",
  description: "Explore interactive buttons, forms, controls, tables, and feedback in a React component playground.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
