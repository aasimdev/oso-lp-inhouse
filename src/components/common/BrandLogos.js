import Image from "next/image";
import React from "react";
import NewsLetter from "../news-letter";

const BrandLogos = () => {
  const brandImages = [
    { title: "bbcnews", path: "bbcnews.svg", height: 70, width: 113 },
    { title: "theguardian", path: "theguardian.svg", height: 70, width: 149 },
    { title: "techcrunch", path: "techcrunch.svg", height: 70, width: 97 },
    {
      title: "financialtimes",
      path: "financialtimes.svg",
      height: 70,
      width: 199,
    },
    { title: "theverge", path: "theverge.svg", height: 70, width: 169 },
    { title: "fortune", path: "fortune.svg", height: 70, width: 169 },
    { title: "vector", path: "vector.svg", height: 70, width: 89 },
    {
      title: "travelleisure",
      path: "travelleisure.svg",
      height: 70,
      width: 149,
    },
    {
      title: "businessinsider",
      path: "businessinsider.svg",
      height: 70,
      width: 149,
    },
    { title: "espn", path: "espn.svg", height: 70, width: 129 },
    {
      title: "yahoofinance",
      path: "yahoofinance.svg",
      height: 70,
      width: 149,
    },
    { title: "darknet", path: "darknet.svg", height: 70, width: 149 },
  ];
  return (
    <section className="px-6 mx-auto max-w-6xl">
      <div className="md:py-16 py-12 md:text-center text-start">
        <h3 className="text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black mb-2">
          150,000+ News Sources
        </h3>
      </div>
      <div className="flex gap-2 flex-wrap md:justify-center justify-start py-6">
        {brandImages.map((image) => (
          <Image
            key={image.title}
            src={`/assets/images/brandlogos/${image.path}`}
            width={image.width}
            height={image.height}
            alt={`${image.title} logo`}
            layout="fixed"
          />
        ))}
      </div>
      <div className="px-6 py-6 md:py-12 mx-auto max-w-6xl text-center">
        <NewsLetter
          label={`Join Waitlist`}
          arrowIcon
          formId={"TestimonialFormId"}
        />
      </div>
    </section>
  );
};
export default BrandLogos;