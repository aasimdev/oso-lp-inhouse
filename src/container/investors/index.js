"use client";
import React, { useEffect } from 'react'

const InvestorsView = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <section className='py-12 md:py-20'>
            <div className="px-6 mx-auto max-w-6xl">
                <div data-tf-live="01HDEFRN8YBJNXFXFWJYAB4WWM"></div>
            </div>
        </section>
    )
}

export default InvestorsView