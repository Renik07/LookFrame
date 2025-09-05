// src/lib/types.ts

type BrowserBar = {
	expanded: number; // браузер с навигацией
	collapsed: number; // Safari только адрес
};

export type Device = {
	id: string;
	name: string;
	width: number;
	height: number;
	type: "mobile" | "tablet" | "desktop";
	platform: "iOS" | "Android" | "AndroidTablet" | "Windows" | "macOS" | "iPadOS";
	statusBar?: number;      // высота верхней панели
	browserBar?: BrowserBar; // нижняя панель браузера
};

export type FrameProps = {
	device: Device;
	baseWidth: number;
	baseHeight: number;
	scale: number;
};