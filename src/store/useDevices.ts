// src/store/useDevices.ts
import { create } from "zustand";
import { Device } from "@/lib/types";

type DevicesState = {
  selected: Device[];
  category: "mobile" | "tablet" | "desktop";
	scale: number;
  setCategory: (type: "mobile" | "tablet" | "desktop") => void;
  toggleDevice: (device: Device) => void;
  setSelected: (devices: Device[]) => void;
	setScale: (value: number) => void;
};

export const useDevices = create<DevicesState>((set) => ({
  selected: [],
  category: "mobile",
  scale: 0.5,
	setCategory: (type) =>
		set((state) => ({
			category: type,
			selected: state.selected.filter((d) => d.type === type), // оставляем только устройства новой категории
  })),
  toggleDevice: (device) =>
    set((state) => {
      const exists = state.selected.find((d) => d.id === device.id);
      return {
        selected: exists
          ? state.selected.filter((d) => d.id !== device.id)
          : [...state.selected, device],
      };
    }),
  setSelected: (devices) => set({ selected: devices }),
  setScale: (value) => set({ scale: value }),
}));