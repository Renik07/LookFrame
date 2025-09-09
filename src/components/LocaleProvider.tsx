// src/components/LocaleProvider.tsx
"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Messages } from 'next-intl';

import en from "../../messages/en.json";
import ru from "../../messages/ru.json";
import de from "../../messages/de.json";
import es from "../../messages/es.json";
import fr from "../../messages/fr.json";

const allMessages: Record<string, Messages> = { en, ru, de, es, fr };
type Locale = keyof typeof allMessages;

type Ctx = {
	locale: Locale;
	setLocale: (l: Locale) => void;
};

const LocaleCtx = createContext<Ctx | null>(null);

export function useLocale() {
	const ctx = useContext(LocaleCtx);
	if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
	return ctx;
}

export default function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>("en");

	// восстанавливаем из localStorage
	useEffect(() => {
		const saved = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null;
		if (saved && allMessages[saved]) setLocale(saved);
	}, []);

	// сохраняем и обновляем <html lang="">
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("locale", locale);
			document.documentElement.lang = locale;
		}
	}, [locale]);

	const messages = useMemo(() => allMessages[locale], [locale]);

	return (
		<LocaleCtx.Provider value={{ locale, setLocale }}>
			<NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Moscow">
				{children}
			</NextIntlClientProvider>
		</LocaleCtx.Provider>
	);
}
