"use client";
import Link from "next/link";
import React, { useState } from "react";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import VideoThankyouModal from "@/components/VideoThankyouModal";

const ThankYouViewThree = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                We're thrilled to have you onboard!
              </h1>
              <p className="text-2xl mt-4 mb-8 font-light text-gray-800">
                You've joined us early, before the buzz and the viral explosion.
                To show our appreciation for your trust in us, we're offering
                early supporters the chance to get pre-release access to OSO
                Uncensored Chat.
                <br /> <br />
                <span className="text-gray-800 text-base font-semibold">
                  Special Perks 
                </span>
                <br /> <br />
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
                  href="/"
                  className="theme-btn2 mx-auto !bg-white !text-purple !border-2"
                >
                  Claim Offer
                </Link>
              </div>
            </div>
            <div>
              <Video
                videoId="FpWF0i0vxGs"
                openModal={openModal}
                isOpen={isOpen}
                modalValue={false}
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
