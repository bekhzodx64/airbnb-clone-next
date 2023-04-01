'use client'

import { Fragment, useState, useEffect } from 'react'

interface ClientOnlyProps {
	children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) {
		return null
	}

	return <Fragment>{children}</Fragment>
}

export default ClientOnly
