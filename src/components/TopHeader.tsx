import React, { useState } from 'react'
import Image from './Image'
import { TopHeaderProp } from '../models/TopHeaderProp'
import { useNavigate } from 'react-router-dom'
import { MenuModal } from '../models/MenuModal'


const TopHeader = ({ }: TopHeaderProp) => {
    const [showMenu, setShowMenu] = useState(false)
    let navigate = useNavigate()

    return (
        <div className='pl-8 md:pl-0 flex h-24 flex-row justify-between bg-white w-full p-2 md:p-4 md:border-2'>
            <div>
                <div className='text-lg md:text-2xl font-medium'>Hello, Alex</div>
                <div className='text-xs md:text-base font-light'>Here's whats going on with your account.</div>
            </div>

            <div className='flex items-center space-x-5 px-2 md:px-10 md:pr-20'>
                <div>
                    <Image image="/bell.svg" />
                </div>
                <div>
                    <Image image="/line.svg" />
                </div>

                <div className='flex items-center space-x-4'>
                    <div>
                        <Image image="/avatar.svg" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4'>
                            <div>Alex</div>
                            <button onClick={() => setShowMenu(true)}>
                                <Image image="/downward-arrow.svg" />
                            </button>
                        </div>

                        <div>Vendor ID: 3945823</div>
                    </div>
                </div>

            </div>

            <MenuModal showMenuModal={showMenu} setShowMenuModal={setShowMenu}>
                <div className='bg-white flex flex-col items-start w-full h-min  pl-7 px-4 py-2 space-y-5'>

                    <div>
                        Account
                    </div>
                    <hr className='text-black bg-black h-2'/>
                    <button className='uppercase text-xs text-white rounded-full px-4 py-2 bg-gray-800'>
                        Logout
                    </button>

                </div>
            </MenuModal>
        </div>
    )
}

export default TopHeader