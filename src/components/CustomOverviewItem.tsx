import { CustomOverviewItemProp } from './CustomOverviewItemProp';
import Image from './Image';

export function CustomOverviewItem({ icon, label, value }: CustomOverviewItemProp) {
    return (
        <div className='w-full md:w-4/12 p-2'>
            <div className='bg-white p-8 shadow-lg space-y-3 flex items rounded-xl'>
                <div className='flex-1'>
                    <div className='py-9'>

                    </div>
                    <div className='text-sm'>{label}</div>
                    <div className='text-2xl font-bold'>{value}</div>
                </div>
                <div className='flex-1 relative'>
                    <div className='absolute'>
                        <Image image={'/eclipse.svg'} />
                    </div>
                    <div className='absolute'>
                        <Image image={'/eclipse_half.svg'} />
                    </div>
                    <div className='absolute top-12 left-12 text-2xl font-medium'>
                        53%
                    </div>
                </div>
            </div>
        </div>
    );
}
