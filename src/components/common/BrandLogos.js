import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewsLetter from "../news-letter";
import { brandImages, mobileBrandImages } from "@/constant/news";
import Button from "./Button";

const BrandLogos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 425) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const newsBrandImages = isMobile ? mobileBrandImages : brandImages;

  return (
    <section className="px-6 mx-auto max-w-6xl">
      <div className="md:py-16 py-12 md:text-center text-start">
        <h3 className="text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black mb-2">
          150,000+ News Sources
        </h3>
      </div>
      <div className="flex gap-2 flex-wrap md:justify-center justify-start py-6">
        {newsBrandImages.map((image) => (
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
      <div className="py-6 md:py-12 mx-auto max-w-6xl text-center">
        {/* <NewsLetter
          label={`Join Waitlist`}
          arrowIcon
          formId={"TestimonialFormId"}
        /> */}
        <Button label="Try OSO" arrowIcon={true} link="https://l.oso.ai/prod" target="_blank"/>
      </div>
    </section>
  );
};
export default BrandLogos;
