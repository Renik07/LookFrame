import { getCurrentYear } from "@/lib/utils";

export default function Copyright() {
	return (
		<div className="absolute bottom-2 text-center w-[90%] text-muted-foreground text-[13px]">
			©{getCurrentYear()} LookFrame. All rights reserved.
		</div>
	)
}
