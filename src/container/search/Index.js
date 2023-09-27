"use client";
import Video from "@/components/Video";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";
import Testimonials from "@/components/testimonials/Index";
import React from "react";

import webImage from "../../../public/assets/images/updated.png";
import SecondPhone from "../../../public/assets/images/mobilephone.png";
import UpdatePhone from "../../../public/assets/images/updatePhones.png"
import UpdatePhone2 from "../../../public/assets/images/updatePhone-2.png"

import FAQ from "@/components/FAQ/Index";
import Comparison from "@/components/search/comparison/Index";

const SearchView = () => {
    return (
        <>
            <Banner
                title="Experience the Future of Search with OSO"
                description="Find what you’re looking for faster by letting OSO do the research for you."
            />
            
            <Testimonials />

            <Advantages title="Advantages of OSO Search">
                <AdvantageCard
                    title="Up to Date"
                    description="Unlike AI chatbots that have a set knowledge cutoff, <span class='font-medium'>OSO’s AI Search ensures you receive the most recent</span> and relevant information."
                    borderLess={true}
                    image={webImage}
                    imageWidth="532"
                    className='absolute'
                    imageHeight="427"
                    color="egg-blue"
                />
                <AdvantageCard
                    title="Uncensored"
                    description="OSO believes in <span class='font-medium'>free speech</span> and <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
                    borderLess={false}
                    image={UpdatePhone}
                    image2={SecondPhone}
                    imageWidth="357"
                    imageHeight="507"
                    color="electric-blue"
                />
                <AdvantageCard
                    title="Secure"
                    description="With OSO, there's <span class='font-medium'>no need to venture into potentially harmful sites</span> since the searching is done for you."
                    borderLess={false}
                    image={UpdatePhone2}
                    imageWidth="357"
                    imageHeight="507"
                    color="vivid-blue"
                />
            </Advantages>

            <Comparison />

            <FAQ />
        </>
    );
};

export default SearchView;
