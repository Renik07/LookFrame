import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { useLocale } from "./LocaleProvider";
import { Button } from "./ui/button";

export default function LanguageToggle() {
	const { locale, setLocale } = useLocale();
	return (
		<div className="ml-auto">
			<Select value={locale} onValueChange={(v: "en" | "es" | "de" | "fr" | "ru") => setLocale(v)}>
				<SelectTrigger className="text-foreground cursor-pointer">
					<SelectValue placeholder="Select language" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Language</SelectLabel>
						<SelectItem value="en">EN</SelectItem>
						<SelectItem value="es">ES</SelectItem>
						<SelectItem value="de">DE</SelectItem>
						<SelectItem value="fr">FR</SelectItem>
						<SelectItem value="ru">RU</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
