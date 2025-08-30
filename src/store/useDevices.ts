// src/store/useDevices.ts
import { create } from "zustand";
import { Device } from "@/lib/types";

type Category = "mobile" | "tablet" | "desktop";
type Orientation = "portrait" | "landscape";
type IOSChromeMode = "off" | "fixed" | "float";

type DevicesState = {
  selected: Device[];
  category: Category;
  scale: number;
	orientation: Orientation;
  setCategory: (c: Category) => void;
  toggleDevice: (d: Device) => void;
  setSelected: (devices: Device[]) => void;
  setScale: (s: number) => void;
	toggleOrientation: () => void;
};

export const useDevices = create<DevicesState>((set) => ({
  selected: [],
  category: "mobile",
  scale: 0.5, // по умолчанию 50%
	orientation: "portrait",
  // теперь при смене категории сбрасываем selected
  setCategory: (c) => set(() => ({
    category: c,
    selected: [],
  })),

  toggleDevice: (device) =>
    set((state) => {
      const isSelected = state.selected.some((d) => d.id === device.id);
      return {
        selected: isSelected
          ? state.selected.filter((d) => d.id !== device.id)
          : [...state.selected, device],
      };
    }),
  setSelected: (devices) => set({ selected: devices }),
  setScale: (s) => set({ scale: s }),
	toggleOrientation: () =>
    set((state) => ({
      orientation: state.orientation === "portrait" ? "landscape" : "portrait",
    })),
}));
