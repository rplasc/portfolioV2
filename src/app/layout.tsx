import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raul Plascencia — Full-stack Software Engineer",
  description:
    "Full-stack software engineer at Gaine Technology. Previously at Handshake AI and Sweep.",
  openGraph: {
    title: "Raul Plascencia — Full-stack Software Engineer",
    description:
      "Full-stack software engineer at Gaine Technology. Previously at Handshake AI and Sweep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
