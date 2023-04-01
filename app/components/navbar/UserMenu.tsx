'use client'

import { Menu } from '@headlessui/react'
import { AiOutlineMenu } from 'react-icons/ai'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'

const UserMenu = () => {
	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={() => {}}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					your home
				</div>

				<Menu>
					<Menu.Button>
						<div className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
							<AiOutlineMenu />

							<div className='hidden md:block'>
								<Avatar />
							</div>
						</div>
					</Menu.Button>

					<Menu.Items className='absolute overflow-hidden mt-2 right-0 top-full origin-top-right rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white text-sm'>
						<Menu.Item>
							<MenuItem
								onClick={() => {}}
								label='login'
							/>
						</Menu.Item>
						<Menu.Item>
							<MenuItem
								onClick={() => {}}
								label='sign up'
							/>
						</Menu.Item>
					</Menu.Items>
				</Menu>
			</div>
		</div>
	)
}

export default UserMenu
