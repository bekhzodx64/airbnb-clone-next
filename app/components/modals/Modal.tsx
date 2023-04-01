'use client'

import { useState, useEffect, useCallback } from 'react'
import { Dialog } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'

import Button from '../Button'

interface ModalProps {
	isOpen?: boolean
	onClose: () => void
	onSubmit: () => void
	title?: string
	body?: React.ReactElement
	footer?: React.ReactElement
	actionLabel: string
	disabled?: boolean
	secondaryAction?: () => void
	secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen)

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}

		setShowModal(false)
		onClose()
	}, [disabled, onclose])

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}

		onSubmit()
	}, [disabled, onSubmit])

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return
		}

		secondaryAction()
	}, [disabled, secondaryAction])

	if (!isOpen) {
		return null
	}

	return (
		<Dialog
			open={showModal}
			onClose={() => {}}
			className='fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70 backdrop-blur-sm'
		>
			<Dialog.Panel className='flex flex-col w-full h-full mx-auto my-6 bg-white rounded-lg shadow-lg md:w-4/6 lg:w-3/6 xl:w-2/5 md:h-auto'>
				<Dialog.Title className='relative flex items-center justify-center p-6 text-lg font-semibold'>
					<button
						className='absolute p-1 transition hover:opacity-70 left-9'
						onClick={handleClose}
					>
						<IoMdClose size={18} />
					</button>

					{title}
				</Dialog.Title>
				<Dialog.Description className='flex-auto p-6'>
					{body}
				</Dialog.Description>

				<div className='flex flex-col gap-2 p-6'>
					<div className='flex flex-row items-center w-full gap-4'>
						{secondaryAction && secondaryActionLabel && (
							<Button
								outline
								disabled={disabled}
								label={secondaryActionLabel}
								onClick={handleSecondaryAction}
							/>
						)}
						<Button
							disabled={disabled}
							label={actionLabel}
							onClick={handleSubmit}
						/>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	)
}

export default Modal
