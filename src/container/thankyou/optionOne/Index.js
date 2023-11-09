"use client";
import Link from "next/link";
import React, { useState } from "react";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import VideoThankyouModal from "@/components/VideoThankyouModal";

const ThankYouViewOne = () => {
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
      {/* <button className="absolute z-50 right-[-200px]">test</button> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h1 className="text-[32px] font-bold">
                We&apos;re thrilled to have you onboard!
              </h1>
              <p className="text-2xl mt-4 mb-8 font-light text-gray-800">
                OSO is about to get exciting, and we don&apos;t want you or your
                friends to miss out.
                <br /> <br />
                Invite your friends to join the waitlist and{" "}
                <span className="font-semibold">
                  earn $5/month forever for each friend
                </span>{" "}
                that subscribes to OSO Pro after launch.
              </p>
              <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-6">
                <Link
                  href="/"
                  className="mx-auto outline-theme-btn"
                >
                  No thanks
                </Link>
                <Link
                  href="https://friends.oso.ai/signup"
                  target="_blank"
                  className="theme-btn mx-auto"
                >
                  <span>Invite Friends</span>
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
              />
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <>
          <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
            <VideoThankyouModal videoId="FpWF0i0vxGs" />
          </ModalComponent>
        </>
      )}
    </>
  );
};

export default ThankYouViewOne;
