// src/components/ToolBarRotate.tsx
"use client";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";
import { useDevices } from "@/store/useDevices";
import { useTranslations } from "next-intl";

export default function ToolBarRotate() {
	const t = useTranslations('ToolBarRotate');
	const { orientation, toggleOrientation } = useDevices();

	return (
		<section className="flex items-center justify-between mb-3">
			<Label className="text-foreground" htmlFor="rotate">{t('rotate')}</Label>
			<Switch
				id="rotate"
				className="cursor-pointer"
				checked={orientation === "landscape"}
				onCheckedChange={toggleOrientation}
			/>
		</section>
	)
}
