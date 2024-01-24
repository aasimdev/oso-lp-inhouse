"use client";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="bg-white h-screen flex flex-col space-y-12 justify-center items-center">
      <Image src={"/assets/logo/oso.png"} alt="logo" width={93} height={128} />
      <div className="loading-dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
};

export default Loader;
