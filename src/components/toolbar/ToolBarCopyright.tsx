import { getCurrentYear } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ToolBarCopyright() {
	const t = useTranslations('ToolBarCopyright');
	return (
		<div className="text-center text-muted-foreground text-[13px]">
			©{getCurrentYear()} LookFrame. {t('text')}
		</div>
	)
}
