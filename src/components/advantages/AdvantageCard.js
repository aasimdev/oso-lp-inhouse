import Image from "next/image";

const AdvantageCard = ({
  title,
  description,
  borderLess,
  image2,
  image,
  imageWidth,
  imageHeight,
  color,
  className,
}) => {
  return (
    <div
      className={`rounded-2xl lg:p-16 p-8 relative overflow-hidden lg:min-h-[571px] h-[639px] md:h-full  z-0 ${
        color ? color : "default"
      }-box`}
    >
      <div className="flex flex-col lg:flex-row justify-between">
        <div
          className={`flex gap-4 md:gap-6 flex-col max-w-md ${
            borderLess ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h5 className="text-black lg:text-5xl text-3xl font-bold">{title}</h5>
          <p
            className="text-gray-800 text-2xl font-light"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div
          className={`lg:absolute bottom-0 mt-6 lg:mt-0 -mb-8 lg:mb-0  ${className} ${
            borderLess
              ? "lg:order-1 bottom-0 right-0 lg:me-0 -me-8"
              : "lg:order-2 right-16 "
          }`}
        >
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            title={title}
            alt={title}
            className={`mx-auto ${image2 && "seondImg"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
