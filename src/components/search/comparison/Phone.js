import React from 'react'

const Phone = ({ title, obj }) => {
    return (
        <div className="flex flex-col">
            <p className="text-center text-[21px] font-medium text-black">
                {title}
            </p>
            <div className="relative ">
                <video playsInline preload="none" muted autoPlay loop loading="lazy" className='max-w-xs'>
                    <source src={obj} type="video/mp4" />
                </video>

            </div>
        </div>
    )
}

export default Phone