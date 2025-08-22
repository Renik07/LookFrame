import React from 'react'

export default function Main() {
	return (
		<div className='bg-green-200 text-black flex-5/6 p-2'>
			<div className='mb-4'>
				<input className='bg-white min-w-[600px] p-2' type="text" />
				<button className='bg-blue-500 text-white p-2'>Search</button>
			</div>
			{/* devices */}
			<div className='flex flex-wrap gap-4'>
				<iframe
					src="http://localhost:3000/"
					title="Example Iframe"
					className="w-[320px] h-[568px]"
					style={{ border: 'none' }}
				></iframe>

			</div>
		</div>
	)
}
