import React from 'react' 

const Advantages = ({ title, children }) => {
    return (
        <section className='px-6 mx-auto max-w-6xl'>
            <div className='py-16 md:text-center text-start'>
                <h3 className='text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black'>{title}</h3>
                <p className='text-2xl leading-9 font-light text-gray-900'>OSO reads through thousands of websites in seconds, so you don’t have to waste time jumping between multiple sites, and delivers you a comprehensive answer.</p>
            </div>
            <div className='py-4 md:py-7 flex flex-col gap-7'>
               {children}
            </div>
        </section>
    )
}

export default Advantages