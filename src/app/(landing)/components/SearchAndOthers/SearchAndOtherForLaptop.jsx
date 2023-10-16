import React from "react"
import { SeenOnCard } from "../SeenOnCard"

const SearchAndOtherForLaptop = () => {
  return (
    <div className='hidden lg:flex flex-row justify-between'>
      <SeenOnCard
        className={
          "bg-gradient-to-b from-[#ffffff00] to-[#8CDCD0] hover:from-[#ffffff00] hover:to-[#58C2B1]"
        }
        title={"OSO Search"}
        learnMore={
          <>
            <a href='#' type='submit' className={`learn-btn cursor-pointer }`}>
              <span>Learn more</span>

              <svg
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='16.5' cy='16' r='16' fill='white' />
                <path
                  d='M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z'
                  fill='black'
                />
              </svg>
            </a>
          </>
        }
        answerForOso={
          <div className='bg-black text-white p-4 rounded-[20px] mt-16'>
            <p className='text-2xl font-medium '>
              🌍Top Sushi Places in Prague
            </p>
            <br />
            <br />
            <p className='text-2xl font-medium '>
              Yami Sushi House: A popular sushi spot praised for its exquisite
              sushi...
            </p>
          </div>
        }
      />
      <SeenOnCard
        title={"Others "}
        className={"gradient-seen-on-gray"}
        answerForOso={
          <div className='bg-black text-white p-4 rounded-[20px] mt-16'>
            <p className='text-2xl font-medium '>
              don&apos;t have access to real-time information or current
              restaurant reviews, as my knowledge was last updated in September
              2021. However, I can suggest some popular sushi places in Prague
              as of my last update
            </p>
          </div>
        }
      />
    </div>
  )
}

export default SearchAndOtherForLaptop
