import React from 'react';
import { CustomerDetailProp } from '../models/CustomerDetailProp';
import Image from './Image';

export function CustomerDetail({ icon, name, phoneNumber }: CustomerDetailProp) {
    return <div className='w-72 flex items-center space-x-3'>
        <div>
            <Image image={icon} />
        </div>
        <div>
            <div className='capitalize'>{name}</div>
            <div>{phoneNumber}</div>
        </div>
    </div>;
}
