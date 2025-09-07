import Image from "next/image";
import arrowUp from "../images/arrow-up.svg";

export default function HintEnterUrl() {
	return (
		<div className="absolute top left-11 flex items-end gap-2 pointer-events-none">
			<Image src={arrowUp} alt="Arrow Up" width={75} height={75} className="self-start animate-pulseScale dark:invert" />
			<h4 className="text-foreground font-caveat font-semibold text-4xl pt-10">Введите<br></br> адрес сайта</h4>
		</div>
	)
}
