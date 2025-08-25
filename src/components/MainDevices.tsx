// src/components/MainDevices.tsx

import { useDevices } from "@/store/useDevices";

export default function MainDevices() {
	const { selected, scale } = useDevices();

	return (
		<div className="flex flex-wrap gap-4">
			{selected.map((d) => {
				const scaledWidth = d.width * scale;
				const scaledHeight = d.height * scale;

				return (
					<div
						key={d.id}
						className="border rounded-lg shadow overflow-hidden relative"
						style={{
							width: scaledWidth,
							height: scaledHeight,
						}}
					>
						<div className="bg-gray-200 px-2 py-1 text-sm font-medium absolute top-0 left-0 z-10 w-full text-center">
							{d.name} ({d.width}x{d.height})
						</div>
						<div
							style={{
								width: d.width,
								height: d.height,
								transform: `scale(${scale})`,
								transformOrigin: "top left",
							}}
						>
							<iframe
								src="http://localhost:3000/"
								style={{
									width: d.width,
									height: d.height,
									border: "0",
								}}
							/>
						</div>
					</div>
				);
			})}
		</div>
	)
}
