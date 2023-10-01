import React from 'react'
import ReactPlayer from 'react-player'

const Phone = ({ title, obj }) => {
    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-center text-[21px] font-medium text-black">
                {title}
            </p>
            <div className="relative max-w-full sm:max-w-[348px] h-[700px] sm:h-[616px]">
                {/* <video playsInline preload="none" muted autoPlay loop loading="lazy" className='max-w-full sm:max-w-[348px]'>
                    <source src={obj} type="video/mp4" />
                </video> */}
                <ReactPlayer
                    url={`https://vimeo.com/${obj}`}
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    muted={true}
                    controls={false}
                />
            </div>
        </div>
    )
}

export default Phone