import Image from "next/image";
import logo from '@/images/logo.png';
import logoName from '@/images/logo-name.svg';

export default function ToolBarLogo() {
	return (
		<div className='flex justify-center mb-4'>
			<Image src={logo} alt="Logo" width={60} height={60} className='inline-block' />
			<Image src={logoName} alt="Logo Name" width={143} height={60} className='inline-block ml-[-8px] dark:invert' />
		</div>
	)
}
