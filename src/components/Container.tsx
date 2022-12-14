import React from 'react';

export function Container({ children }) {
    return (
        <div className='bg-gray-50 transition-all duration-1000 w-full min-h-screen p-1 md:p-10 space-y-4'>
            {children}
        </div>
    );
}
