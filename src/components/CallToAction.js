import React from 'react'
import Button from './common/Button'

const CallToAction = () => {
    return (
        <div className='md:py-16 py-8 px-6 md:px-24 rounded-lg bg-gray-40'>
            <div className='flex md:justify-between md:items-center md:flex-nowrap flex-wrap'>
                <h6 className='text-[36px] md:leading-loose leading-[56px] font-bold text-black md:mb-0 mb-4'>OSO Early Access is Live!</h6>
                <Button
                    label="Try OSO"
                    className="!text-base !font-normal md:!w-[170px] w-full !p-3 !gap-2 hover:!gap-3"
                    arrowIcon={true}
                    link="https://l.oso.ai/newuser"
                    target="_blank"
                />
            </div>
        </div>
    )
}

export default CallToAction