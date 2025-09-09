import { useTranslations } from "next-intl";
import HintEnterUrl from "./HintEnterUrl";
import HintSelectDevice from "./HintSelectDevice";

export default function Welcome({ url, isSelectedEmpty }: { url: string, isSelectedEmpty: boolean }) {
	const t = useTranslations('Welcome');
	return (
		<section className="grow relative w-full flex flex-col">
			{!url && <HintEnterUrl />}
			{isSelectedEmpty && url && <HintSelectDevice />}
			<div className="flex items-center justify-center flex-col text-center text-lg h-[80vh] text-muted-foreground">
				<h1 className="hue-text font-lato font-black text-9xl text-foreground mb-10 pointer-events-none">LookFrame</h1>
				<h2 className="text-foreground">
					{t('title-h2')}
				</h2>
				<h3 className="text-foreground mb-4">
					{t('title-h3')}
				</h3>
				<h3 className="text-2xl text-foreground">
					{t('title-h4')}
				</h3>
			</div>
		</section>
	)
}
