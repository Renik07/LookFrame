// data/devices.ts
import { Device } from "@/lib/types";

export const devices: Device[] = [
  { id: "iphone13", name: "iPhone 13", width: 390, height: 844, type: "mobile" },
  { id: "iphoneSE", name: "iPhone SE", width: 375, height: 667, type: "mobile" },
  { id: "pixel5", name: "Pixel 5", width: 393, height: 851, type: "mobile" },
  { id: "ipadAir", name: "iPad Air", width: 820, height: 1180, type: "tablet" },
  { id: "surfacePro", name: "Surface Pro", width: 912, height: 1368, type: "tablet" },
  { id: "macbookPro", name: "MacBook Pro", width: 1440, height: 900, type: "desktop" },
  { id: "iMac", name: "iMac", width: 1920, height: 1080, type: "desktop" },
];
