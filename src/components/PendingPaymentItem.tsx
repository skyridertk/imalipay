import React from 'react';
import { Detail } from './Detail';
import { PendingPaymentItemProp } from '../models/PendingPaymentItemProp';

export function PendingPaymentItem({}: PendingPaymentItemProp) {
    return <div className='flex justify-between items-center'>
        <div className='flex space-x-3'>
            {Detail({ icon: '/upcoming.svg', name: '1/4 Payment', phoneNumber: '21 JUL 2022' })}
            <div className=' bg-red-200 text-red-700 h-min rounded-lg px-2 capitalize text-sm'>
                Overdue
            </div>
        </div>


        <div className='font-medium text-sm uppercase'>
            NGN 34,600
        </div>
    </div>;
}
