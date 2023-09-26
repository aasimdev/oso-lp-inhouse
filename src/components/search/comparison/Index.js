import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from '@/components/common/Button';
import { useMediaQuery } from 'react-responsive';

const Comparison = () => {
    const revealed = useRef([]);
    const revealedchat = useRef([]);
    const comparison = useRef();
    const mobileRef = useRef(null);
    const imageOSORef = useRef(null);
    const imageChatGPTRef = useRef(null);
    const phoneB = useRef(null);
    const images = [
        '/assets/images/oso-default.png',
        '/assets/images/oso-scroll.png',
        '/assets/images/chatgpt-default.png',
        '/assets/images/chatgpt-scroll.png'
    ];
    const isDesktop = useMediaQuery({ query: '(min-width: 720px)' });
    const [currentIndex, setCurrentIndex] = useState(isDesktop ? 0 : 2);
    const [currentChatIndex, setCurrentChatIndex] = useState(isDesktop ? 2 : 3);

    const [isMobile, setIsMobile] = useState(false); // Default to false initially

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 720);
    };

    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
            // Add event listener when component mounts
            updateIsMobile();
            window.addEventListener('resize', updateIsMobile);

            // Remove event listener when component unmounts
            return () => {
                window.removeEventListener('resize', updateIsMobile);
            };
        }
    }, []);


    useEffect(() => {

        const revealedElements = revealed.current;
        const revealedChatElements = revealedchat.current;

        // Text Animation Toggle
        const textToggle = (active, target) => {
            if (active) {
                gsap.to(target, {
                    color: 'black',
                    duration: 0.4,
                });
            } else {
                gsap.to(target, {
                    color: '#cccccc',
                    duration: 0.4,
                });
            }
        }

        if (!isMobile) {
            ScrollTrigger.create({
                trigger: comparison.current,
                start: 'top-=150px',
                end: '15%',
                scrub: 1,
                toggleActions: 'play reverse play reverse',
                onToggle: ({ isActive }) => {
                    textToggle(isActive, revealedElements);
                },
            });

            ScrollTrigger.create({
                trigger: comparison.current,
                start: 'top+=150px',
                end: 'bottom-=40%',
                scrub: 1,
                toggleActions: 'play reverse play reverse',
                onToggle: ({ isActive }) => {
                    textToggle(isActive, revealedChatElements);
                },
            });

            gsap.to(
                imageOSORef.current, {
                scrollTrigger: {
                    trigger: comparison.current,
                    start: "top-=150px",
                    end: "15%",
                    toggleActions: "play reverse play reverse",
                    onToggle: ({ isActive }) => {
                        if (isActive) {
                            setCurrentIndex(1);
                        } else {
                            setCurrentIndex(0);
                        }
                    },
                }
            });

            gsap.to(
                imageChatGPTRef.current, {
                scrollTrigger: {
                    trigger: comparison.current,
                    start: 'top+=150px',
                    end: 'bottom-=40%',
                    toggleActions: "play reverse play reverse",
                    onToggle: ({ isActive }) => {
                        if (isActive) {
                            setCurrentChatIndex(3);
                        } else {
                            setCurrentChatIndex(2);
                        }
                    },
                }
            });


        } else {
            const container = mobileRef.current;
            const containerB = phoneB.current;

            let phones = gsap.utils.toArray(".panel");
            let phonesB = gsap.utils.toArray(".panelB");

            gsap.to(phones, {
                xPercent: -100 * (phones.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (phones.length - 1),
                    start: "top-=11%",
                    end: "bottom",
                    pinSpacing: 2
                }
            });


            gsap.to(phonesB, {
                xPercent: -100 * (phonesB.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerB,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (phonesB.length - 1),
                    start: "top-=11%",
                }
            });


        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
        };

    }, [isMobile]);





    return (
        <section className='px-6 mx-auto max-w-6xl overflow-hidden' ref={comparison}>
            <div className='py-16 md:text-center text-start'>
                <h3 className='md:text-5xl text-[40px] leading-tight font-bold text-black md:leading-[80px]'>How people are using OSO Search</h3>
            </div>
            <div className='md:pt-24 pt-8 flex flex-col gap-7'>

                <div className="md:flex md:flex-nowrap flex-wrap justify-between">
                    <div className="w-full sm:w-[346px] md:my-28 flex flex-col gap-16 md:gap-24 flex-grow-0 flex-shrink-0 basis-auto">
                        <div className='flex flex-col gap-2'>
                            <h4 className="text-[32px] font-medium leading-tight sm:text-[#CCCCCC]" ref={(el) => (revealed.current[0] = el)}>Stay Updated</h4>
                            <p className="text-2xl leading-8 font-light sm:text-[#CCCCCC]" ref={(el) => (revealed.current[1] = el)}>
                                There’s no need to venture into potentially harmful sites since
                                the searching is done for you.
                            </p>
                        </div>
                        {!isDesktop &&
                            <div className="flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4" ref={mobileRef}>
                                <div className="flex flex-col gap-6 panel">
                                    <p className="text-center text-[21px] font-medium text-black">OSO </p>
                                    <div className='relative '>
                                        <Image
                                            src={images[0]}
                                            ref={imageOSORef}
                                            width={303}
                                            height={616}
                                            alt="OSO"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 panel">
                                    <p className="text-center text-[21px] font-medium text-black"> ChatGpt</p>
                                    <Image
                                        src={images[1]}
                                        ref={imageChatGPTRef}
                                        width={303}
                                        height={619}
                                        alt="ChatGtp"
                                    />
                                </div>
                            </div>
                        }
                        <div className='flex flex-col gap-2'>
                            <h4 className="text-[32px] font-medium leading-tight sm:text-[#CCCCCC]" ref={(el) => (revealedchat.current[0] = el)}>Plan your event & travel</h4>
                            <p className="text-2xl leading-8 font-light sm:text-[#CCCCCC]" ref={(el) => (revealedchat.current[1] = el)}>
                                Wondering about the Grand Prix in Las Vegas? from dates to ticket
                                pricing and seat recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4 md:mt-0 mt-16" ref={phoneB}>
                        <div className="flex flex-col gap-6 panelB">
                            <p className="text-center text-[21px] font-medium text-black">OSO </p>
                            <div className='relative '>
                                <Image
                                    src={images[currentIndex]}
                                    ref={imageOSORef}
                                    width={303}
                                    height={616}
                                    alt="OSO"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 panelB">
                            <p className="text-center text-[21px] font-medium text-black"> ChatGpt</p>
                            <Image
                                src={images[currentChatIndex]}
                                ref={imageChatGPTRef}
                                width={303}
                                height={619}
                                alt="ChatGtp"
                            />
                        </div>
                    </div>
                </div>
                {isDesktop &&
                    <div className="flex justify-center items-center pt-24">
                        <Button
                            label="Join Waitlist"
                            arrowIcon={true}
                            link="https://eijfn1o56i0.typeform.com/to/szT5l8hI?typeform-source=oso.ai"
                            target="_blank"
                        />
                    </div>
                }
            </div>
        </section>
    )
}

export default Comparison