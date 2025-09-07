import HintEnterUrl from "./HintEnterUrl";
import HintSelectDevice from "./HintSelectDevice";

export default function Welcome({ url, isSelectedEmpty }: { url: string, isSelectedEmpty: boolean }) {
	return (
		<section className="grow relative w-full flex flex-col">
			{!url && <HintEnterUrl />}
			{isSelectedEmpty && url && <HintSelectDevice />}
			<div className="text-center text-lg text-muted-foreground">

				👋 Добро пожаловать!
				<br />
				Выберите платформу, чтобы начать.
			</div>
		</section>
	)
}
