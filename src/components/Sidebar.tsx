// src/components/Sidebar.tsx
import ToolBarCheckbox from './toolbar/ToolBarCheckbox'
import ToolbarDevices from './toolbar/ToolbarDevices'
import ToolBarPanel from './toolbar/ToolBarPanel'
import ToolBarRotate from './toolbar/ToolBarRotate'
import ToolBarScale from './toolbar/ToolBarScale'
import ToolBarContact from './toolbar/ToolBarContact'
import ToolBarLogo from './toolbar/ToolBarLogo'

export default function Sidebar() {
	return (
		<aside className='text-foreground w-[310px] flex flex-col flex-none p-2 border-r-1'>
			<ToolBarLogo />
			<ToolbarDevices />
			<ToolBarScale />
			<ToolBarRotate />
			<ToolBarPanel />
			<ToolBarCheckbox />
			<ToolBarContact />
		</aside>
	)
}
