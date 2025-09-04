// src/components/WindowsFrame.tsx
import { useDevices } from "@/store/useDevices";
import { useState } from "react";
import iconShare from "@/images/mac-desktop/i-share.png";
import iconTabs from "@/images/mac-desktop/i-tabs.png";
import iconApple from "@/images/mac-desktop/i-apple.png";
import Image from "next/image";
import { Device } from "@/lib/types";

type MacFrameProps = {
	device: Device;
	baseWidth: number;
	baseHeight: number;
	scale: number;
};

export default function MacFrame({ device, baseWidth, baseHeight, scale }: MacFrameProps) {
	const { panelMode } = useDevices();
	const [isHovered, setIsHovered] = useState(false);

	// Вычисляем высоту верхней панели
	let topHeight = 0;
	let topPadding = 0;

	if (panelMode === "fixed") {
		topHeight = device.browserBar?.expanded ?? 0;
		topPadding = device.browserBar?.expanded ?? 0;
	} else if (panelMode === "float") {
		topHeight = isHovered ? 0 : device.browserBar?.expanded ?? 0;
		topPadding = isHovered ? 0 : device.browserBar?.expanded ?? 0;
	}

	return (
		<div
			className="relative"
			style={{
				width: baseWidth,
				height: baseHeight,
				transform: `scale(${scale})`,
				transformOrigin: "top left",
			}}
		>
			{panelMode !== "off" && (
				<div
					className="absolute top-0 left-0 w-full flex flex-col border-b font-['Segoe_UI','Roboto',sans-serif]"
					style={{ height: topPadding }}
				>
					{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
						<div
							className="transition-all duration-100"
							style={{ height: topHeight }}
						>
							<div className="w-full h-[82px] bg-[#F1F1EF] border-b border-gray-300 flex flex-col font-['SF Pro','Segoe UI','Roboto',sans-serif]">

								{/* Верхняя строка */}
								<div className="flex items-center px-3 h-[47px]">
									{/* Левая часть — кнопки управления окном */}
									<div className="flex items-center space-x-2 mr-4">
										<div className="w-3 h-3 bg-red-500 rounded-full"></div>
										<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
										<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									</div>

									{/* Название меню */}
									<div className="text-sm font-medium text-gray-700 mr-4">Stuff ▾</div>

									{/* Стрелки */}
									<div className="flex items-center space-x-1">
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											{/* Стрелка влево */}
											<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-600">
												<path d="M10.8 2.2L9.4 0.8 3.2 8l6.2 7.2 1.4-1.4L6 8l4.8-5.8z" />
											</svg>
										</button>

										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											{/* Стрелка вправо */}
											<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-600 rotate-180">
												<path d="M10.8 2.2L9.4 0.8 3.2 8l6.2 7.2 1.4-1.4L6 8l4.8-5.8z" />
											</svg>
										</button>
									</div>

									{/* Адресная строка */}
									<div className="flex items-center justify-center flex-grow max-w-2xl w-full h-[28px] rounded-lg bg-[#F1F1EF] shadow-inner border border-gray-300 px-3 ml-auto mr-auto">
										<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-500 mr-2">
											<path d="M12.6,5.3h-0.8V3.8C11.8,1.7,10.1,0,8,0S4.2,1.7,4.2,3.8v1.5H3.4C2.6,5.3,1.9,6,1.9,6.9v7.6c0,0.8,0.7,1.5,1.5,1.5h9.1c0.8,0,1.5-0.7,1.5-1.5V6.9C14.1,6,13.4,5.3,12.6,5.3z M10.4,5.3H5.6V3.8c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4V5.3z" />
										</svg>
										<span className="text-sm text-gray-700 truncate">https://www.apple.com/</span>
									</div>

									{/* Правая часть */}
									<div className="flex items-center space-x-2 mr-0">
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<Image src={iconShare} alt="share" width={22} height={22} />
										</button>
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<svg viewBox="0 0 16 16" className="w-4 h-4 fill-gray-600">
												<path d="M8 1v6H2v2h6v6h2V9h6V7H10V1H8z" />
											</svg>
										</button>
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<Image src={iconTabs} alt="tabs" width={22} height={22} />
										</button>
									</div>
								</div>

								{/* Нижняя строка — вкладки */}
								<div className="flex items-center h-[35px] space-x-2">
									{/* Активная вкладка */}
									<div className="flex items-center justify-center gap-1.5 px-4 py-1 h-[35px] w-[450px] bg-[#E2E2E0] border shadow-inner border-gray-300 shadow-sm text-center">
										<Image src={iconApple} alt="apple" width={14} height={14} />
										<span className="text-sm text-gray-800">Apple</span>
									</div>

									{/* Кнопка добавить вкладку */}
									<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
										<svg viewBox="0 0 16 16" className="w-4 h-4 fill-gray-600">
											<path d="M8 1v6H2v2h6v6h2V9h6V7H10V1H8z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			)}

			<iframe
				className="relative z-0 transition-all duration-100"
				src="https://leon-fumi.netlify.app/"
				style={{
					width: "100%",
					height: "100%",
					paddingTop: topPadding,
					paddingBottom: 0,
					border: "0",
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
		</div>
	);
}