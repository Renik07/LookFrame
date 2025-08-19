import React from 'react'

export default function Main() {
	return (
		<div className='bg-green-200 text-black flex-5/6'>
			<input className='bg-white' type="text" />
			<iframe
				src="https://kg-portal.ru/"
				title="Example Iframe"
				className="w-100 h-200"
				style={{ border: 'none' }}
			></iframe>
		</div>
	)
}
