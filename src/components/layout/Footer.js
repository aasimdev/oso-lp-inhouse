import React from 'react'
import CallToAction from '../CallToAction'
import Image from 'next/image';
import SocialIcons from '../common/SocialIcons';
import Newsletter from '../common/Newsletter';

const Footer = () => {

    return (
        <footer className='bg-black pb-8 pt-44 md:mt-40 mt-40  relative'>
            <div className='absolute w-full top-0 -translate-y-1/2'>
                <div className="px-6 mx-auto max-w-6xl">
                    <CallToAction />
                </div>
            </div>
            <div className="px-6 mx-auto md:max-w-6xl w-full">
                <div className='md:grid md:grid-cols-2'>
                    <div className='space-y-8'>
                        <div className='md:flex flex-none gap-8 items-end'>
                            <Image src={"/assets/logo/footer-logo.svg"} width={80} height={113} alt="Logo" />
                            <p className='text-white text-2xl font-light md:mt-0 mt-4'>Experience the power of AI</p>
                        </div>
                        <div className='flex md:flex-nowrap flex-wrap gap-4'>
                            <a href='https://eijfn1o56i0.typeform.com/to/Iq1Hv1Nz' target='_blank' className='white-btn'>
                                Join Waitlists
                            </a>
                        </div>
                    </div>
                    <div className='lg:w-[433px] w-full ml-auto'>
                        <Newsletter />
                        <SocialIcons />
                    </div>
                </div>
                <hr className='mb-6 mt-11 sm:my-8 -mx-6 sm:mx-0 border-gray-500 border-opacity-20' />
                <div className='flex md:justify-between md:flex-row flex-col-reverse'>
                    <p className='text-gray-100 text-sm md:mt-0 mt-6'>© 2023 W4 Labs Inc.  </p>
                    {/* <div className='flex gap-8 items-center'>
                        <a href='#' className='text-gray-500 text-sm'>Tutorials </a>
                        <a href='#' className='text-gray-500 text-sm'>Affiliates </a>
                        <a href='#' className='text-gray-500 text-sm'>Contact </a>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer