import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function ToolBarPanel() {
	return (
		<div className="w-full mb-3 flex items-center gap-3">
			<h3 className="mb-1 text-black">Panel</h3>
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select option" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Panel</SelectLabel>
						<SelectItem value="off">Off</SelectItem>
						<SelectItem value="fixed">Fixed</SelectItem>
						<SelectItem value="float">Float</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
