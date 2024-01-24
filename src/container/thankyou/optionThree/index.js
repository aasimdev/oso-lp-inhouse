"use client";
import Link from "next/link";
import { useState } from "react";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import VideoThankyouModal from "@/components/VideoThankyouModal";

const ThankYouViewThree = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-purple-400">
        <div className="px-6 mx-auto max-w-6xl pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:h-[480px]">
              <h1 className="text-[32px] font-bold">
                We&apos;re thrilled to have you onboard!
              </h1>
              <p className="text-2xl mt-4 mb-8 font-light text-gray-800">
                You&apos;ve joined us early, before the buzz and the viral
                explosion. To show our appreciation for your trust in us,
                we&apos;re offering early supporters the chance to get{" "}
                <span className="font-medium">pre-release access</span> to OSO
                Uncensored Chat.
                <br /> <br />
                <span className="text-gray-800 text-base font-semibold">
                  Special Perks 
                </span>
                <br />
                <span className="text-gray-800 text-base font-normal">
                  💼 Monthly subscription at $8 (regularly $20/month).
                  <br />
                  🚀 Pre-release access to OSO Uncensored.
                  <br />
                  🌟 Join a private tester community with direct OSO team
                  access.
                </span>
              </p>
              <div className="flex flex-col-reverse gap-2">
                <Link
                  href="https://buy.stripe.com/5kA5l36oP3wH2OY146"
                  className="theme-btn2 mx-auto !bg-white !text-purple !border-2"
                >
                  <span> Claim Offer</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <Video
                videoId="FpWF0i0vxGs"
                openModal={openModal}
                isOpen={isOpen}
                modalValue={true}
                variant={"three"}
              />
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
          <VideoThankyouModal videoId="FpWF0i0vxGs" />
        </ModalComponent>
      )}
    </>
  );
};

export default ThankYouViewThree;
