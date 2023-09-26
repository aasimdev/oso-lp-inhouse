import React from 'react'
import NavItem from './MenuItem';

const Menu = ({ isOpen, onClose }) => {
    const sideMenuClasses = isOpen
    ? "fixed w-screen h-screen bg-white z-50 transform mt-28 top-0 visible opacity-100 transition-all duration-500"
    : "fixed w-screen h-screen bg-white z-50 transform mt-28 -top-3 invisible opacity-0 transition-all duration-500";
    return (
        <div className={sideMenuClasses}>
            <div className="px-6 mx-auto max-w-6xl">
                <div className="md:mt-4">
                    <NavItem Item="Tutorials" />
                    <NavItem Item="Plug-ins" />
                    <NavItem Item="Feed" />
                    <NavItem Item="Chat" />
                    <NavItem Item="Pricing" />
                    <NavItem Item="Resources" />
                </div>
            </div>
        </div>
    )
}

export default Menu