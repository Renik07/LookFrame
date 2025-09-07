// src/components/AndroidMobileFrame.tsx
"use client";
import { FrameProps } from "@/lib/types";
import { currentTime } from "@/lib/utils";
import { useDevices } from "@/store/useDevices";
import { useState } from "react";
import iconDots from "@/images/chrome-mobile/i-dots.png";
import iconHome from "@/images/chrome-mobile/i-home.png";
import iconLock from "@/images/chrome-mobile/i-lock.png";
import iconMic from "@/images/chrome-mobile/i-mic.png";
import iconTab from "@/images/chrome-mobile/i-tab.png";
import Image from "next/image";

export default function AndroidMobileFrame({ url, device, baseWidth, baseHeight, scale }: FrameProps) {
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
			{/* верхняя панель */}
			{panelMode !== "off" && (
				<div
					className="absolute flex flex-col top-0 left-0 w-full bg-gray-100"
					style={{ height: topPadding }}
				>
					{/* статус бар */}
					<div
						className="flex items-center justify-between px-3"
						style={{ height: statusBarHeight }}
					>
						<div className="font-sans tabular-nums text-[14px] text-black leading-none font-semibold tracking-tight">
							{currentTime()}
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="66.7" height="11.3" className=""><g opacity=".35" fill="none"><path d="M45 .033h16.7c1.5 0 2.7 1.2 2.7 2.7v6c0 1.5-1.2 2.7-2.7 2.7H45c-1.5 0-2.7-1.2-2.7-2.7v-6c0-1.5 1.2-2.7 2.7-2.7z"></path><path d="M45 .533h16.7c1.2 0 2.2 1 2.2 2.2v6c0 1.2-1 2.2-2.2 2.2H45c-1.2 0-2.2-1-2.2-2.2v-6c0-1.3 1-2.2 2.2-2.2z" stroke="#000" strokeMiterlimit="10"></path></g><path d="M65.3 3.7v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2" opacity=".4"></path><path d="M45.7 2H61c.7 0 1.3.6 1.3 1.3V8c0 .7-.6 1.3-1.3 1.3H45.7c-.7 0-1.3-.6-1.3-1.3V3.3c-.1-.7.5-1.3 1.3-1.3zM29.7 11c-.1 0-.2 0-.2-.1l-2-2c-.1-.1-.1-.3 0-.4 1.3-1.1 3.1-1.1 4.4 0 0 0 .1 0 .1.1s0 .2-.1.2l-2 2-.2.2z"></path><path d="M33.2 7.4c-.1 0-.2 0-.2-.1-1.9-1.7-4.7-1.7-6.6 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1-.1-.1-.3 0-.5 2.7-2.6 7-2.6 9.8 0 .1.1.1.1.1.2s0 .2-.1.2l-1.2 1.2c-.1.2-.1.2-.2.2z"></path><path d="M35.8 4.7c-.1 0-.2 0-.2-.1-3.3-3.2-8.6-3.2-11.9 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1 0-.1-.2 0-.4C26.3-1 33-1 37.2 3c.1.1.1.1.1.2s0 .2-.1.2L36 4.6c0 .1-.1.1-.2.1zM16 11h-1c-.6 0-1-.4-1-1V1.3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM11.3 11h-1c-.6 0-1-.4-1-1V3.7c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM6.7 11h-1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v4c0 .6-.5 1-1 1zM2 11H1c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1z"></path></svg>
					</div>
					{/* браузерная верхняя панель */}
					{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
						<div
							className="bg-white transition-all duration-300"
							style={{ height: topHeight }}
						>
							<div className="flex items-center justify-between h-[100%] px-3 gap-1">
								<Image src={iconHome} alt="" width={24} height={25} />
								<div className="bg-[#FAEFF1] p-2.5 pl-4 pr-4 rounded-4xl flex items-center gap-3">
									<Image src={iconLock} alt="" width={16} height={21} />
									<span className="text-black truncate max-w-36">leon-fumi.netlify.apdasdadasdp</span>
								</div>
								<Image src={iconMic} alt="" width={15} height={27} />
								<Image src={iconTab} alt="" width={23} height={23} />
								<Image src={iconDots} alt="" width={8} height={23} />
							</div>
						</div>
					)}
				</div>
			)}
			{/* контент */}
			<iframe
				className="relative z-0 transition-all duration-300"
				src={url || undefined}
				// src="http://localhost:3000/"
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
	)
}
