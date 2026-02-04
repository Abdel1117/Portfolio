"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";
import { useState } from "react";

export const Header = () => {
  const [toogle, setToogle] = useState<boolean>(false);

  const toogleMobileMenu = () => {
    setToogle((tl) => !tl);
  };
  return (
    <header>
      <nav className="bg-white dark:bg-slate-light px-4 lg:px-6 py-6.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-green-light">
              AA
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <ThemeButton />

            <button
              onClick={() => {
                toogleMobileMenu();
              }}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-black dark:text-white rounded-lg lg:hidden bg-white dark:bg-slate-800 hover:cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold text-white dark:text-black border-b border-gray-100 bg-slate-light dark:bg-green-light lg:border-0 lg dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${toogle ? "inline-block" : "hidden"}  justify-between items-center w-full  lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium">
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white  border-b border-black dark:border-gray-700 hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white  border-b border-black dark:border-gray-700 hover:underline"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white  border-b border-black dark:border-gray-700 hover:underline"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white  border-b border-black dark:border-gray-700 hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white  border-b border-black dark:border-gray-700 hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 font-semibold text-black dark:text-white dark:border-gray-700 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
        </div>
      </nav>
    </header>
  );
};
