import React from 'react'
import Button from './common/Button'

const CallToAction = () => {
    return (
        <div className='md:py-16 py-8 px-6 md:px-24 rounded-lg bg-gray-40'>
            <div className='flex md:justify-between md:items-center md:flex-nowrap flex-wrap'>
                <h6 className='text-[36px] md:leading-loose leading-[56px] font-bold text-black md:mb-0 mb-4'>Become an OSO Ambassador</h6>
                <Button
                    label="Apply now"
                    className="!text-base !font-normal md:!w-[170px] w-full !p-3 !gap-2 hover:!gap-3"
                    arrowIcon={true}
                    link="https://eijfn1o56i0.typeform.com/to/Iq1Hv1Nz"
                    target="_blank"
                />
            </div>
        </div>
    )
}

export default CallToAction