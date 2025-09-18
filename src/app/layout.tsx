// src/app/layout.tsx
import type { Metadata } from "next";
import { Caveat, Lato, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LocaleProvider from "@/components/LocaleProvider";
import { Toaster } from "@/components/ui/sonner";
import { getTranslations } from "next-intl/server";
import YandexMetrika from "@/components/YandexMetrika";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "responsive design",
      "website preview",
      "mobile friendly",
      "tablet view",
      "desktop view",
      "free tool",
      "look-frame",
      "online tester",
      "screen size simulator",
      "cross device",
      "web design tool",
      "responsive checker",
    ],
    alternates: {
      canonical: "https://look-frame.com",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://look-frame.com",
      siteName: "LookFrame",
      images: [
        {
          url: "https://look-frame.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "LookFrame - Preview your website on different devices",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://look-frame.com/og-image.png"],
    },
    icons: {
      icon: "https://look-frame.com/favicon/favicon.ico",
      apple: "https://look-frame.com/favicon/apple-touch-icon.png",
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
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.className}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${caveat.variable} ${lato.variable} ${robotoMono.variable} antialiased h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Toaster />
        <YandexMetrika />
      </body>
    </html>
  );
}
