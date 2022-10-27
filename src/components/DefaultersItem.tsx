import { DefaultersItemProp } from '../models/DefaultersItemProp';
import Image from './Image';

export function DefaultersItem({ icon, icon_vert, label, value, additional }: DefaultersItemProp) {
    return (
        <div className='w-full md:w-4/12 p-2'>
            <div className='bg-white p-8 shadow-lg space-y-3 rounded-xl'>
                <div className='flex justify-between items-start'>
                    <Image image={icon} />
                    <Image image={icon_vert} />
                </div>
                <div className='text-sm'>{label}</div>
                <div className='flex justify-between items-start'>
                    <div className='text-2xl font-bold'>{value}</div>
                    <div>{additional}</div>
                </div>
            </div>
        </div>
    );
}
