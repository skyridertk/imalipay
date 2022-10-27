import React from 'react';
import { Label } from './Label';
import { TransactionHistoryProps } from '../models/TransactionHistoryProps';


export function TransactionHistory({ label, value }: TransactionHistoryProps) {
    return <div className='flex-1 p-5'>
        {Label({ value: label })}
        <div className='text-2xl font-bold'>{value}</div>
    </div>;

}
