import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

type ButtonDarkThemeProps = {
	theme: string | undefined,
	setTheme: (theme: string) => void
}

export default function ButtonDarkTheme({ theme, setTheme }: ButtonDarkThemeProps) {
	return (
		<Button
			variant="outline"
			size="icon"
			className="cursor-pointer ml-2"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{theme === "light" ? (
				<Sun className="h-[1.2rem] w-[1.2rem]" />
			) : (
				<Moon className="h-[1.2rem] w-[1.2rem]" />
			)}
		</Button>
	)
}
