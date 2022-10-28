import { CustomersItemProp } from '../models/CustomersItemProp';

export function CustomersItem({ label, value, percent }: CustomersItemProp) {
    return (
        <div className='w-full md:w-4/12 p-2'>
            <div className='bg-white p-8 h-52 flex flex-col justify-end shadow-lg space-y-3 rounded-xl'>
                <div className='text-sm capitalize'>{label}</div>
                <div className='text-2xl font-bold'>{value}</div>
                <div className='flex space-x-2'>
                    <div>
                        {percent}
                    </div>
                    <div>
                        vs last month
                    </div>
                </div>
            </div>
        </div>
    );
}
