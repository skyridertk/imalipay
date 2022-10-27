import React from 'react';
import { DetailProp } from '../models/DetailProp.1';
import { Label } from './Label';

export function Field({ value, label, type }: DetailProp) {
    return (
        <div className='w-full'>
            {Label({ value: label })}
            <input type={type} value={value} className="w-full py-3 px-3 rounded-lg bg-gray-100" />
        </div>
    );
}
