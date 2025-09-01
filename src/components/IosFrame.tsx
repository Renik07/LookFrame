// src/components/IosFrame.tsx
"use client";
import { Device } from "@/lib/types";
import { currentTime } from "@/lib/utils";
import { useDevices } from "@/store/useDevices";
import { useState } from "react";

type IosFrameProps = {
	device: Device;
	baseWidth: number;
	baseHeight: number;
	scale: number;
};

export default function IosFrame({ device, baseWidth, baseHeight, scale }: IosFrameProps) {
	const { panelMode } = useDevices();
	const [isHovered, setIsHovered] = useState(false);

	const statusBarHeight = panelMode === "off" ? 0 : device.statusBar ?? 0;

	// Вычисляем высоту нижней панели
	let bottomHeight = 0;
	if (panelMode === "fixed") {
		bottomHeight = device.browserBar?.expanded ?? 0;
	} else if (panelMode === "float") {
		bottomHeight = isHovered
			? device.browserBar?.collapsed ?? 0
			: device.browserBar?.expanded ?? 0;
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
					className="absolute flex flex-col justify-between top-0 left-0 w-full bg-gray-100 p-2"
					style={{ height: statusBarHeight }}
				>
					<div className="flex items-center justify-between h-[100%]">
						<div className="font-sans tabular-nums text-[14px] leading-none font-semibold tracking-tight">
							{currentTime()}
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="66.7" height="11.3" className=""><g opacity=".35" fill="none"><path d="M45 .033h16.7c1.5 0 2.7 1.2 2.7 2.7v6c0 1.5-1.2 2.7-2.7 2.7H45c-1.5 0-2.7-1.2-2.7-2.7v-6c0-1.5 1.2-2.7 2.7-2.7z"></path><path d="M45 .533h16.7c1.2 0 2.2 1 2.2 2.2v6c0 1.2-1 2.2-2.2 2.2H45c-1.2 0-2.2-1-2.2-2.2v-6c0-1.3 1-2.2 2.2-2.2z" stroke="#000" strokeMiterlimit="10"></path></g><path d="M65.3 3.7v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2" opacity=".4"></path><path d="M45.7 2H61c.7 0 1.3.6 1.3 1.3V8c0 .7-.6 1.3-1.3 1.3H45.7c-.7 0-1.3-.6-1.3-1.3V3.3c-.1-.7.5-1.3 1.3-1.3zM29.7 11c-.1 0-.2 0-.2-.1l-2-2c-.1-.1-.1-.3 0-.4 1.3-1.1 3.1-1.1 4.4 0 0 0 .1 0 .1.1s0 .2-.1.2l-2 2-.2.2z"></path><path d="M33.2 7.4c-.1 0-.2 0-.2-.1-1.9-1.7-4.7-1.7-6.6 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1-.1-.1-.3 0-.5 2.7-2.6 7-2.6 9.8 0 .1.1.1.1.1.2s0 .2-.1.2l-1.2 1.2c-.1.2-.1.2-.2.2z"></path><path d="M35.8 4.7c-.1 0-.2 0-.2-.1-3.3-3.2-8.6-3.2-11.9 0-.1.1-.1.1-.2.1s-.2 0-.2-.1l-1.2-1.2c-.1 0-.1-.2 0-.4C26.3-1 33-1 37.2 3c.1.1.1.1.1.2s0 .2-.1.2L36 4.6c0 .1-.1.1-.2.1zM16 11h-1c-.6 0-1-.4-1-1V1.3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM11.3 11h-1c-.6 0-1-.4-1-1V3.7c0-.6.4-1 1-1h1c.6 0 1 .4 1 1V10c0 .6-.4 1-1 1zM6.7 11h-1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v4c0 .6-.5 1-1 1zM2 11H1c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1z"></path></svg>
					</div>
				</div>
			)}
			{/* контент */}
			<iframe
				// className={`relative z-0 pt-[30px] ${isFloat ? "pb-[35px]" : "pb-[110px]"}`}
				className="relative z-0"
				src="https://leon-fumi.netlify.app/"
				// src="http://localhost:3000/"
				style={{
					width: "100%",
					height: "100%",
					paddingTop: statusBarHeight,
					paddingBottom: bottomHeight,
					border: "0",
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
			{/* нижняя панель */}
			{panelMode !== "off" && (

				<div
					// className={`absolute bottom-0 left-0 w-full h-auto bg-gray-100  ${isFloat ? "p-0 transition-all duration-300" : "p-2 pl-3 pr-3"}`}
					className={`absolute bottom-0 left-0 w-full h-auto bg-gray-100 transition-all duration-300 ${(panelMode === "float" && isHovered) ? "p-0" : "p-2 pl-5 pr-5"}`}
					style={{
						height: bottomHeight,
					}}
				>
					{/* address panel */}
					<div className={`bg-[#8e8e931a] flex items-center justify-between ${(panelMode === "float" && isHovered) ? "h-[100%] p-0 rounded-none" : "h-[45%] p-2 rounded-xl"}`}>
						{/* <div className={`bg-[#8e8e931a] flex items-center justify-between p-2 ${isFloat ? "h-[35px] bg-white justify-center rounded-none transition-all duration-300" : "h-[45px] rounded-xl"}`}> */}
						{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
							<svg width="19" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.39 13.167c.449 0 .677-.193.853-.686l1.028-2.838h4.86l1.02 2.838c.176.493.405.686.853.686.492 0 .817-.29.817-.747 0-.158-.035-.299-.096-.492L14.884 1.68c-.211-.572-.59-.844-1.187-.844-.571 0-.958.272-1.16.835l-3.84 10.274c-.071.194-.097.334-.097.484 0 .457.298.738.79.738zm2.303-4.878l1.978-5.537h.053l1.968 5.537h-3.999zM.883 13.167c.369 0 .615-.185.764-.66l.633-1.827h3.05l.633 1.828c.158.483.404.659.773.659.449 0 .765-.29.765-.712 0-.158-.035-.316-.114-.536L4.926 5.37c-.194-.527-.554-.852-1.134-.852-.554 0-.905.325-1.099.852L.223 11.92c-.078.22-.105.387-.105.536 0 .422.308.712.765.712zm1.784-3.691l1.081-3.252h.106l1.09 3.252H2.666z" fill="#000"></path>
							</svg>
						)}
						<div className="text-sm transition-all duration-300 ml-auto mr-auto">kg-portal.ru</div>
						{/* <span className={`${isFloat ? "text-xs transition-all duration-300" : "text-sm"}`}>kg-portal.ru</span> */}
						{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
							<svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.578 8.415c.22 0 .387-.07.519-.202l3.419-3.445a.726.726 0 00.228-.537.76.76 0 00-.228-.536L8.096.224a.676.676 0 00-.518-.22c-.395 0-.703.325-.703.738a.8.8 0 00.193.51l2.145 2.092a7.817 7.817 0 00-1.354-.115 7.337 7.337 0 00-7.374 7.366 7.367 7.367 0 007.383 7.391 7.365 7.365 0 007.374-7.391.72.72 0 00-.747-.747c-.422 0-.703.316-.703.747a5.914 5.914 0 01-5.924 5.941 5.915 5.915 0 01-5.932-5.941 5.895 5.895 0 015.923-5.933c.607 0 1.152.044 1.635.14l-2.417 2.4a.707.707 0 00-.202.492c0 .413.308.721.703.721z" fill="#000"></path>
							</svg>
						)}
					</div>
					{/* bottom panel */}
					{(panelMode === "fixed" || (panelMode === "float" && !isHovered)) && (
						<div className="flex items-center justify-between h-[55%]">
							{/* <div className={`flex items-center justify-between h-[50px] ${isFloat ? "transform translate-y-[100%] transition-all duration-300 hidden" : ""}`}> */}
							{/* arrow back */}
							{<svg width="12" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M9.415 18.22a.92.92 0 00.666.277c.533 0 .933-.4.933-.933a.974.974 0 00-.266-.666L3.283 9.597l7.465-7.301a.994.994 0 00.266-.667.92.92 0 00-.933-.943.92.92 0 00-.666.277L1.293 8.91a.9.9 0 00-.307.687c0 .256.102.492.297.687l8.132 7.936z" fill="#2E7CF6"></path></svg>}
							{/* arrow next */}
							{<svg width="12" height="19" xmlns="http://www.w3.org/2000/svg" className="rotate-180"><path d="M10.1 18.5c-.3 0-.5-.1-.7-.3l-8.1-7.9c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7L9.4 1c.2-.2.4-.3.7-.3.5 0 .9.4.9.9 0 .2-.1.5-.3.7L3.3 9.6l7.5 7.3c.2.2.3.4.3.7-.1.5-.5.9-1 .9z" fill="#cecece"></path></svg>}
							{/* share */}
							{<svg width="20" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M10 15.386c.44 0 .81-.37.81-.8V4.056l-.062-1.539.688.728 1.558 1.661a.749.749 0 00.554.246c.42 0 .748-.307.748-.728 0-.215-.092-.38-.246-.533L10.584.548C10.38.343 10.206.271 10 .271c-.215 0-.39.072-.595.277L5.94 3.891c-.153.154-.246.318-.246.533 0 .42.308.728.739.728a.77.77 0 00.564-.246l1.558-1.66.687-.729-.061 1.538v10.53c0 .432.38.8.82.8zm-5.886 8.029h11.762c2.143 0 3.22-1.067 3.22-3.18V10.003c0-2.112-1.077-3.178-3.22-3.178h-2.861v1.65h2.83c1.015 0 1.6.554 1.6 1.62v10.05c0 1.066-.585 1.62-1.6 1.62H4.135c-1.026 0-1.59-.554-1.59-1.62v-10.05c0-1.066.564-1.62 1.59-1.62h2.84v-1.65h-2.86c-2.144 0-3.22 1.066-3.22 3.178v10.234c0 2.112 1.076 3.179 3.22 3.179z" fill="#2E7CF6"></path></svg>}
							{/* history */}
							{<svg width="22" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M10.99 2.378C10.21 1.394 8.272.522 6.109.522 3.269.522.972 1.988.408 3.362v14.325c0 .78.502 1.077 1.066 1.077.441 0 .708-.134.984-.349.585-.502 1.764-1.18 3.65-1.18 1.898 0 3.22.657 3.733 1.119.267.215.585.41 1.149.41.564 0 .882-.216 1.148-.41.554-.431 1.846-1.118 3.733-1.118 1.897 0 3.076.687 3.66 1.179.277.215.534.349.974.349.564 0 1.077-.298 1.077-1.077V3.362c-.564-1.374-2.871-2.84-5.711-2.84-2.154 0-4.092.872-4.881 1.856zM2.059 3.854C2.294 3.22 3.78 2.07 6.109 2.07c2.338 0 3.855 1.159 4.06 1.784v12.972c-.974-.728-2.46-1.139-4.06-1.139-1.59 0-3.076.41-4.05 1.18V3.854zm17.872 0v13.013c-.984-.77-2.46-1.18-4.06-1.18-1.6 0-3.077.41-4.05 1.139V3.854c.204-.625 1.722-1.784 4.05-1.784 2.338 0 3.824 1.149 4.06 1.784z" fill="#2E7CF6"></path></svg>}
							{/* tabs */}
							{<svg width="24" height="23" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M3.96 17.626h1.898v1.764c0 2.112 1.077 3.178 3.22 3.178h10.95c2.144 0 3.22-1.066 3.22-3.178V8.49c0-2.102-1.076-3.169-3.22-3.169h-1.896v-1.66c0-2.113-1.087-3.18-3.22-3.18H3.961C1.808.481.74 1.548.74 3.661v10.796c0 2.113 1.067 3.169 3.22 3.169zm.021-1.65c-1.025 0-1.589-.544-1.589-1.61V3.751c0-1.066.564-1.62 1.59-1.62h10.9c1.014 0 1.599.554 1.599 1.62v1.57H9.078c-2.143 0-3.22 1.055-3.22 3.168v7.485H3.98zm5.127 4.941c-1.025 0-1.6-.553-1.6-1.62V8.582c0-1.066.575-1.61 1.6-1.61h10.9c1.015 0 1.59.544 1.59 1.61v10.726c0 1.056-.575 1.61-1.59 1.61h-10.9z" fill="#2E7CF6"></path></svg>}
						</div>

					)}
				</div>

			)}
		</div>
	)
}
