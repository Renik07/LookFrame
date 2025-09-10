// src/store/useDevices.ts
import { create } from "zustand";
import { DevicesState } from "@/lib/types";

export const useDevices = create<DevicesState>((set) => ({
	selected: [],
	category: "mobile",
	scale: 0.7, // по умолчанию 50%
	orientation: "portrait",
	panelMode: "off",
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
	setPanelMode: (mode) => set({ panelMode: mode }),
}));
