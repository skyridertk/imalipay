import React from 'react';
import { ModalTitleProp } from '../models/ModalTitleProp';

export function ModalTitle({ label, subTitle }: ModalTitleProp) {
    return <div>
        <div className='text-2xl'>{label}</div>
        <div className='font-light text-xs'>
            {subTitle}
        </div>
    </div>;
}
