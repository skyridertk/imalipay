import React from 'react';
import { LabelProp } from '../models/LabelProp';

export function Label({ value }: LabelProp) {
    return <div className='text-gray-500'>{value}</div>;
}
