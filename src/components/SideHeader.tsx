import React, { useState } from 'react'
import Image from './Image'
import { useNavigate, useLocation } from "react-router-dom";
import { MenuModal } from '../models/MenuModal';
import { SideHeaderProps } from '../models/SideHeaderProps';


const SideHeader = ({}: SideHeaderProps) => {
    let navigate = useNavigate()
    let location = useLocation()
    const [showMenu, setShowMenu] = useState(false)

    console.log(location.pathname)

    const onOverviewClickHandler = () => {
        navigate("/financial")
        setShowMenu(false)
    }
    const onCustomerClickHandler = () => {
        navigate("/financial/customers")
        setShowMenu(false)
    }
    const onDefaultsClickHandler = () => {
        navigate("/financial/defaults")
        setShowMenu(false)
    }
    const onFulfilmentClickHandler = () => {
        navigate("/financial/fulfilment")
        setShowMenu(false)
    }
    const onNavigateClickHandler = () => {
        navigate("/reconciliation")
        setShowMenu(false)
    }
    return (
        <>
            <div className='bg-white hidden md:flex md:flex-col  md:fixed border-2 w-full md:w-2/12 h-min md:min-h-screen pl-7 px-4 py-2 space-y-5'>
                <div className='py-5' onClick={() => navigate("/")}>
                    <Image image={"/main-logo.svg"} />
                </div>
                <div className='uppercase text-xs'>
                    quick menu
                </div>
                <div className='space-y-5'>
                    {MenuItem({ icon: '/overview-logo.svg', text: 'Overview', onClick: () => onOverviewClickHandler(), active: location.pathname == "/financial" })}
                    {MenuItem({ icon: '/customers-logo.svg', text: 'Customers', onClick: () => onCustomerClickHandler(), active: location.pathname.indexOf("/customers") != -1 })}
                    {MenuItem({ icon: '/defaults-logo.svg', text: 'Defaults', onClick: () => onDefaultsClickHandler(), active: location.pathname.indexOf("/defaults") != -1 })}
                    {MenuItem({ icon: '/fulfilment-logo.svg', text: 'Fulfilment', onClick: () => onFulfilmentClickHandler(), active: location.pathname.indexOf("/fulfilment") != -1 })}
                </div>

                <div className='flex flex-col space-y-5 py-5'>
                    <button className='border text-center rounded-full bg-gray-700 text-white py-2'>Reconciliation Dashboard</button>
                    <button className='border text-center rounded-full py-2 text-xs' onClick={() => onNavigateClickHandler()}>Navigate to Financial</button>
                </div>
            </div>
            <div className="absolute md:hidden flex items-center h-24 bg-white">
                <button className="outline-none mobile-menu-button" onClick={() => setShowMenu(true)}>
                    <svg
                        className="w-6 h-6 text-gray-500"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <MenuModal showMenuModal={showMenu} setShowMenuModal={setShowMenu}>
                <div className='bg-white flex flex-col  w-full h-min  pl-7 px-4 py-2 space-y-5'>
                    <div className='py-5' onClick={() => navigate("/")}>
                        <Image image={"/main-logo.svg"} />
                    </div>
                    <div className='uppercase text-xs'>
                        quick menu
                    </div>
                    <div className='space-y-5'>
                        {MenuItem({ icon: '/overview-logo.svg', text: 'Overview', onClick: () => onOverviewClickHandler(), active: location.pathname == "/financial" })}
                        {MenuItem({ icon: '/customers-logo.svg', text: 'Customers', onClick: () => onCustomerClickHandler(), active: location.pathname.indexOf("/customers") != -1 })}
                        {MenuItem({ icon: '/defaults-logo.svg', text: 'Defaults', onClick: () => onDefaultsClickHandler(), active: location.pathname.indexOf("/defaults") != -1 })}
                        {MenuItem({ icon: '/fulfilment-logo.svg', text: 'Fulfilment', onClick: () => onFulfilmentClickHandler(), active: location.pathname.indexOf("/fulfilment") != -1 })}
                    </div>

                    <div className='flex flex-col space-y-5 py-5'>
                        <button className='border text-center rounded-full bg-gray-700 text-white py-2'>Reconciliation Dashboard</button>
                        <button className='border text-center rounded-full py-2 text-xs' onClick={() => onNavigateClickHandler()}>Navigate to Financial</button>
                    </div>
                </div>
            </MenuModal>
        </>
    )

}

function MenuItem({ icon, text, onClick, active }) {
    return (
        <div className={`flex space-x-4 items-center cursor-pointer ${active && 'font-medium'}`} onClick={onClick}>
            <div>
                <Image image={icon} />
            </div>
            <div>{text}</div>
        </div>
    )
}

export default SideHeader