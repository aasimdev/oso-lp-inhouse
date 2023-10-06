import React, { useState } from 'react'
import Question from './Question'

const FAQ = () => {

    const accordionData = [
        {
            id: 1,
            question: "Benefits of OSO?",
            answer: `<ul class="list-disc p-[revert] space-y-6">

            <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Enhanced Results:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

            <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Up to date & un-biased:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>

            <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Boosted Productivity:</span> OSO does the time consuming and often boring tasks, such as reading through websites to find small bits of information you actually need, freeing you to concentrate on tasks that leverage unique human skills and creativity.</li>
            </ul>`
        },
        {
            id: 2,
            question: "How is OSO Search different from other AI",
            answer: `<p class="text-2xl leading-9 font-light text-gray-900">While most AI applications rely on chatGPT or existing AI solutions that have severe limitations, OSO has created its own AI technology that provides a more robust and useful user experience.</p>`
        },
        {
            id: 3,
            question: "What is the Pricing?",
            answer: `<p class="text-2xl leading-9 font-light text-gray-900">You can use OSO Free forever with certain usage limitations such as 50 searches and chats per day. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`
        },

        {
            id: 4,
            question: "How do I get started?",
            answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
        }
    ];
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (accordionId) => {
      if (openAccordionId === accordionId) {
        setOpenAccordionId(null); // Close the currently open accordion
      } else {
        setOpenAccordionId(accordionId); // Open the clicked accordion
      }
    };
    return (
        <section className='px-6 mx-auto max-w-6xl'>
            <div className='md:text-center text-satrt pt-16 md:pt-24'>
                <h3 className='md:text-5xl text-[40px] font-extrabold text-black md:leading-[64px] leading-tight'>Frequently Asked Questions</h3>
            </div>
            <div className='mt-16 md:mt-20 flex flex-col gap-4 md:gap-7'>

                {accordionData.map((item) => (
                    <Question
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openAccordionId === item.id}
                        toggleAccordion={() => toggleAccordion(item.id)}
                    />
                ))}
            </div>
        </section>
    )
}

export default FAQ