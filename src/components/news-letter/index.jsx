"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewsLetter = ({ className, label, arrowIcon }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      addWaitlistContact(values.email);
    },
  });

  async function addWaitlistContact(email) {
    setIsLoading(true);
    const res = await fetch("/api/create-contact", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    if (res.status == 200) {
      // setShowMessage(true);
      setIsLoading(false);
      router.push("/thank-you?email=" + email);
    }
  }

  return (
    <>
      {!showMessage && (
        <form
          onSubmit={form?.handleSubmit}
          className="text-center md:flex justify-center space-y-2 md:space-y-0 md:space-x-3"
        >
          <div>
            <input
              className={`email-width py-[26px] w-[352px] bg-white appearance-none border border-gray-900 placeholder:text-gray-100 rounded-lg px-4 text-black leading-tight focus:outline-none focus:border-purple ${className}`}
              placeholder="Enter your email"
              required
              name="email"
              type="email"
              onChange={form?.handleChange}
              onBlur={form?.handleBlur}
              value={form?.values.email}
            />
          </div>
          <button
            type="submit"
            className={` theme-btn ${className ? className : null}`}
          >
            {!isLoading && <span>{label}</span>}

            {isLoading ? (
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
            ) : (
              arrowIcon && (
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
              )
            )}
          </button>
        </form>
      )}
      {!!showMessage && (
        <>
          <div className="text-gray-800 text-center">
            <p className={` text-2xl `}>Congrats!</p>
            <p className="mt-2">
              You will soon be among the first to experience the power of OSO.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default NewsLetter;
