import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getCurrentTime = () => {
	const now = new Date();
	return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export const getCurrentYear = () => new Date().getFullYear()