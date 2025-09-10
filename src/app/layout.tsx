// src/app/layout.tsx
import type { Metadata } from "next";
import { Caveat, Lato, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LocaleProvider from "@/components/LocaleProvider";
import { Toaster } from "@/components/ui/sonner"
import { getTranslations } from "next-intl/server";

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
	};
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
			</body>
		</html>
	);
}
