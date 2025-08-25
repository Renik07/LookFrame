export type Device = {
  id: string;
  name: string;
  width: number;
  height: number;
  type: "mobile" | "tablet" | "desktop";
  platform: "iOS" | "Android" | "Windows" | "Mac";
};