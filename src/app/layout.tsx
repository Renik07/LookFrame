// src/app/layout.tsx
import type { Metadata } from "next";
import { Caveat, Lato, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LocaleProvider from "@/components/LocaleProvider";
import { Toaster } from "@/components/ui/sonner"
import { getTranslations } from "next-intl/server";
import Script from "next/script";

const inter = Inter({
	subsets: ["latin", "latin-ext", "cyrillic"],
	variable: "--font-inter",
	display: "swap",
});

const robotoMono = Roboto_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-roboto-mono' });

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
			"responsive checker"
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
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`h-full ${inter.className}`} suppressHydrationWarning>
			<body className={`${inter.variable} ${caveat.variable} ${lato.variable} ${robotoMono.variable} antialiased h-screen`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<LocaleProvider>
						{children}
					</LocaleProvider>
				</ThemeProvider>
				<Toaster />
				<Script
					id="yandex-metrika"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j=0; j<document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=104118941", "ym");

              ym(104118941, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  trackHash:true,
                  defer:true
              });
            `,
					}}
				/>
				<noscript>
					<div>
						<img
							src="https://mc.yandex.ru/watch/104118941"
							style={{ position: "absolute", left: "-9999px" }}
							alt=""
						/>
					</div>
				</noscript>
			</body>
		</html>
	);
}
