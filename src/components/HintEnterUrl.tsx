import Image from "next/image";
import arrowUp from "../images/arrow-up.svg";
import { useTranslations } from "next-intl";

export default function HintEnterUrl() {
	const t = useTranslations('HintEnterUrl');
	return (
		<div className="absolute top left-11 flex items-end gap-2 pointer-events-none">
			<Image src={arrowUp} alt="Arrow Up" width={75} height={75} className="self-start animate-pulseScale dark:invert" />
			<h4 className="text-foreground font-caveat font-semibold text-4xl pt-10">{t('text-1')}<br></br>{t('text-2')}</h4>
		</div>
	)
}
