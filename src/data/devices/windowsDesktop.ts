import { Device } from "@/lib/types";

export const windowsDesktop: Device[] = [
	// --- Стандартные десктопные мониторы ---
	{
		id: "desktop-720p",
		name: "HD 720p",
		type: "desktop",
		platform: "Windows",
		width: 1280,
		height: 720,
		browserBar: { expanded: 80, collapsed: 0 }
	},
	{
		id: "desktop-1080p",
		name: "Full HD 1080p",
		type: "desktop",
		platform: "Windows",
		width: 1920,
		height: 1080,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "desktop-1440p",
		name: "QHD 1440p",
		type: "desktop",
		platform: "Windows",
		width: 2560,
		height: 1440,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "desktop-4k",
		name: "4K UHD",
		type: "desktop",
		platform: "Windows",
		width: 3840,
		height: 2160,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "desktop-5k",
		name: "5K",
		type: "desktop",
		platform: "Windows",
		width: 5120,
		height: 2880,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "desktop-8k",
		name: "8K UHD",
		type: "desktop",
		platform: "Windows",
		width: 7680,
		height: 4320,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	// --- Популярные ноутбуки (Windows / Linux) ---
	{
		id: "laptop-13-3",
		name: "Laptop 13.3\"",
		type: "desktop",
		platform: "Windows",
		width: 1366,
		height: 768,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "laptop-14",
		name: "Laptop 14\" HD",
		type: "desktop",
		platform: "Windows",
		width: 1600,
		height: 900,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "laptop-15-6-fhd",
		name: "Laptop 15.6\" Full HD",
		type: "desktop",
		platform: "Windows",
		width: 1920,
		height: 1080,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "laptop-15-6-qhd",
		name: "Laptop 15.6\" QHD",
		type: "desktop",
		platform: "Windows",
		width: 2560,
		height: 1440,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "laptop-16-uhd",
		name: "Laptop 16\" 4K UHD",
		type: "desktop",
		platform: "Windows",
		width: 3840,
		height: 2160,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "gaming-laptop-17",
		name: "Gaming Laptop 17.3\" QHD",
		type: "desktop",
		platform: "Windows",
		width: 2560,
		height: 1440,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	// --- Популярные Ultrawide мониторы ---
	{
		id: "ultrawide-1080p",
		name: "UltraWide FHD",
		type: "desktop",
		platform: "Windows",
		width: 2560,
		height: 1080,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "ultrawide-1440p",
		name: "UltraWide QHD",
		type: "desktop",
		platform: "Windows",
		width: 3440,
		height: 1440,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "ultrawide-1600p",
		name: "UltraWide 1600p",
		type: "desktop",
		platform: "Windows",
		width: 3840,
		height: 1600,
		browserBar: { expanded: 71, collapsed: 0 }
	},
	{
		id: "super-ultrawide",
		name: "Super UltraWide",
		type: "desktop",
		platform: "Windows",
		width: 5120,
		height: 1440,
		browserBar: { expanded: 71, collapsed: 0 }
	},
];