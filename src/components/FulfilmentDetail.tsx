import React from 'react';
import { FulfilmentDetailProp } from '../models/FulfilmentDetailProp';
import Image from './Image';

export function FulfilmentDetail({ icon, name, phoneNumber }: FulfilmentDetailProp) {
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
