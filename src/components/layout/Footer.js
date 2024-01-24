import React, { useEffect, useRef, useState } from "react";
import CallToAction from "../CallToAction";
import Image from "next/image";
import SocialIcons from "../common/SocialIcons";
import Newsletter from "../common/Newsletter";
import { useFormik } from "formik";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { detectDevice } from "../DeviceDetector/DeviceDetector";

const Footer = () => {
  const [showInput, setShowInput] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [userDevice, setUserDevice] = useState("Unknown");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ac_tag_id = searchParams.get("ac_tag_id") || "";
  const honeypotRef = useRef(null);
  const formId = "footerFormId";
  const userLang = "eng";
  const form = useFormik({
    initialValues: {
      email: "",
      referral: "",
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
        handleCreateContact(
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

  async function handleCreateContact(
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
      setIsLoading(false);
      form.setValues({ email: "" });
      setShowInput(false);
      router.push(`${resData.redirect}?email=` + email);
      localStorage.removeItem("submitedURL");
      localStorage.setItem("submitedURL", pathname);
    } else if (res.status === 422) {
      setIsLoading(false);
      setShowInput(false);
      setShowMessage(true);
      form.setValues({ email: "" });
    } else {
      setIsLoading(false);
      setShowInput(false);
      setErrorMessage(false);
      form.setValues({ email: "" });
    }
  }
  function handleJoinWaitlistClick() {
    if (!showInput) {
      setShowMessage(false);
      setErrorMessage(false);
      setShowInput(true);
      return;
    }
    // handleCreateContact(form.values.email);
  }
  useEffect(() => {
    const detectedDevice = detectDevice();
    setUserDevice(detectedDevice);
  }, []);
  return (
    <footer className={`bg-black pb-8  relative ${pathname === "/pricing" ? "mt-16 md:mt-24 pt-10 md:pt-16" : "mt-40 pt-44"}`}>
      {pathname !== "/thank-you" &&
        pathname !== "/thank-you/1" &&
        pathname !== "/thank-you/2" &&
        pathname !== "/thank-you/3" &&
        pathname !== "/thank-you/pro" &&
        pathname !== "/pricing" && (
          <div className="absolute w-full top-0 -translate-y-1/2">
            <div className="px-6 mx-auto max-w-6xl">
              <CallToAction />
            </div>
          </div>
        )}
      <div className="px-6 mx-auto md:max-w-6xl w-full">
        <div className="md:grid md:grid-cols-2">
          <div className="space-y-8">
            <div className="md:flex flex-none gap-8 items-end">
              <Image
                src={"/assets/logo/footer-logo.svg"}
                width={80}
                height={113}
                alt="Logo"
              />
              <p className="text-white text-2xl font-light md:mt-0 mt-4">
                Experience the power of AI
              </p>
            </div>
            {/* <form
              onSubmit={form?.handleSubmit}
              className="flex md:flex-nowrap flex-wrap gap-4 items-center"
              data-rewardful="true"
            >
              <button
                className="white-btn !py-[11px] !px-[23.25px] !text-base !w-[137px]"
                type="submit"
                onClick={handleJoinWaitlistClick}
              >
                {isLoading ? (
                  <svg
                    class="animate-spin h-6 w-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Join Waitlist"
                )}
              </button>
              {showInput && (
                <>
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
                  <input
                    className="hidden absolute w-0 h-0 overflow-hidden"
                    type="text"
                    tabIndex="-1"
                    value=""
                    ref={honeypotRef}
                    autoComplete="off"
                  />
                </>
              )}

              {showMessage && (
                <p className="text-gray-500 text-base">
                  Your email is already on the waitlist
                </p>
              )}
              {errorMessage && (
                <p className="text-gray-500 text-base">
                  Something is wrong, please try again
                </p>
              )}
            </form> */}
            <Link href="https://l.oso.ai/prod" className="white-btn !py-[11px] !px-[23.25px] !text-base !w-[137px]" target="_blank">Try OSO</Link>
          </div>
          <div className="lg:w-[433px] w-full ml-auto">
            <Newsletter formId={"FooterNewsletterForm"} />
            <SocialIcons />
          </div>
        </div>
        <hr className="mb-6 mt-11 sm:my-8 -mx-6 sm:mx-0 border-gray-500 border-opacity-20" />
        <div className="flex md:justify-between md:flex-row flex-col-reverse">
          <p className="text-gray-100 text-sm md:mt-0 mt-6">
            © 2023-2024 W4 Labs Inc.{" "}
          </p>
          <div className="flex items-center space-x-8">
            <Link href="/dmca-policy" className="text-gray-500 text-sm">
              DMCA Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 text-sm">
              Privacy Policy
            </Link>
            <Link
              href="https://brand.oso.ai/"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              Brand Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
