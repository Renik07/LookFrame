"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import iconDesk from '@/images/i-desktop.png';
import iconTab from '@/images/i-tablet.png';
import iconMob from '@/images/i-mobile.png';

export default function ToolbarDevices() {
	const t = useTranslations('ToolbarDevices');
	return (
		<div>
			<h3 className="mb-1 text-black">{t('devices')}</h3>
			<div className="flex justify-around items-center border-1 rounded-sm p-1">
				<button className="cursor-pointer">
					<Image src={iconMob} alt="" width={20} height={32} />
				</button>
				<button className="cursor-pointer">
					<Image src={iconTab} alt="" width={30} height={40} />
				</button>
				<button className="cursor-pointer">
					<Image src={iconDesk} alt="" width={45} height={45} />
				</button>
			</div>
		</div>
	)
}
