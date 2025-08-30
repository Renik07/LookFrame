type BrowserUI = "ios-notch" | "ios-island" | "android";

export type Device = {
  id: string;
  name: string;
  width: number;
  height: number;
  type: "mobile" | "tablet" | "desktop";
  platform: "iOS" | "Android" | "Windows" | "macOS" | "iPadOS";
	browserUI?: BrowserUI;
};