// src/components/Sidebar.tsx
import ToolBarLogo from './toolbar/ToolBarLogo'
import ToolBarScale from './toolbar/ToolBarScale'
import ToolBarRotate from './toolbar/ToolBarRotate'
import ToolBarPanel from './toolbar/ToolBarPanel'
import ToolBarCheckbox from './toolbar/ToolBarCheckbox'
import ToolBarContact from './toolbar/ToolBarContact'
import ToolBarCopyright from './toolbar/ToolBarCopyright'
import ToolBarDevices from './toolbar/ToolBarDevices'

export default function Sidebar() {
	return (
		<aside className='text-foreground w-[320px] flex flex-col flex-none p-2 border-r-1'>
			<ToolBarLogo />
			<ToolBarDevices />
			<ToolBarScale />
			<ToolBarRotate />
			<ToolBarPanel />
			<ToolBarCheckbox />
			<ToolBarContact />
			<ToolBarCopyright />
		</aside>
	)
}
