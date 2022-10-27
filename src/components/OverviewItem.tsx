import React from 'react';
import Image from './Image';
import { OverviewItemProp } from '../models/OverviewItemProp';

export function OverviewItem({ icon, label, value }: OverviewItemProp) {
    return (
        <div className='w-full md:w-4/12 p-2'>
            <div className='bg-white p-8 shadow-lg space-y-3 rounded-xl'>
                <div className='flex items-start justify-between'>
                    <Image image={icon} />
                    <div className='flex space-x-2 items-center'>
                        <div>KES</div>
                        <Image image={'/downward-arrow.svg'} />
                    </div>
                </div>
                <div className='text-sm'>{label}</div>
                <div className='text-2xl font-bold'>{value}</div>
            </div>
        </div>
    );
}
