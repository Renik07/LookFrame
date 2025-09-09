import HintEnterUrl from "./HintEnterUrl";
import HintSelectDevice from "./HintSelectDevice";

export default function Welcome({ url, isSelectedEmpty }: { url: string, isSelectedEmpty: boolean }) {
	return (
		<section className="grow relative w-full flex flex-col">
			{!url && <HintEnterUrl />}
			{isSelectedEmpty && url && <HintSelectDevice />}
			<div className="flex items-center justify-center flex-col text-center text-lg h-[90vh] text-muted-foreground">
				<h1 className="hue-text font-lato font-black text-9xl text-foreground mb-10 pointer-events-none">LookFrame</h1>
				<h2 className="text-foreground">
					Посмотри на свой сайт в любой рамке: телефон, планшет, ноутбук или экран побольше.
				</h2>
				<h3 className="text-foreground mb-4">
					Тестируй адаптивность, чтобы твой сайт был удобен каждому пользователю.
				</h3>
				<h3 className="text-2xl text-foreground">
					Всё бесплатно, всё наглядно!
				</h3>
			</div>
		</section>
	)
}
