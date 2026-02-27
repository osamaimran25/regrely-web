import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Multi-domain compliance automation`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "RegRely helps teams stay audit-ready with DSAR workflows, risk automation, and regulator-ready evidence reporting.",
  openGraph: {
    title: `${SITE_NAME} | Multi-domain compliance automation`,
    description:
      "Stay audit-ready with tenant-isolated architecture, role-based access control, and regulator-ready reporting.",
    type: "website",
    url: SITE_URL
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div className="site-bg" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
