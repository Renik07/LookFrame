"use client"
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BNB_URI, BNB_LINK, BTC_URI, BTC_LINK, ETH_URI, ETH_LINK, SOL_URI, SOL_LINK, USDT_URI, USDT_LINK, XRP_URI, XRP_LINK, BTC_ADDRESS, ETH_ADDRESS, USDT_ADDRESS, BNB_ADDRESS, SOL_ADDRESS, XRP_ADDRESS } from "@/lib/constants"
import QRCode from "react-qr-code";
import btcIcon from '@/images/crypto/btc-icon.svg'
import ethIcon from '@/images/crypto/eth-icon.svg'
import bnbIcon from '@/images/crypto/bnb-icon.svg'
import usdtIcon from '@/images/crypto/usdt-icon.svg'
import solIcon from '@/images/crypto/sol-icon.svg'
import xrpIcon from '@/images/crypto/xrp-icon.svg'
import copyIcon from '@/images/i-copy.svg'
import trustWalletImg from '@/images/crypto/trust-wallet.png'
import likeIcon from '@/images/i-like.svg'
import { useTranslations } from "next-intl"

export default function DonateInfo() {
	const t = useTranslations('DonateInfo');

	const tabTriggerClass = "group data-[state=active]:text-white rounded-xl cursor-pointer px-3";
	const addresses = {
		btc: BTC_ADDRESS,
		eth: ETH_ADDRESS,
		usdt: USDT_ADDRESS,
		bnb: BNB_ADDRESS,
		sol: SOL_ADDRESS,
		xrp: XRP_ADDRESS,
	}

	const handleCopy = (currency: keyof typeof addresses) => {
		const address = addresses[currency]
		navigator.clipboard.writeText(address)
		toast(currency.toUpperCase(), {
			description: (
				<div className="text-foreground">
					{t('toast-text')}
				</div>
			),
		})
	}

	return (
		<div className="ml-2">
			<Drawer>
				<DrawerTrigger asChild>
					<Button className="cursor-pointer animate-gradient bg-gradient-to-r from-[#3787F0] to-[#9345ff] text-white" variant="outline">{t('button')}</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="text-4xl">{t('title')}</DrawerTitle>
						<DrawerDescription className="mb-2 text-[22px]">{t('desc')}</DrawerDescription>
						<div className="max-w-106 px-2 sm:px-0 m-auto">
							<Tabs defaultValue="btc">
								<TabsList className="bg-card-foreground">
									<TabsTrigger className={`group dark:data-[state=active]:bg-[#FF7C00] data-[state=active]:bg-[#FF7C00] ${tabTriggerClass}`} value="btc">
										<Image className="dark:invert group-data-[state=active]:invert" src={btcIcon} width={15} height={15} alt="btc" />
										<h3>BTC</h3>
									</TabsTrigger>
									<TabsTrigger className={`dark:data-[state=active]:bg-[#4384D4] data-[state=active]:bg-[#4384D4] data-[state=active]:text-white ${tabTriggerClass}`} value="eth">
										<Image
											src={ethIcon}
											width={10}
											height={10}
											alt="eth"
											className="dark:invert group-data-[state=active]:invert"
										/>
										<h3>ETH</h3>
									</TabsTrigger>
									<TabsTrigger className={`dark:data-[state=active]:bg-[#2FAA9C] data-[state=active]:bg-[#2FAA9C] data-[state=active]:text-white ${tabTriggerClass}`} value="usdt">
										<Image className="dark:invert group-data-[state=active]:invert" src={usdtIcon} width={15} height={15} alt="usdt" />
										<h3>USDT</h3>
									</TabsTrigger>
									<TabsTrigger className={`dark:data-[state=active]:bg-black data-[state=active]:bg-black data-[state=active]:text-white ${tabTriggerClass}`} value="bnb">
										<Image
											src={bnbIcon}
											width={15}
											height={15}
											alt="bnb"
											className="dark:invert group-data-[state=active]:invert"
										/>
										<h3>BNB</h3>
									</TabsTrigger>
									<TabsTrigger className={`dark:data-[state=active]:bg-black data-[state=active]:bg-black data-[state=active]:text-white ${tabTriggerClass}`} value="sol">
										<Image className="dark:invert group-data-[state=active]:invert" src={solIcon} width={15} height={15} alt="sol" />
										<h3>SOL</h3>
									</TabsTrigger>
									<TabsTrigger className={`dark:data-[state=active]:bg-[#26282E] data-[state=active]:bg-[#26282E] data-[state=active]:text-white ${tabTriggerClass}`} value="xrp">
										<Image className="dark:invert group-data-[state=active]:invert" src={xrpIcon} width={15} height={15} alt="xrp" />
										<h3>XRP</h3>
									</TabsTrigger>
								</TabsList>
								<TabsContent value="btc">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">Bitcoin (BTC)</CardTitle>
											<CardDescription>{t('btc-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={BTC_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.btc}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('btc')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="bg-[#FF7C00]">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={BTC_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="eth">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">Ethereum (ETH)</CardTitle>
											<CardDescription>{t('eth-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={ETH_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.eth}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('eth')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="bg-[#4384D4]">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={ETH_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="usdt">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">USDT (ETH)</CardTitle>
											<CardDescription>{t('usdt-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={USDT_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.usdt}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('usdt')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="bg-[#2FAA9C]">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={USDT_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="bnb">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">BNB Smart Chain (BNB)</CardTitle>
											<CardDescription>{t('bnb-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={BNB_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.bnb}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('bnb')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={BNB_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="sol">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">Solana (SOL)</CardTitle>
											<CardDescription>{t('sol-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={SOL_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.sol}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('sol')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={SOL_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
								<TabsContent value="xrp">
									<Card>
										<CardHeader>
											<CardTitle className="text-foreground text-[24px]">XRP (XRP)</CardTitle>
											<CardDescription>{t('xrp-desc')}</CardDescription>
										</CardHeader>
										<CardContent className="grid grid-cols-[175px_1fr] gap-4">
											<QRCode value={XRP_URI} size={175} />
											<div className="text-left">
												<h4 className="font-robotoMono mb-2 break-all text-foreground text-[18px]">{addresses.xrp}</h4>
												<Button
													className="flex items-center justify-center cursor-pointer mb-4"
													onClick={() => handleCopy('xrp')}
												>
													<Image className="dark:invert" src={copyIcon} width={15} height={15} alt="copy" />
													{t('button-copy')}
												</Button>
												<Button asChild className="">
													<div className="flex items-center">
														<Image className="" src={trustWalletImg} width={15} height={15} alt="trust wallet" />
														<Link className="" href={XRP_LINK} target="_blank">Trust wallet</Link>
													</div>
												</Button>
											</div>
										</CardContent>
										<CardFooter></CardFooter>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
					</DrawerHeader>
					<DrawerFooter className="pt-0">
						<div className="flex items-center justify-center gap-2">
							<DrawerTitle className="text-center">{t('gratitude')}</DrawerTitle>
							<Image className="pixel-heart" src={likeIcon} width={30} height={30} alt="like" />
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

		</div>
	)
}
