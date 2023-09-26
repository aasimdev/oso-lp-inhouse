"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from '../common/navigation/Menu';
import { useMenu } from '@/context/MenuContext';

const Header = () => {

    const { showSidebar, navigationHandler } = useMenu("");

    return (
        <>
            <header className="px-6 py-4 mx-auto max-w-6xl">
                <nav className="flex justify-between items-center md:flex-nowrap flex-wrap">
                    <a href="#">
                        <Image src={"/assets/logo/oso.png"} alt="logo" width={56} height={80} />
                    </a>
                    <div className="flex items-center gap-6">
                        <a href='https://eijfn1o56i0.typeform.com/to/szT5l8hI?typeform-source=oso.ai' target='_blank' className="!py-[11px] !px-[23.25px] !text-base !w-auto theme-btn">
                            Join Waitlist
                        </a>
                        {/* {showSidebar ? (
                            <button className="icon-btn w-12 h-12 flex items-center justify-center" onClick={navigationHandler}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                                </svg>
                            </button>
                        ) : (
                            <button className="icon-btn w-12 h-12 flex items-center justify-center" onClick={navigationHandler}>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black" />
                                </svg>
                            </button>
                        )} */}
                    </div>
                </nav>
            </header>
            {showSidebar &&
                <Menu isOpen={showSidebar} onClose={navigationHandler} />
            }
        </>
    )
}

export default Header