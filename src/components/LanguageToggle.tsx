import { useLocale } from "./LocaleProvider";
import { Button } from "./ui/button";

export default function LanguageToggle() {
	const { locale, setLocale } = useLocale();
	return (
		<>
			{(["en", "es", "de", "ru"] as const).map(l => (
				<Button
					variant="secondary"
					key={l}
					onClick={() => setLocale(l)}
					className={`${locale === l ? "bg-black text-white" : "bg-white"}`}>
					{l.toUpperCase()}
				</Button>
			))}
		</>
	)
}
