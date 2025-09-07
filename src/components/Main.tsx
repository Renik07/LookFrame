// src/components/Main.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ChangeEvent, useEffect, useState } from "react"
import LanguageToggle from "./LanguageToggle"
import MainDevices from "./MainDevices"

export default function Main() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const [url, setUrl] = useState("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}
	const handleClick = () => {
		if (!inputValue) return

		let finalUrl = inputValue
		if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
			finalUrl = "https://" + finalUrl
		}
		setUrl(finalUrl)
	}

	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<div className='grow p-2'>
			<div className='flex items-center mb-4'>
				<div>
				</div>
				<Input onChange={handleChange} value={inputValue} placeholder="Enter a website URL" className="max-w-[600px]" />
				<Button onClick={handleClick} className="cursor-pointer ml-2">GO</Button>
				<LanguageToggle />
				<Button
					variant="outline"
					size="icon"
					className="ml-4"
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
			<MainDevices url={url} />
		</div>
	)
}
