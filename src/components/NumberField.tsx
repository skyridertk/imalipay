import React from 'react';
import Image from './Image';
import { NumberFieldProp } from '../models/NumberFieldProp';

export function NumberField({ value, label, type }: NumberFieldProp) {
    return (
        <div className='w-full'>
            <div className='text-gray-500'>{label}</div>
            <div className='flex'>
                <select defaultValue={'+254'} className="w-3/12 py-3 px-3 rounded-l-lg bg-gray-100">
                    <option value={'+254'}>
                        <div>
                            <Image image={'/bell.svg'} />
                            <div>+254</div>
                        </div>
                    </option>
                </select>
                <input type={type} className="w-9/12 py-3 px-3 rounded-lg bg-gray-100" value={'test'} />
            </div>
        </div>
    );
}
