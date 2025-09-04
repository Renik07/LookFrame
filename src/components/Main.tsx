// src/components/Main.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import LanguageToggle from "./LanguageToggle"
import MainDevices from "./MainDevices"

export default function Main() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<div className='text-black grow p-2'>
			<div className='flex items-center mb-4'>
				<div>
				</div>
				<Input className="max-w-[600px]" />
				<Button className="cursor-pointer">Search!!!</Button>
				<div className="ml-4 flex gap-2">
					<LanguageToggle />
				</div>
				<Button
					variant="outline"
					size="icon"
					className="ml-auto"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					{theme === "light" ? (
						<Sun className="h-[1.2rem] w-[1.2rem]" />
					) : (
						<Moon className="h-[1.2rem] w-[1.2rem]" />
					)}
				</Button>
			</div>
			<Separator className="mb-4" />
			<MainDevices />
		</div>
	)
}
