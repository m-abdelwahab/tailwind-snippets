import React, { useState, useEffect } from "react";
import Logo from "../../images/tailwind-ui-logo.svg";

const TailwindUIBanner = () => {
  const initialState = () =>
    Boolean(window.localStorage.getItem("hideBanner") || null);
  const [isHidden, setIsHidden] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("hideBanner", JSON.stringify(isHidden));
  }, [isHidden]);

  const handleClick = () => setIsHidden(true);

  return !isHidden ? (
    <div className="sticky bottom-0 py-5 w-full max-w-full px-2 sm:px-4">
      <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <img className="h-6" src={Logo} alt="Tailwind logo" />
            <p className="ml-3 font-medium text-white truncate">
              <span className="lg:hidden">
                <span className="sr-only">Tailwind UI</span> is now in early
                access!
              </span>
              <span className="hidden lg:inline text-gray-400">
                <strong className="text-white font-semibold mr-1">
                  Now in early access!
                </strong>
                <span className="xl:hidden">
                  Beautiful UI components by the creators of Tailwind CSS.
                </span>
                <span className="hidden xl:inline">
                  Beautiful UI components, crafted by the creators of Tailwind
                  CSS.
                </span>
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <div className="rounded-md shadow-sm">
              <a
                href="https://tailwindui.com?utm_source=tailwindcss&amp;utm_medium=footer-banner"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              onClick={() => handleClick()}
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            >
              <svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default TailwindUIBanner;
