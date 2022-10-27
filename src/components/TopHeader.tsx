import React, { useState } from 'react'
import Image from './Image'
import { TopHeaderProp } from '../models/TopHeaderProp'


const TopHeader = ({}: TopHeaderProp) => {

    return (
        <div className='flex flex-row justify-between bg-white w-full p-2 md:p-4 md:border-2'>
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
                            <div>
                                <Image image="/downward-arrow.svg" />
                            </div>
                        </div>

                        <div>Vendor ID: 3945823</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopHeader