import { FlexProp } from '../models/FlexProp';


export function Flex({ children }: FlexProp) {
    return (
        <div className='flex space-x-4 w-full'>
            {children}
        </div>
    );
}
