// src/components/WindowsFrame.tsx
import { useDevices } from "@/store/useDevices";
import { useState } from "react";
import iconShare from "@/images/mac-desktop/i-share.png";
import iconTabs from "@/images/mac-desktop/i-tabs.png";
import iconBook from "@/images/ipad/i-book.png";
import Image from "next/image";
import { FrameProps } from "@/lib/types";
import { getCurrentTime } from "@/lib/utils";

export default function IpadFrame({ url, device, baseWidth, baseHeight, scale }: FrameProps) {
	const { panelMode } = useDevices();
	const [isHovered, setIsHovered] = useState(false);

	const statusBarHeight = panelMode === "off" ? 0 : device.statusBar ?? 0;

	// Вычисляем высоту верхней панели
	let topHeight = 0;
	let topPadding = 0;

	if (panelMode === "fixed") {
		topHeight = device.browserBar?.expanded ?? 0;
		topPadding = ((device.statusBar ?? 0) + (device.browserBar?.expanded ?? 0));

	} else if (panelMode === "float") {
		topHeight = isHovered
			? device.browserBar?.collapsed ?? 0
			: device.browserBar?.expanded ?? 0;
		topPadding = isHovered
			? device.statusBar ?? 0
			: ((device.statusBar ?? 0) + (device.browserBar?.expanded ?? 0));
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
					{/* статус бар */}
					<div
						className="bg-[#F4F4F4] flex items-center justify-between h-[100%] px-3"
						style={{ height: statusBarHeight }}
					>
						<div className="font-sans tabular-nums text-[14px] text-black leading-none font-semibold tracking-tight">
							{getCurrentTime()}
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="66.7" height="11.3" className=""><g opacity=".35" fill="none"><path d="M45 .033h16.7c1.5 0 2.7 1.2 2.7 2.7v6c0 1.5-1.2 2.7-2.7 2.7H45c-1.5 0-2.7-1.2-2.7-2.7v-6c0-1.5 1.2-2.7 2.7-2.7z"></path><path d="M45 .533h16.7c1.2 0 2.2 1 2.2 2.2v6c0 1.2-1 2.2-2.2 2.2H45c-1.2 0-2.2-1-2.2-2.2v-6c0-1.3 1-2.2 2.2-2.2z" stroke="#000" strokeMiterlimit="10"></path></g><path d="M65.3 3.7v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2" opacity=".4"></path><path d="M45.7 2H61c.7 0 1.3.6 1.3 1.3V8c0 .7-.6 1.3-1.3 1.3H45.7c-.7 0-1.3-.6-1.3-1.3V3.3c-.1-.7.5-1.3 1.3-1.3zM29.7 11c-.1 0-.2 0-.2-.1l-2-2c-.1-.1-.1-.3 0-.4 1.3-1.1 3.1-1.1 4.4 0 0 0 .1 0 .1.1s0 .2-.1.2l-2 2-.2.2z"></path><path d="M33.2 7.4c-.1 0-.2 0-.2-.1-1.9-1.7-4.7-1.7-6.6 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1-.1-.1-.3 0-.5 2.7-2.6 7-2.6 9.8 0 .1.1.1.1.1.2s0 .2-.1.2l-1.2 1.2c-.1.2-.1.2-.2.2z"></path><path d="M35.8 4.7c-.1 0-.2 0-.2-.1-3.3-3.2-8.6-3.2-11.9 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1 0-.1-.2 0-.4C26.3-1 33-1 37.2 3c.1.1.1.1.1.2s0 .2-.1.2L36 4.6c0 .1-.1.1-.2.1zM16 11h-1c-.6 0-1-.4-1-1V1.3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM11.3 11h-1c-.6 0-1-.4-1-1V3.7c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM6.7 11h-1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v4c0 .6-.5 1-1 1zM2 11H1c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1z"></path></svg>
					</div>
					{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
						<div
							className="transition-all duration-100"
							style={{ height: topHeight }}
						>
							<div
								className="w-full bg-[#F4F4F4] border-b border-[#D0D0D2]"
							>
								<div className="max-w-[1400px] mx-auto h-[56px] flex items-center px-3">
									{/* LEFT: back/forward*/}
									<div className="flex items-center gap-2 min-w-[180px]">
										{/* back */}
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											{/* Стрелка влево */}
											<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-600 scale-130">
												<path d="M10.8 2.2L9.4 0.8 3.2 8l6.2 7.2 1.4-1.4L6 8l4.8-5.8z" />
											</svg>
										</button>

										{/* forward */}
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											{/* Стрелка вправо */}
											<svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-600 rotate-180 scale-130">
												<path d="M10.8 2.2L9.4 0.8 3.2 8l6.2 7.2 1.4-1.4L6 8l4.8-5.8z" />
											</svg>
										</button>

										{/* optional small title/tab stub for iPad layout */}
										<div className="pl-2">
											<Image src={iconBook} alt="book" width={26} height={26} />
										</div>
									</div>

									{/* CENTER: address bar */}
									<div className="flex-1 flex justify-center px-2">
										<div
											role="search"
											className="w-[100%] max-w-[360px] h-[100%] flex items-center px-3 rounded bg-[#E4E4E6] border border-[#E0E0E2] shadow-sm"
										>
											{/* url */}
											<div className="flex-1 text-sm text-[#222] truncate select-all text-center ml-6">
												<span className="font-medium">apple.com</span>
											</div>

											{/* small actions */}
											<div className="flex items-center gap-3 ml-3">
												{/* reload */}
												<button className="p-1 rounded hover:bg-gray-100" aria-label="Reload">
													<svg viewBox="0 0 24 24" className="w-4 h-4 text-[#6b6b6b] fill-current scale-160">
														<path d="M12 6V4l4 4-4 4V8a4 4 0 104 4h2a6 6 0 11-6-6z" />
													</svg>
												</button>
												{/* reader / share could be placed here */}
											</div>
										</div>
									</div>

									{/* RIGHT: share / new tab / tab viewer */}
									<div className="min-w-[160px] flex items-center justify-end gap-2">
										{/* share */}
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<Image src={iconShare} alt="share" width={22} height={22} />
										</button>

										{/* new tab (plus) */}
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<svg viewBox="0 0 16 16" className="w-4 h-4 fill-gray-600">
												<path d="M8 1v6H2v2h6v6h2V9h6V7H10V1H8z" />
											</svg>
										</button>

										{/* tabs overview */}
										<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200">
											<Image src={iconTabs} alt="tabs" width={22} height={22} />
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}

			<iframe
				className="relative z-0 transition-all duration-100"
				src={url || undefined}
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