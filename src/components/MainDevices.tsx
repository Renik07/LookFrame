// src/components/MainDevices.tsx

import { useDevices } from "@/store/useDevices";

export default function MainDevices() {
	const { selected, scale, orientation } = useDevices();

	return (
		<div className="flex flex-wrap gap-4">
			{selected.map((d) => {
				const baseWidth = orientation === "portrait" ? d.width : d.height;
				const baseHeight = orientation === "portrait" ? d.height : d.width;

				const scaledWidth = baseWidth * scale;
				const scaledHeight = baseHeight * scale;

				return (
					<div
						key={d.id}
						className="border shadow overflow-hidden relative"
						style={{
							width: scaledWidth,
							height: scaledHeight,
						}}
					>
						<div className="bg-gray-200 px-2 py-1 text-sm font-medium w-full text-center">
							{d.name} ({baseWidth}x{baseHeight})
						</div>
						<div
							style={{
								width: baseWidth,
								height: baseHeight,
								transform: `scale(${scale})`,
								transformOrigin: "top left",
							}}
						>
							<iframe
								src="http://localhost:3000/"
								style={{
									width: baseWidth,
									height: baseHeight,
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
