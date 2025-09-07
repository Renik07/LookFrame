// src/components/Sidebar.tsx
import ToolBarCheckbox from './ToolBarCheckbox'
import ToolbarDevices from './ToolbarDevices'
import ToolBarPanel from './ToolBarPanel'
import ToolBarRotate from './ToolBarRotate'
import ToolBarScale from './ToolBarScale'
import logo from '../images/logo.png';
import logoName from '../images/logo-name.svg';
import Image from 'next/image'

export default function Sidebar() {
	return (
		<div className='text-foreground w-[310px] flex-none p-2 border-r-1'>
			<div className='flex justify-center mb-4'>
				<Image src={logo} alt="Logo" width={60} height={60} className='inline-block' />
				<Image src={logoName} alt="Logo Name" width={143} height={60} className='inline-block ml-[-8px] dark:invert' />
			</div>
			<ToolbarDevices />
			<ToolBarScale />
			<ToolBarRotate />
			<ToolBarPanel />
			<ToolBarCheckbox />
		</div>
	)
}
