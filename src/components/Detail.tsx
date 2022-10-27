import { DetailProp } from '../models/DetailProp';
import Image from './Image';

export function Detail({ icon, name, phoneNumber }: DetailProp) {
    return <div className='flex items-center space-x-3'>
        <div>
            <Image image={icon} />
        </div>
        <div>
            <div className='capitalize'>{name}</div>
            <div>{phoneNumber}</div>
        </div>
    </div>;
}
