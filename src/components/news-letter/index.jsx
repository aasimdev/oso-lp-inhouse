import { useFormik } from "formik";
import React, { useState } from "react";

const NewsLetter = ({ className, label, arrowIcon }) => {
  const [showMessage, setShowMessage] = useState(false);
  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      setShowMessage(true);
    },
  });
  return (
    <>
      {!showMessage && (
        <form
          onSubmit={form?.handleSubmit}
          className="text-center md:flex justify-center space-y-3 md:space-y-0 md:space-x-3"
        >
          <div>
            <input
              className={`email-width py-[26px] w-[352px] bg-white appearance-none border border-[#454F5B] placeholder:text-[#637381] rounded-lg px-4 text-black leading-tight focus:outline-none focus:border-purple ${className}`}
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
            <span>{label}</span>
            {arrowIcon && (
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
            )}
          </button>
        </form>
      )}
      {!!showMessage && (
        <>
          <div className="text-[#212B36] text-center">
            <p className={` text-2xl `}>Congrats!</p>
            <p className="mt-2">
             You will soon be among the first to experience the power
              of OSO.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default NewsLetter;
