"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import iconDesk from '@/images/i-desktop.svg';
import iconTab from '@/images/i-tablet.svg';
import iconMob from '@/images/i-mobile.svg';
import { useDevices } from '@/store/useDevices';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ToolbarDevices() {
	const t = useTranslations('ToolbarDevices');

	const { category, setCategory } = useDevices();

	return (
		<section className='mb-3'>
			<h3 className="text-foreground mb-1">{t('devices')}</h3>
			<div className="flex justify-around border-1 rounded-sm p-1 border">
				<div className={`flex justify-center grow`}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button className={`flex justify-center grow rounded cursor-pointer ${category === "mobile" ? "bg-card-foreground" : "bg-none"}`} onClick={() => setCategory("mobile")}>
								<Image className="dark:invert" src={iconMob} alt="mobile" width={30} height={35} />
							</button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Mobile</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<div className={`flex justify-center grow`}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button className={`flex justify-center grow cursor-pointer rounded ${category === "tablet" ? "bg-card-foreground" : ""}`} onClick={() => setCategory("tablet")}>
								<Image className="dark:invert" src={iconTab} alt="tablet" width={33} height={37} />
							</button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Tablet</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<div className={`flex justify-center grow`}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button className={`flex justify-center grow cursor-pointer rounded ${category === "desktop" ? "bg-card-foreground" : ""}`} onClick={() => setCategory("desktop")}>
								<Image className="dark:invert" src={iconDesk} alt="desktop" width={49} height={42} />
							</button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Desktop</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</section>
	)
}