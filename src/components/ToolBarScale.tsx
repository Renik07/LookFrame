"use client";

import { useDevices } from "@/store/useDevices";
import { Slider } from "@/components/ui/slider";

export default function ToolBarScale() {
	const { scale, setScale } = useDevices();

	return (
		<div className="mb-2">
			<h3 className="mb-1 text-black">Zoom</h3>
			<div className="flex items-center justify-between space-x-4">
				<Slider
					value={[scale * 100]}
					min={30}
					max={100}
					step={5}
					onValueChange={(val) => setScale(val[0] / 100)}
					className="w-50"
				/>
				<span className="text-sm text-gray-700 w-10 text-right">
					{Math.round(scale * 100)}%
				</span>
			</div>
		</div>
	);
}
