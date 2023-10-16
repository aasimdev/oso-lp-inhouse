import NewsLetter from "@/components/news-letter"
import React from "react"

const Comparisons = ({ title, children }) => {
  return (
    <section>
      <div className='px-6 mx-auto max-w-6xl'>
        <div className='py-16 md:text-center text-start'>
          <h3 className='md:text-5xl text-[40px] leading-tight font-bold text-black md:leading-[80px]'>
            {/* How people are using OSO Search */}
            {title}
          </h3>
        </div>
        {children}
        <div className='md:flex justify-center items-center pb-6 sm:pb-0 pt-20 sm:pt-[100px] flex-col'>
          <NewsLetter
            label='Join Waitlist'
            arrowIcon={true}
            formId={"ComparisonFormId"}
          />
        </div>
      </div>
    </section>
  )
}
export default Comparisons
