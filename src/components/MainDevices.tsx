// src/components/MainDevices.tsx

import { useDevices } from "@/store/useDevices";
import IosFrame from "./frames/IosFrame";
import AndroidMobileFrame from "./frames/AndroidMobileFrame";
import WindowsFrame from "./frames/WindowsFrame";
import MacFrame from "./frames/MacFrame";
import IpadFrame from "./frames/IpadFrame";
import AndroidTabletFrame from "./frames/AndroidTabletFrame";

export default function MainDevices({ url }: { url: string }) {
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
						className="mb-8"
						key={d.id}
						style={{
							width: scaledWidth,
							height: scaledHeight,
						}}
					>
						<div className="bg-card-foreground px-2 py-1 text-sm font-medium w-full text-center truncate">
							{d.name} ({baseWidth}x{baseHeight})
						</div>
						<div
							className="shadow overflow-hidden relative"
							style={{
								height: "100%",
							}}
						>
							{d.platform === "iOS" && <IosFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
							{d.platform === "Android" && <AndroidMobileFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
							{d.platform === "iPadOS" && <IpadFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
							{d.platform === "macOS" && <MacFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
							{d.platform === "Windows" && <WindowsFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
							{d.platform === "AndroidTablet" && <AndroidTabletFrame url={url} device={d} baseWidth={baseWidth} baseHeight={baseHeight} scale={scale} />}
						</div>
					</div>
				);
			})}
		</div>
	)
}