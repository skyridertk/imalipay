export function AppContainer({ children }) {
    return (
        <div className='flex flex-row md:min-h-screen w-full bg-gray-50'>
            {children}
        </div>
    );
}
