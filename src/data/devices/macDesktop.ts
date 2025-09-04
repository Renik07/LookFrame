import { Device } from "@/lib/types";

export const macOS: Device[] = [
	// iMac
	{
		id: "imac-21-5",
		name: "iMac 21.5\" (Full HD)",
		type: "desktop",
		platform: "macOS",
		width: 1920,
		height: 1080,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "imac-21-5-4k",
		name: "iMac 21.5\" (4K Retina)",
		type: "desktop",
		platform: "macOS",
		width: 4096,
		height: 2304,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "imac-27-5k",
		name: "iMac 27\" (5K Retina)",
		type: "desktop",
		platform: "macOS",
		width: 5120,
		height: 2880,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "imac-24-m1",
		name: "iMac 24\" (M1, 4.5K Retina)",
		type: "desktop",
		platform: "macOS",
		width: 4480,
		height: 2520,
		browserBar: { expanded: 82, collapsed: 0 }
	},

	// MacBook Air
	{
		id: "macbook-air-13",
		name: "MacBook Air 13\" (Retina)",
		type: "desktop",
		platform: "macOS",
		width: 2560,
		height: 1600,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "macbook-air-15",
		name: "MacBook Air 15\" (M2)",
		type: "desktop",
		platform: "macOS",
		width: 2880,
		height: 1864,
		browserBar: { expanded: 82, collapsed: 0 }
	},

	// MacBook Pro
	{
		id: "macbook-pro-13",
		name: "MacBook Pro 13\" (Retina)",
		type: "desktop",
		platform: "macOS",
		width: 2560,
		height: 1600,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "macbook-pro-14",
		name: "MacBook Pro 14\" (M1/M2/M3 Pro/Max)",
		type: "desktop",
		platform: "macOS",
		width: 3024,
		height: 1964,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "macbook-pro-16",
		name: "MacBook Pro 16\" (M1/M2/M3 Pro/Max)",
		type: "desktop",
		platform: "macOS",
		width: 3456,
		height: 2234,
		browserBar: { expanded: 82, collapsed: 0 }
	},

	// External Apple Displays
	{
		id: "studio-display-5k",
		name: "Apple Studio Display 27\" (5K Retina)",
		type: "desktop",
		platform: "macOS",
		width: 5120,
		height: 2880,
		browserBar: { expanded: 82, collapsed: 0 }
	},
	{
		id: "pro-display-xdr-6k",
		name: "Pro Display XDR 32\" (6K Retina)",
		type: "desktop",
		platform: "macOS",
		width: 6016,
		height: 3384,
		browserBar: { expanded: 82, collapsed: 0 }
	},
];