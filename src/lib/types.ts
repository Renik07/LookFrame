// src/lib/types.ts

type Category = "mobile" | "tablet" | "desktop";
type Orientation = "portrait" | "landscape";
type PanelMode = "off" | "fixed" | "float";

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
	url: string;
	device: Device;
	baseWidth: number;
	baseHeight: number;
	scale: number;
};

export type DevicesState = {
	selected: Device[];
	category: Category;
	scale: number;
	orientation: Orientation;
	panelMode: PanelMode;
	setCategory: (c: Category) => void;
	toggleDevice: (d: Device) => void;
	setSelected: (devices: Device[]) => void;
	setScale: (s: number) => void;
	toggleOrientation: () => void;
	setPanelMode: (mode: PanelMode) => void;
};