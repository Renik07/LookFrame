// data/devices.ts
import { Device } from "@/lib/types";
import { iphone } from "./devices/iphone";
import { ipad } from "./devices/ipad";
import { macOS } from "./devices/macDesktop";
import { windowsDesktop } from "./devices/windowsDesktop";
import { tabletsAndroid } from "./devices/androidTablet";
import { androidMobile } from "./devices/androidMobile";

export const devices: Device[] = [
	...iphone,
	...ipad,
	...macOS,
	...windowsDesktop,
	...tabletsAndroid,
	...androidMobile
];