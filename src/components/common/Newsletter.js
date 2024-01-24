import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { detectDevice } from "../DeviceDetector/DeviceDetector";

const Newsletter = ({ formId }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userDevice, setUserDevice] = useState("Unknown");
  const honeypotRef = useRef(null);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const userLang = "eng";
  const ac_tag_id = searchParams.get("ac_tag_id") || "";
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
          userDevice,
          userLang,
          formId,
          referral
        );
      } else {
        console.error("reCAPTCHA verification failed");
      }
      // handleCreateContact(data.email);
    },
  });

  async function handleCreateContact(
    email,
    token,
    ac_tag_id,
    userDevice,
    userLang,
    formId,
    referral
  ) {
    const res = await fetch("/api/create-contact", {
      method: "POST",
      body: JSON.stringify({
        email,
        token,
        ac_tag_id,
        userDevice,
        userLang,
        formId,
        pathname,
        referral,
      }),
    });

    const resData = await res.json();

    if (res.status === 200) {
      form.setValues({ email: "" });
      router.push(`${resData.redirect}?email=` + email);
      localStorage.removeItem("submitedURL");
      localStorage.setItem("submitedURL", pathname);
    } else if (res.status === 422) {
      setShowMessage(true);
      form.setValues({ email: "" });
    } else {
      setErrorMessage(false);
      form.setValues({ email: "" });
    }
  }
  useEffect(() => {
    const detectedDevice = detectDevice();
    setUserDevice(detectedDevice);
  }, []);
  return (
    <>
      <p className="text-base font-light text-gray-500 md:mt-0 mt-8">
        Stay updated on the latest news and features.
      </p>
      <div className="mt-4 mb-7 sm:mb-12">
        <form
          className="relative transition-all"
          onSubmit={form?.handleSubmit}
          data-rewardful="true"
        >
          <input
            type="email"
            onChange={form?.handleChange}
            onBlur={form?.handleBlur}
            value={form?.values.email}
            id="email"
            placeholder="Enter your email"
            className="transition-all duration-200 py-4 px-6 input-text font-normal border-gray-900 border h-16 w-full text-base outline-none text-white bg-transparent placeholder-gray-100 rounded-lg peer"
          />

          <input
            className="hidden absolute w-0 h-0 overflow-hidden"
            type="text"
            tabIndex="-1"
            value=""
            ref={honeypotRef}
            autoComplete="off"
          />
          <button
            disabled={!form?.values.email}
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4976 12.0223C15.4981 12.2559 15.4167 12.4824 15.2676 12.6623L10.2676 18.6623C9.91417 19.0875 9.28289 19.1457 8.85763 18.7923C8.43237 18.4388 8.37417 17.8075 8.72763 17.3823L13.2076 12.0223L8.88763 6.66228C8.71986 6.45569 8.64136 6.19074 8.66952 5.9261C8.69767 5.66145 8.83015 5.41895 9.03763 5.25228C9.24549 5.06714 9.52111 4.97702 9.79819 5.00359C10.0753 5.03016 10.3287 5.17102 10.4976 5.39228L15.3276 11.3923C15.4531 11.5774 15.513 11.7992 15.4976 12.0223Z"
                fill="#8E33FF"
              />
            </svg>
          </button>
        </form>
        {showMessage && (
          <p className="text-gray-500 text-base mt-4">
            Your email is already on the waitlist
          </p>
        )}
        {errorMessage && (
          <p className="text-gray-500 text-base mt-4">
            Something is wrong, please try again
          </p>
        )}
      </div>
    </>
  );
};

export default Newsletter;
