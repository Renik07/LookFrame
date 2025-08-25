// src/components/ToolBarCheckbox.tsx
"use client";
import { useState, useEffect } from "react";
import { useDevices } from "@/store/useDevices";
import { devices } from "@/data/devices";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function ToolBarCheckbox() {
	const { selected, toggleDevice, setSelected, category } = useDevices();

	// локальный стейт для открытых аккордеонов
	const [openAccordions, setOpenAccordions] = useState<string[]>([]);

	// при смене категории закрываем все аккордеоны
	useEffect(() => {
		setOpenAccordions([]);
	}, [category]);

	// фильтруем устройства по категории (mobile, tablet, desktop)
	const filteredDevices = devices.filter((d) => d.type === category);

	// группируем устройства по платформам (iOS, Android и т.д.)
	const groupedByPlatform = filteredDevices.reduce((acc, device) => {
		if (!acc[device.platform]) acc[device.platform] = [];
		acc[device.platform].push(device);
		return acc;
	}, {} as Record<string, typeof devices>);

	const handleToggleAllInPlatform = (platform: string, devicesInPlatform: typeof devices) => {
		const allChecked = devicesInPlatform.every((d) =>
			selected.some((s) => s.id === d.id)
		);

		if (allChecked) {
			// снять все устройства этой платформы
			setSelected(selected.filter((s) => s.platform !== platform));
		} else {
			// выбрать все устройства этой платформы (без инверсии)
			const withoutThisPlatform = selected.filter((s) => s.platform !== platform);
			setSelected([...withoutThisPlatform, ...devicesInPlatform]);
		}
	};

	return (
		<aside className="w-64 bg-gray-100 p-4 space-y-4">
			<h3 className="font-bold mb-2">Выберите устройства</h3>

			<Accordion
				type="multiple"
				value={openAccordions}
				onValueChange={setOpenAccordions}
				className="w-full"
			>
				{Object.entries(groupedByPlatform).map(([platform, devicesInPlatform]) => {
					const allChecked = devicesInPlatform.every((d) =>
						selected.some((s) => s.id === d.id)
					);

					return (
						<AccordionItem key={platform} value={platform}>
							<AccordionTrigger>
								<div className="flex items-center gap-2">
									<span className="font-semibold">{platform}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pl-6 space-y-2">
								<div className="flex items-center gap-2 mb-2">
									<Checkbox
										checked={allChecked}
										onCheckedChange={() =>
											handleToggleAllInPlatform(platform, devicesInPlatform)
										}
									/>
									<Label className="font-medium">Выбрать все</Label>
								</div>

								{devicesInPlatform.map((d) => {
									const isChecked = selected.some((s) => s.id === d.id);
									return (
										<div key={d.id} className="flex items-center gap-2">
											<Checkbox
												id={d.id}
												checked={isChecked}
												onCheckedChange={() => toggleDevice(d)}
											/>
											<Label htmlFor={d.id}>{d.name}</Label>
										</div>
									);
								})}
							</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</aside>
	);
}
