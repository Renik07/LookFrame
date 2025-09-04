// src/data/devices/androidMobile.ts
import { Device } from "@/lib/types";

export const androidMobile: Device[] = [
	// --- Samsung Galaxy S series ---
	{ id: "galaxy-s20-21", name: "Samsung Galaxy S20 / S21", type: "mobile", platform: "Android", width: 360, height: 800, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "galaxy-s22-23-24", name: "Samsung Galaxy S22 / S23 / S24", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- Samsung Galaxy Z (foldables) ---
	{ id: "galaxy-z-fold3", name: "Samsung Galaxy Z Fold 3", type: "mobile", platform: "Android", width: 376, height: 840, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "galaxy-z-fold4", name: "Samsung Galaxy Z Fold 4", type: "mobile", platform: "Android", width: 373, height: 845, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "galaxy-z-fold5", name: "Samsung Galaxy Z Fold 5", type: "mobile", platform: "Android", width: 373, height: 852, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "galaxy-z-flip3", name: "Samsung Galaxy Z Flip 3", type: "mobile", platform: "Android", width: 360, height: 800, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "galaxy-z-flip5", name: "Samsung Galaxy Z Flip 5", type: "mobile", platform: "Android", width: 396, height: 876, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- Google Pixel ---
	{ id: "pixel-5", name: "Google Pixel 5", type: "mobile", platform: "Android", width: 393, height: 851, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "pixel-6-8", name: "Google Pixel 6 / 6 Pro / 7 / 7 Pro / 8 / 8 Pro", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- Xiaomi / Redmi / POCO ---
	{ id: "xiaomi-mi-11", name: "Xiaomi Mi 11", type: "mobile", platform: "Android", width: 393, height: 873, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "xiaomi-12", name: "Xiaomi 12", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "xiaomi-13", name: "Xiaomi 13", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "redmi-note-10", name: "Redmi Note 10", type: "mobile", platform: "Android", width: 393, height: 873, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "redmi-note-11", name: "Redmi Note 11", type: "mobile", platform: "Android", width: 393, height: 873, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "redmi-note-12", name: "Redmi Note 12", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "poco-f4", name: "POCO F4", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- OnePlus ---
	{ id: "oneplus-8t-9-10-11", name: "OnePlus 8T / 9 / 10 Pro / 11", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- Huawei ---
	{ id: "huawei-p40-50/mate-40-50", name: "Huawei P40 / P50 / Mate 40 / Mate 50", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },

	// --- Oppo / Vivo ---
	{ id: "oppo-find-x3-x5", name: "Oppo Find X3 Pro / X5 Pro", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
	{ id: "vivo-x60-x80-x100", name: "Vivo X60 Pro / X80 Pro / X100 Pro", type: "mobile", platform: "Android", width: 412, height: 915, statusBar: 24, browserBar: { expanded: 56, collapsed: 0 } },
];