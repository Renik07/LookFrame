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
import Version from "./Version"
import { useTranslations } from "next-intl"

export default function Main() {
	const t = useTranslations('Main');
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
		<div className='relative flex flex-col grow p-2 pb-8'>
			<div className='flex items-center mb-2 gap-2'>
				<Input
					onChange={handleChange}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleClick()
						}
					}}
					value={inputValue}
					placeholder={t('input-url-placeholder')}
					className="max-w-[600px]" />
				<Button onClick={handleClick} className="cursor-pointer">{t('button')}</Button>
				<DonateInfo />
				<LanguageToggle />
				<ButtonDarkTheme theme={theme} setTheme={setTheme} />
			</div>
			<Separator className="mb-4" />
			<MainDevices url={url} />
			<Version />
		</div>
	)
}
