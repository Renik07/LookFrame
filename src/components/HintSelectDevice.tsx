import Image from 'next/image'
import arrowLeft from "../images/arrow-left.svg";

export default function HintSelectDevice() {
	return (
		<div className="absolute top left-11 flex items-end gap-2 pointer-events-none">
			<Image src={arrowLeft} alt="Arrow Left" width={75} height={75} className="animate-pulseScale dark:invert" />
			<h4 className="text-foreground font-caveat font-semibold text-4xl pt-10">Выберите<br></br>устройство</h4>
		</div>
	)
}
