// src/components/ToolBarCheckbox.tsx
"use client";
import { useDevices } from "@/store/useDevices";
import { devices } from "@/data/devices";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ToolBarCheckbox() {
	const { selected, toggleDevice, setSelected, category } = useDevices();

	const filteredDevices = devices.filter((d) => d.type === category);

	const allChecked = filteredDevices.every((d) =>
		selected.some((s) => s.id === d.id)
	);

	const handleCheckAll = () => {
		if (allChecked) {
			// убрать все устройства категории
			setSelected(selected.filter((s) => s.type !== category));
		} else {
			// добавить все устройства категории, которых ещё нет
			const newSelected = [
				...selected.filter((s) => s.type !== category),
				...filteredDevices.filter(
					(d) => !selected.some((s) => s.id === d.id)
				),
			];
			setSelected(newSelected);
		}
	};

	return (
		<aside className="w-64 bg-gray-100 p-4 space-y-4">
			<div className="flex items-center justify-between mb-2">
				<h3 className="font-bold">Выберите устройства</h3>
				<Checkbox checked={allChecked} onCheckedChange={handleCheckAll} />
			</div>
			<div className="space-y-2">
				{filteredDevices.map((d) => {
					const isChecked = selected.some((s) => s.id === d.id);
					return (
						<div key={d.id} className="flex items-center space-x-2">
							<Checkbox
								id={d.id}
								checked={isChecked}
								onCheckedChange={() => toggleDevice(d)}
							/>
							<Label htmlFor={d.id}>{d.name}</Label>
						</div>
					);
				})}
			</div>
		</aside>
	)
}
