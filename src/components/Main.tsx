"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Main() {

	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// чтобы избежать hydration error
	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<div className='bg-green-200 text-black flex-5/6 p-2'>
			<div className='flex items-center mb-4'>
				<div>
				</div>
				<Input className="max-w-[600px]" />
				<Button className="cursor-pointer">Search!!!</Button>
				<div className='ml-4'>
					<button className='cursor-pointer mr-1'>EN |</button>
					<button className='cursor-pointer mr-1'>SP |</button>
					<button className='cursor-pointer mr-1'>DE |</button>
					<button className='cursor-pointer'>RU</button>
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
			{/* devices */}
			<div className='flex flex-wrap gap-4'>
				{/* <iframe
					src="http://localhost:3000/"
					title="Example Iframe"
					className="w-[320px] h-[568px]"
					style={{ border: 'none' }}
				></iframe> */}

			</div>
		</div>
	)
}
