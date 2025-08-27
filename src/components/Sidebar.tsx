// src/components/Sidebar.tsx
import ToolBarCheckbox from './ToolBarCheckbox'
import ToolbarDevices from './ToolbarDevices'
import ToolBarRotate from './ToolBarRotate'
import ToolBarScale from './ToolBarScale'

export default function Sidebar() {
	return (
		<div className='text-black flex-1/6 p-2 border-r-1 border-gray-100'>
			<ToolbarDevices />
			<ToolBarScale />
			<ToolBarRotate />
			<ToolBarCheckbox />
		</div>
	)
}
