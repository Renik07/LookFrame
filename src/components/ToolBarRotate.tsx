// src/components/ToolBarRotate.tsx
"use client";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";
import { useDevices } from "@/store/useDevices";

export default function ToolBarRotate() {
	const { orientation, toggleOrientation } = useDevices();

	return (
		<div className="flex items-center justify-between mb-3">
			<Label htmlFor="rotate">Rotate</Label>
			<Switch
				id="rotate"
				className="cursor-pointer"
				checked={orientation === "landscape"}
				onCheckedChange={toggleOrientation}
			/>
		</div>
	)
}
