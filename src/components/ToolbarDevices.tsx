"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import iconDesk from '@/images/i-desktop.svg';
import iconTab from '@/images/i-tablet.svg';
import iconMob from '@/images/i-mobile.svg';
import { useDevices } from '@/store/useDevices';

export default function ToolbarDevices() {
	const t = useTranslations('ToolbarDevices');

	const { category, setCategory } = useDevices();

	return (
		<div>
			<h3 className="mb-1">{t('devices')}</h3>
			<div className="flex justify-around border-1 rounded-sm p-1">
				<button className={`cursor-pointer p-0.5 rounded ${category === "mobile" ? "bg-gray-200" : ""}`} onClick={() => setCategory("mobile")}>
					<Image src={iconMob} alt="mobile" width={30} height={35} />
				</button>
				<button className={`cursor-pointer p-1 rounded ${category === "tablet" ? "bg-gray-200" : ""}`} onClick={() => setCategory("tablet")}>
					<Image src={iconTab} alt="tablet" width={33} height={37} />
				</button>
				<button className={`cursor-pointer p-1 rounded ${category === "desktop" ? "bg-gray-200" : ""}`} onClick={() => setCategory("desktop")}>
					<Image src={iconDesk} alt="desktop" width={49} height={42} />
				</button>
			</div>
		</div>
	)
}
