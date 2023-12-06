"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../common/navigation/Menu";
import { useMenu } from "@/context/MenuContext";
import { useFormik } from "formik";
import {
  usePathname,
  useRouter,
  useParams,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { detectDevice } from "../DeviceDetector/DeviceDetector";

const Header = () => {
  const { showSidebar, navigationHandler } = useMenu("");
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hform, setHForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userDevice, setUserDevice] = useState("Unknown");
  const honeypotRef = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const ac_tag_id = searchParams.get("ac_tag_id") || "";

  const header = useRef();
  const formId = "headerFormId";
  const userLang = "eng";
  const openFormHandler = () => {
    setShowMessage(false);
    setErrorMessage(false);
    setHForm(true);
  };

  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (data) => {
      if (honeypotRef.current.value) {
        console.error("Bot detected!");
        return;
      }
      const token = await executeRecaptcha();

      let referralData;
      window.rewardful("ready", () => {
        if (Rewardful.referral) {
          referralData = Rewardful.referral;
        }
      });

      const referral = data.referral || referralData;

      if (token) {
        console.log("referel------", referral);
        await addWaitlistContact(
          data.email,
          token,
          ac_tag_id,
          formId,
          userLang,
          userDevice,
          referral
        );
      } else {
        console.error("reCAPTCHA verification failed");
      }
    },
  });

  async function addWaitlistContact(
    email,
    token,
    ac_tag_id,
    formId,
    userLang,
    userDevice,
    referral
  ) {
    setIsLoading(true);

    const res = await fetch("/api/create-contact", {
      method: "POST",
      body: JSON.stringify({
        email,
        token,
        ac_tag_id,
        formId,
        userLang,
        userDevice,
        pathname,
        referral,
      }),
    });

    const resData = await res.json();

    if (res.status === 200) {
      // setShowMessage(true);
      setIsLoading(false);
      setHForm(false);
      form.setValues({ email: "" });
      router.push(`${resData.redirect}?email=` + email);
      localStorage.removeItem("submitedURL");
      localStorage.setItem("submitedURL", pathname);
    } else if (res.status === 422) {
      setIsLoading(false);
      setHForm(false);
      setShowMessage(true);
      // id: '3550',

      form.setValues({ email: "" });
    } else {
      setIsLoading(false);
      setHForm(false);
      setErrorMessage(true);
      form.values.email = "";
    }
  }

  useEffect(() => {
    const height = header.current.clientHeight;
    const handleScroll = () => {
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const detectedDevice = detectDevice();
    setUserDevice(detectedDevice);
  }, []);

  return (
    <>
      <div className="bg-black text-center py-4 sm:py-2 px-0 sm:px-6">
        <div className="text-white text-sm sm:text-sm">
          <strong>OSO is Live🔥.</strong> {" "}
          <span className="block sm:inline">
            <Link
              className="underline"
              href="https://l.oso.ai/NewUser"
              target="_blank"
            >
              Try it out here
            </Link>
            
          </span>
        </div>
      </div>

      <header
        className={`bg-white z-30 transition-shadow duration-300 ${
          pathname === "/dmca-policy"
            ? "sticky top-0"
            : pathname === "/privacy-policy"
            ? "sticky top-0"
            : pathname === "/terms-of-service"
            ? "sticky top-0"
            : null
        }`}
        ref={header}
      >
        <nav className="flex justify-between items-center md:flex-nowrap flex-wrap px-6 py-4 mx-auto max-w-6xl">
          <Link href="/">
            <Image
              src={"/assets/logo/oso.png"}
              alt="logo"
              width={56}
              height={80}
              className="w-10 sm:w-14"
            />
          </Link>
          {pathname !== "/thank-you" && (
            <div className="flex items-center gap-6">
              {/* <form
                onSubmit={form?.handleSubmit}
                className="hidden sm:flex gap-2 items-center"
                data-rewardful="true"
              >
                {hform && (
                  <>
                    <input
                      className="hidden absolute w-0 h-0 overflow-hidden"
                      type="text"
                      tabIndex="-1"
                      value=""
                      ref={honeypotRef}
                      autoComplete="off"
                    />
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      className="py-4 px-6 h-12 text-base text-black rounded-lg border border-purple w-[300px] placeholder:text-gray-100 focus:outline-none"
                      placeholder="Enter your email"
                      onChange={form?.handleChange}
                      onBlur={form?.handleBlur}
                      value={form?.values.email}
                    />
                  </>
                )}

                {showMessage && (
                  <p className="text-gray-800 text-base">
                    Your email is already on the waitlist
                  </p>
                )}
                {errorMessage && (
                  <p className="text-gray-800 text-base">
                    Something is wrong, please try again
                  </p>
                )}

                <button
                  type={hform ? "submit" : "button"}
                  className="!py-[11px] !px-[23.25px] !text-base !w-[137px] theme-btn"
                  onClick={openFormHandler}
                >
                  {!isLoading ? (
                    "Join Waitlist"
                  ) : (
                    <svg
                      class="animate-spin h-6 w-6 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                </button>
              </form> */}

              <Link href="https://l.oso.ai/NewUser" target="_blank" className="!py-[11px] !px-[23.25px] !text-base !w-[137px] theme-btn">Try OSO</Link>

              {showSidebar ? (
                <button
                  className="icon-btn w-12 h-12 flex items-center justify-center"
                  onClick={navigationHandler}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="black"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="icon-btn w-12 h-12 flex items-center justify-center"
                  onClick={navigationHandler}
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                      fill="black"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </nav>
      </header>
      <Menu isOpen={showSidebar} onClose={navigationHandler} />
    </>
  );
};

export default Header;
