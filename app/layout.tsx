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
  title: "Sopiriye Jamabo | Full-Stack Developer & Software Engineer",
  description: "Full-stack developer based in Nigeria, focused on creating memorable digital experiences and solving problems by building impactful software. Working with startups & organizations in West Africa & USA.",
  keywords: [
    "Sopiriye Jamabo",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Nigeria Developer",
    "West Africa Developer",
    "SAVVILY",
    "DAP",
    "Wishly",
    "Portfolio",
  ],
  authors: [{ name: "Sopiriye Jamabo", url: "https://sopiriye.xyz" }],
  creator: "Sopiriye Jamabo",
  publisher: "Sopiriye Jamabo",
  metadataBase: new URL("https://sopiriye.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sopiriye.xyz",
    title: "Sopiriye Jamabo | Full-Stack Developer & Software Engineer",
    description: "Full-stack developer based in Nigeria, focused on creating memorable digital experiences and solving problems by building impactful software.",
    siteName: "Sopiriye Jamabo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sopiriye Jamabo - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sopiriye Jamabo | Full-Stack Developer & Software Engineer",
    description: "Full-stack developer based in Nigeria, focused on creating memorable digital experiences and solving problems by building impactful software.",
    images: ["/og-image.png"],
    creator: "@sopiriye",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
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
