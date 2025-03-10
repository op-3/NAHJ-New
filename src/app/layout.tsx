import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "NAHJ - Technology Solutions",
  description: "Your trusted technology partner",
  applicationName: "NAHJ",
  formatDetection: {
    telephone: false,
  },
  other: {
    // Add specific meta tag for Safari
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
