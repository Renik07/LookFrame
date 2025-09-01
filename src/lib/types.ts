// src/lib/types.ts
// type BrowserUI = "ios-notch" | "ios-island" | "android";

type BrowserBar = {
  expanded: number; // Safari с навигацией
  collapsed: number; // Safari только адрес
};

export type Device = {
  id: string;
  name: string;
  width: number;
  height: number;
  type: "mobile" | "tablet" | "desktop";
  platform: "iOS" | "Android" | "Windows" | "macOS" | "iPadOS";
  statusBar?: number;      // высота верхней панели
  browserBar?: BrowserBar; // нижняя панель браузера
};