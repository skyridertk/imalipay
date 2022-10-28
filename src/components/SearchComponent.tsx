import React from 'react';
import Image from './Image';

export function SearchComponent(placeholder: string, handleSearch: (searchText: any) => void) {
    return <div className='flex relative'>
        <input type={'text'} placeholder={placeholder} className="bg-white outline outline-gray-500 rounded-lg pl-10 px-8 py-2 w-full  md:w-96" onChange={(e) => handleSearch(e.target.value)} />
        <div className='absolute left-2 top-2'>
            <Image image={"/search.svg"} />
        </div>
    </div>;
}
