// src/components/ToolBarPanel.tsx
"use client";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useDevices } from "@/store/useDevices";
import { useTranslations } from "next-intl";

export default function ToolBarPanel() {
	const t = useTranslations('ToolBarPanel');
	const { panelMode, setPanelMode } = useDevices();

	return (
		<section className="w-full mb-3 flex items-center gap-3">
			<h3 className="mb-1 text-foreground">{t('panel')}</h3>
			<Select value={panelMode} onValueChange={(v: "off" | "fixed" | "float") => setPanelMode(v)}>
				<SelectTrigger className="w-full text-foreground">
					<SelectValue placeholder="Select option" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>{t('panel')}</SelectLabel>
						<SelectItem value="off">{t('off')}</SelectItem>
						<SelectItem value="fixed">{t('fixed')}</SelectItem>
						<SelectItem value="float">{t('float')}</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</section>
	)
}
