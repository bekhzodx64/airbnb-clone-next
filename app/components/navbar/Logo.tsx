'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
	const router = useRouter()

	return (
		<Image
			src='/images/logo.png'
			width={100}
			height={100}
			priority
			alt='logo'
			className='hidden md:block cursor-pointer'
		/>
	)
}

export default Logo
