"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import VideoThankyouModal from "@/components/VideoThankyouModal";

const ThankYouViewTwo = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
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

  return (
    <>
      <section className="bg-gradient-to-b from-purple-400">
        <div className="px-6 mx-auto max-w-6xl pt-20">
          <div className="flex flex-col md:justify-center items-center gap-6 mx-2">
            <div className="hidden sm:inline-block py-2 max-w-[347px] h-[231px]">
              <Video
                videoId="FpWF0i0vxGs"
                openModal={openModal}
                isOpen={isOpen}
                modalValue={true}
                variant={"two"}
              />
            </div>
            <div>
              <div className="w-[532px] text-start md:text-center font-extrabold text-black text-[32px]">
                We're thrilled to have you onboard!
              </div>
              <div className="w-[532px] text-start md:text-center text-gray-800 text-2xl font-light">
                Stay Connected with the OSO Community.
              </div>
            </div>
            <div className="flex flex-row gap-1 md:gap-4">
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3819_3779)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.5 0.299805H20.5V3.10355H0.5V0.299805ZM0.5 10.5267H20.5V23.1333L10.4979 17.5234L0.5 23.1333V10.5267ZM0.5 5.41324H20.5V8.21699H0.5V5.41324Z"
                        fill="#8E33FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3819_3779">
                        <rect
                          width="20"
                          height="22.8335"
                          fill="white"
                          transform="translate(0.5 0.299805)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="37"
                    viewBox="0 0 33 37"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3808_5963)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.875 0.71875H32.125V5.09961H0.875V0.71875ZM0.875 16.6983H32.125V36.3961L16.4968 27.6306L0.875 36.3961V16.6983ZM0.875 8.7085H32.125V13.0894H0.875V8.7085Z"
                        fill="#8E33FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3808_5963">
                        <rect
                          width="31.25"
                          height="35.6774"
                          fill="white"
                          transform="translate(0.875 0.71875)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M29.3334 16.0812C29.3334 8.67233 23.3645 2.66699 16.0001 2.66699C8.63564 2.66699 2.66675 8.67233 2.66675 16.0812C2.66675 22.7781 7.54142 28.3274 13.9165 29.3337V19.9594H10.5316V16.0803H13.9165V13.1257C13.9165 9.76388 15.9067 7.9061 18.953 7.9061C20.4107 7.9061 21.9379 8.16833 21.9379 8.16833V11.4697H20.2552C18.5992 11.4697 18.0836 12.5043 18.0836 13.5657V16.0812H21.7814L21.1903 19.9585H18.0836V29.3337C24.4587 28.3274 29.3334 22.7781 29.3334 16.0812Z"
                      fill="#8E33FF"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="50"
                    viewBox="0 0 51 50"
                    fill="none"
                  >
                    <path
                      d="M46.3332 25.1267C46.3332 13.5503 37.0068 4.16699 25.4998 4.16699C13.9929 4.16699 4.6665 13.5503 4.6665 25.1267C4.6665 35.5906 12.2832 44.2614 22.2443 45.8337V31.1864H16.9554V25.1253H22.2443V20.5087C22.2443 15.2559 25.354 12.3531 30.1137 12.3531C32.3915 12.3531 34.7776 12.7628 34.7776 12.7628V17.9212H32.1484C29.5609 17.9212 28.7554 19.5378 28.7554 21.1962V25.1267H34.5332L33.6096 31.185H28.7554V45.8337C38.7165 44.2614 46.3332 35.5906 46.3332 25.1267Z"
                      fill="#8E33FF"
                    />
                  </svg>
                )}
              </button>
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3582_22901)">
                      <path
                        d="M0.55827 0L9.8244 13.2374L0.499756 24H2.59836L10.7621 14.5772L17.3581 24H24.4998L14.7123 10.018L23.3916 0H21.293L13.7746 8.67822L7.6999 0H0.55827ZM3.64442 1.6516H6.9253L21.4131 22.3481H18.1322L3.64442 1.6516Z"
                        fill="#8E33FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3582_22901">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3547_10667)">
                      <path
                        d="M0.578019 0L12.9329 17.6499L0.5 32H3.29814L14.1831 19.4363L22.9778 32H32.5L19.45 13.3573L31.0224 0H28.2243L18.1998 11.571L10.1002 0H0.578019ZM4.69289 2.20214H9.0674L28.3845 29.7975H24.01L4.69289 2.20214Z"
                        fill="#8E33FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3547_10667">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 4C12.7408 4 12.3328 4.0136 11.0528 4.072C9.7752 4.1304 8.9024 4.3336 8.1392 4.6304C7.3392 4.9312 6.6136 5.4032 6.0136 6.0144C5.40338 6.61371 4.93109 7.3388 4.6296 8.1392C4.3344 8.9024 4.1304 9.776 4.072 11.0536C4.0144 12.3328 4 12.74 4 16C4 19.26 4.0136 19.6672 4.072 20.9472C4.1304 22.2248 4.3336 23.0976 4.6304 23.8608C4.9312 24.6608 5.4032 25.3864 6.0144 25.9864C6.61372 26.5966 7.33881 27.0689 8.1392 27.3704C8.9024 27.6664 9.7752 27.8696 11.0528 27.928C12.3328 27.9864 12.7408 28 16 28C19.2592 28 19.6672 27.9864 20.9472 27.928C22.2248 27.8696 23.0976 27.6664 23.8608 27.3696C24.6608 27.0688 25.3864 26.5968 25.9864 25.9856C26.5966 25.3863 27.0689 24.6612 27.3704 23.8608C27.6664 23.0976 27.8696 22.2248 27.928 20.9472C27.9864 19.6672 28 19.2592 28 16C28 12.7408 27.9864 12.3328 27.928 11.0528C27.8696 9.7752 27.6664 8.9024 27.3696 8.1392C27.0683 7.33845 26.596 6.61306 25.9856 6.0136C25.3863 5.40338 24.6612 4.93109 23.8608 4.6296C23.0976 4.3344 22.224 4.1304 20.9464 4.072C19.6672 4.0144 19.26 4 16 4ZM16 6.1624C19.204 6.1624 19.584 6.1744 20.8496 6.232C22.0192 6.2856 22.6544 6.48 23.0776 6.6456C23.6376 6.8624 24.0376 7.1232 24.4576 7.5424C24.8776 7.9624 25.1376 8.3624 25.3544 8.9224C25.5192 9.3456 25.7144 9.9808 25.768 11.1504C25.8256 12.416 25.8376 12.796 25.8376 16C25.8376 19.204 25.8256 19.584 25.768 20.8496C25.7144 22.0192 25.52 22.6544 25.3544 23.0776C25.1623 23.5988 24.8559 24.0704 24.4576 24.4576C24.0705 24.856 23.5989 25.1624 23.0776 25.3544C22.6544 25.5192 22.0192 25.7144 20.8496 25.768C19.584 25.8256 19.2048 25.8376 16 25.8376C12.7952 25.8376 12.416 25.8256 11.1504 25.768C9.9808 25.7144 9.3456 25.52 8.9224 25.3544C8.40116 25.1623 7.92961 24.8559 7.5424 24.4576C7.14414 24.0704 6.8377 23.5988 6.6456 23.0776C6.4808 22.6544 6.2856 22.0192 6.232 20.8496C6.1744 19.584 6.1624 19.204 6.1624 16C6.1624 12.796 6.1744 12.416 6.232 11.1504C6.2856 9.9808 6.48 9.3456 6.6456 8.9224C6.8624 8.3624 7.1232 7.9624 7.5424 7.5424C7.92955 7.14404 8.40113 6.83758 8.9224 6.6456C9.3456 6.4808 9.9808 6.2856 11.1504 6.232C12.416 6.1744 12.796 6.1624 16 6.1624Z"
                      fill="#8E33FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 20.0037C15.4742 20.0037 14.9536 19.9002 14.4678 19.6989C13.982 19.4977 13.5406 19.2028 13.1688 18.831C12.797 18.4592 12.502 18.0178 12.3008 17.532C12.0996 17.0462 11.996 16.5255 11.996 15.9997C11.996 15.4739 12.0996 14.9532 12.3008 14.4675C12.502 13.9817 12.797 13.5403 13.1688 13.1685C13.5406 12.7967 13.982 12.5017 14.4678 12.3005C14.9536 12.0993 15.4742 11.9957 16 11.9957C17.062 11.9957 18.0804 12.4176 18.8313 13.1685C19.5822 13.9194 20.004 14.9378 20.004 15.9997C20.004 17.0616 19.5822 18.0801 18.8313 18.831C18.0804 19.5819 17.062 20.0037 16 20.0037ZM16 9.83172C14.3642 9.83172 12.7953 10.4816 11.6386 11.6383C10.4819 12.795 9.83203 14.3639 9.83203 15.9997C9.83203 17.6356 10.4819 19.2044 11.6386 20.3612C12.7953 21.5179 14.3642 22.1677 16 22.1677C17.6359 22.1677 19.2047 21.5179 20.3615 20.3612C21.5182 19.2044 22.168 17.6356 22.168 15.9997C22.168 14.3639 21.5182 12.795 20.3615 11.6383C19.2047 10.4816 17.6359 9.83172 16 9.83172ZM23.9624 9.71972C23.9624 10.1064 23.8088 10.4773 23.5354 10.7507C23.262 11.0241 22.8911 11.1777 22.5044 11.1777C22.1177 11.1777 21.7469 11.0241 21.4735 10.7507C21.2 10.4773 21.0464 10.1064 21.0464 9.71972C21.0464 9.33303 21.2 8.96219 21.4735 8.68876C21.7469 8.41533 22.1177 8.26172 22.5044 8.26172C22.8911 8.26172 23.262 8.41533 23.5354 8.68876C23.8088 8.96219 23.9624 9.33303 23.9624 9.71972Z"
                      fill="#8E33FF"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="50"
                    viewBox="0 0 51 50"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.5 6.25C20.4075 6.25 19.77 6.27125 17.77 6.3625C15.7738 6.45375 14.41 6.77125 13.2175 7.235C11.9675 7.705 10.8337 8.4425 9.89625 9.3975C8.94278 10.3339 8.20482 11.4669 7.73375 12.7175C7.2725 13.91 6.95375 15.275 6.8625 17.2713C6.7725 19.27 6.75 19.9062 6.75 25C6.75 30.0938 6.77125 30.73 6.8625 32.73C6.95375 34.7262 7.27125 36.09 7.735 37.2825C8.205 38.5325 8.9425 39.6662 9.8975 40.6037C10.8339 41.5572 11.9669 42.2951 13.2175 42.7663C14.41 43.2287 15.7738 43.5462 17.77 43.6375C19.77 43.7287 20.4075 43.75 25.5 43.75C30.5925 43.75 31.23 43.7287 33.23 43.6375C35.2262 43.5462 36.59 43.2287 37.7825 42.765C39.0325 42.295 40.1662 41.5575 41.1037 40.6025C42.0572 39.6661 42.7952 38.5331 43.2663 37.2825C43.7287 36.09 44.0462 34.7262 44.1375 32.73C44.2287 30.73 44.25 30.0925 44.25 25C44.25 19.9075 44.2287 19.27 44.1375 17.27C44.0462 15.2738 43.7287 13.91 43.265 12.7175C42.7943 11.4663 42.0563 10.3329 41.1025 9.39625C40.1661 8.44278 39.0331 7.70482 37.7825 7.23375C36.59 6.7725 35.225 6.45375 33.2288 6.3625C31.23 6.2725 30.5938 6.25 25.5 6.25ZM25.5 9.62875C30.5063 9.62875 31.1 9.6475 33.0775 9.7375C34.905 9.82125 35.8975 10.125 36.5588 10.3837C37.4338 10.7225 38.0588 11.13 38.715 11.785C39.3713 12.4412 39.7775 13.0662 40.1162 13.9412C40.3738 14.6025 40.6787 15.595 40.7625 17.4225C40.8525 19.4 40.8713 19.9937 40.8713 25C40.8713 30.0063 40.8525 30.6 40.7625 32.5775C40.6787 34.405 40.375 35.3975 40.1162 36.0588C39.8162 36.8732 39.3373 37.61 38.715 38.215C38.1101 38.8375 37.3733 39.3163 36.5588 39.6162C35.8975 39.8738 34.905 40.1787 33.0775 40.2625C31.1 40.3525 30.5075 40.3713 25.5 40.3713C20.4925 40.3713 19.9 40.3525 17.9225 40.2625C16.095 40.1787 15.1025 39.875 14.4412 39.6162C13.6268 39.3162 12.89 38.8373 12.285 38.215C11.6627 37.6099 11.1839 36.8731 10.8837 36.0588C10.6262 35.3975 10.3212 34.405 10.2375 32.5775C10.1475 30.6 10.1288 30.0063 10.1288 25C10.1288 19.9937 10.1475 19.4 10.2375 17.4225C10.3212 15.595 10.625 14.6025 10.8837 13.9412C11.2225 13.0662 11.63 12.4412 12.285 11.785C12.8899 11.1626 13.6268 10.6837 14.4412 10.3837C15.1025 10.1262 16.095 9.82125 17.9225 9.7375C19.9 9.6475 20.4937 9.62875 25.5 9.62875Z"
                      fill="#8E33FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.4998 31.2561C24.6782 31.2561 23.8647 31.0942 23.1056 30.7798C22.3466 30.4654 21.6569 30.0046 21.076 29.4236C20.495 28.8427 20.0342 28.153 19.7198 27.394C19.4054 26.6349 19.2436 25.8214 19.2436 24.9998C19.2436 24.1782 19.4054 23.3647 19.7198 22.6056C20.0342 21.8466 20.495 21.1569 21.076 20.576C21.6569 19.995 22.3466 19.5342 23.1056 19.2198C23.8647 18.9054 24.6782 18.7436 25.4998 18.7436C27.1591 18.7436 28.7504 19.4027 29.9236 20.576C31.0969 21.7492 31.7561 23.3405 31.7561 24.9998C31.7561 26.6591 31.0969 28.2504 29.9236 29.4236C28.7504 30.5969 27.1591 31.2561 25.4998 31.2561ZM25.4998 15.3623C22.9438 15.3623 20.4924 16.3777 18.6851 18.1851C16.8777 19.9924 15.8623 22.4438 15.8623 24.9998C15.8623 27.5558 16.8777 30.0072 18.6851 31.8145C20.4924 33.6219 22.9438 34.6373 25.4998 34.6373C28.0558 34.6373 30.5072 33.6219 32.3145 31.8145C34.1219 30.0072 35.1373 27.5558 35.1373 24.9998C35.1373 22.4438 34.1219 19.9924 32.3145 18.1851C30.5072 16.3777 28.0558 15.3623 25.4998 15.3623ZM37.941 15.1873C37.941 15.7915 37.701 16.371 37.2738 16.7982C36.8466 17.2254 36.2671 17.4654 35.6629 17.4654C35.0587 17.4654 34.4793 17.2254 34.052 16.7982C33.6248 16.371 33.3848 15.7915 33.3848 15.1873C33.3848 14.5831 33.6248 14.0037 34.052 13.5764C34.4793 13.1492 35.0587 12.9092 35.6629 12.9092C36.2671 12.9092 36.8466 13.1492 37.2738 13.5764C37.701 14.0037 37.941 14.5831 37.941 15.1873Z"
                      fill="#8E33FF"
                    />
                  </svg>
                )}
              </button>
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.8895 7.21912C28.0362 7.52721 28.9434 8.43436 29.2515 9.58112C29.8163 11.6693 29.8334 15.9996 29.8334 15.9996C29.8334 15.9996 29.8334 20.3471 29.2686 22.4181C28.9605 23.5649 28.0534 24.472 26.9066 24.7801C24.8356 25.3449 16.5001 25.3449 16.5001 25.3449C16.5001 25.3449 8.16461 25.3449 6.09358 24.7801C4.94681 24.472 4.03966 23.5649 3.73158 22.4181C3.16675 20.33 3.16675 15.9996 3.16675 15.9996C3.16675 15.9996 3.16675 11.6693 3.71446 9.59824C4.02255 8.45147 4.92969 7.54433 6.07646 7.23624C8.14749 6.67141 16.483 6.6543 16.483 6.6543C16.483 6.6543 24.8184 6.6543 26.8895 7.21912ZM20.7448 15.9996L13.83 20.0047V11.9945L20.7448 15.9996Z"
                      fill="#8E33FF"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="50"
                    viewBox="0 0 51 50"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.7333 11.281C43.5251 11.7624 44.9425 13.1798 45.4239 14.9716C46.3064 18.2343 46.3332 25.0005 46.3332 25.0005C46.3332 25.0005 46.3332 31.7934 45.4506 35.0294C44.9692 36.8212 43.5518 38.2386 41.76 38.72C38.524 39.6025 25.4998 39.6025 25.4998 39.6025C25.4998 39.6025 12.4757 39.6025 9.23968 38.72C7.44785 38.2386 6.03043 36.8212 5.54905 35.0294C4.6665 31.7666 4.6665 25.0005 4.6665 25.0005C4.6665 25.0005 4.6665 18.2343 5.5223 14.9984C6.00369 13.2065 7.4211 11.7891 9.21293 11.3077C12.4489 10.4252 25.4731 10.3984 25.4731 10.3984C25.4731 10.3984 38.4973 10.3984 41.7333 11.281ZM32.1323 25.0005L21.3278 31.2585V18.7425L32.1323 25.0005Z"
                      fill="#8E33FF"
                    />
                  </svg>
                )}
              </button>
              <button className={`px-4 py-2`}>
                {isMobile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M24.1541 8.01224C22.7176 7.07567 21.6809 5.57715 21.3574 3.83028C21.2876 3.45285 21.2492 3.06442 21.2492 2.66699H16.6646L16.6573 21.0403C16.5802 23.0978 14.8868 24.7491 12.8109 24.7491C12.1657 24.7491 11.5581 24.5878 11.0232 24.3063C9.79657 23.6608 8.95711 22.375 8.95711 20.8954C8.95711 18.7703 10.686 17.0414 12.8109 17.0414C13.2075 17.0414 13.5881 17.1069 13.948 17.2196V12.5393C13.5755 12.4886 13.197 12.4569 12.8109 12.4569C8.15789 12.4569 4.37256 16.2424 4.37256 20.8954C4.37256 23.7502 5.7989 26.2766 7.97494 27.8043C9.34558 28.7666 11.0128 29.3337 12.8109 29.3337C17.4639 29.3337 21.2492 25.5484 21.2492 20.8954V11.5786C23.0473 12.8691 25.2503 13.6297 27.6275 13.6297V9.04512C26.3469 9.04512 25.1543 8.66443 24.1541 8.01224Z"
                      fill="#8E33FF"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="50"
                    viewBox="0 0 51 50"
                    fill="none"
                  >
                    <path
                      d="M38.2406 12.5189C35.9962 11.0556 34.3762 8.71411 33.8709 5.98462C33.7617 5.3949 33.7018 4.78797 33.7018 4.16699H26.5384L26.5269 32.8752C26.4065 36.0901 23.7606 38.6703 20.5169 38.6703C19.5088 38.6703 18.5595 38.4183 17.7237 37.9784C15.807 36.9698 14.4954 34.9608 14.4954 32.6489C14.4954 29.3285 17.1968 26.6271 20.5169 26.6271C21.1367 26.6271 21.7312 26.7293 22.2936 26.9055V19.5925C21.7116 19.5132 21.1203 19.4637 20.5169 19.4637C13.2466 19.4637 7.33203 25.3786 7.33203 32.6489C7.33203 37.1095 9.56069 41.057 12.9607 43.444C15.1024 44.9476 17.7074 45.8337 20.5169 45.8337C27.7872 45.8337 33.7018 39.9191 33.7018 32.6489V18.0913C36.5113 20.1079 39.9535 21.2962 43.6678 21.2962V14.1328C41.667 14.1328 39.8035 13.538 38.2406 12.5189Z"
                      fill="#8E33FF"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="inline-block md:hidden py-2 max-w-[347px] h-[231px]">
              <Video
                videoId="FpWF0i0vxGs"
                openModal={openModal}
                isOpen={isOpen}
                modalValue={true}
                variant={"two"}
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

export default ThankYouViewTwo;
