export type Device = {
  id: string;
  name: string;
  width: number;
  height: number;
	type: "mobile" | "tablet" | "desktop";
};