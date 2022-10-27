import React from 'react';
import { ConnectItemProp } from '../models/ConnectItemProp';
import Image from './Image';

export function ConnectItem({ icon, label }: ConnectItemProp) {
    return <div className='flex  flex-col items-center justify-center w-full'>
        <Image image={icon} />
        <div>{label}</div>
    </div>;
}
