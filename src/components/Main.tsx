// src/components/Main.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { ChangeEvent, useEffect, useState } from "react"
import LanguageToggle from "./LanguageToggle"
import MainDevices from "./MainDevices"
import ButtonDarkTheme from "./ButtonDarkTheme"
import DonateInfo from "./DonateInfo"

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
		<div className='relative flex flex-col grow p-2'>
			<div className='flex items-center mb-2 gap-2'>
				<Input onChange={handleChange} value={inputValue} placeholder="Enter a website URL" className="max-w-[600px]" />
				<Button onClick={handleClick} className="cursor-pointer">GO</Button>
				<DonateInfo />
				<LanguageToggle />
				<ButtonDarkTheme theme={theme} setTheme={setTheme} />
			</div>
			<Separator className="mb-4" />
			<MainDevices url={url} />
			<div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
				<span>ver1.0.0</span>
			</div>
		</div>
	)
}
