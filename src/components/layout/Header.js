"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Menu from "../common/navigation/Menu";
import { useMenu } from "@/context/MenuContext";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const { showSidebar, navigationHandler } = useMenu("");
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hform, setHForm] = useState(false);
  const router = useRouter();

  const form = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (data) => {
      addWaitlistContact(data.email);
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

    if (res.status === 200) {
      // setShowMessage(true);
      setIsLoading(false);
      setHForm(false);
      form.setValues({ email: "" });
      router.push("/thank-you?email=" + email);
    }
  }

  return (
    <>
      <header className="px-6 py-4 mx-auto max-w-6xl ">
        <nav className="flex justify-between items-center md:flex-nowrap flex-wrap">
          <Link href="/search">
            <Image
              src={"/assets/logo/oso.png"}
              alt="logo"
              width={56}
              height={80}
              className="w-10 sm:w-14"
            />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {!showMessage && (
              <form onSubmit={form?.handleSubmit} className="flex gap-2">
                {hform && (
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
                )}
                <button
                  type={hform ? "submit" : "button"}
                  className="!py-[11px] !px-[23.25px] !text-base !w-[137px] theme-btn"
                  onClick={() => setHForm(true)}
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
              </form>
            )}

            {!!showMessage && (
              <p className="text-gray-800 text-base">
                Congrats! You will soon be among the first to experience the
                power of OSO.
              </p>
            )}

            {/* {showSidebar ? (
                            <button className="icon-btn w-12 h-12 flex items-center justify-center" onClick={navigationHandler}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                                </svg>
                            </button>
                        ) : (
                            <button className="icon-btn w-12 h-12 flex items-center justify-center" onClick={navigationHandler}>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black" />
                                </svg>
                            </button>
                        )} */}
          </div>
        </nav>
      </header>
      {showSidebar && <Menu isOpen={showSidebar} onClose={navigationHandler} />}
    </>
  );
};

export default Header;
