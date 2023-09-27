import Image from 'next/image'
import React from 'react'

const TestimonialItem = ({name, description, image}) => {
    return (
        <div className='w-auto px-3 md:px-0 mb-12 md:mb-0 h-full'>
            <div className='border border-gray-500 rounded-2xl p-8 lg:text-center text-left md:mx-3 h-[calc(100%_-_55px)] md:h-full flex flex-col justify-between'>
                <p className='text-2xl text-black'>{description}</p>
                <div className='flex gap-2 items-center lg:justify-center justify-start mt-4'>
                    <Image src={image} alt="logo" width={32} height={32} className='rounded-full w-8 h-8'/>
                    <span className='text-gray-500 text-base'>{name}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem