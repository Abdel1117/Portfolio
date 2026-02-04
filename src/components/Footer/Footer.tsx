"use client";

import Image from "next/image";
import AA_Logo from "../../../public/images/logo.png";
import Link from "next/link";
import { getCurrentYear } from "@/utils/Date/DateFormater";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-light rounded-base shadow-xs  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center justify-center sm:justify-baseline mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={AA_Logo} width={75} height={75} alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center justify-center sm:justify-baseline mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 font-semibold dark:text-gray-light text-black"
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 font-semibold dark:text-gray-light text-black"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 font-semibold dark:text-gray-light text-black"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline font-semibold dark:text-gray-light text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default dark:border-gray-light sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body text-center font-semibold dark:text-gray-light text-black">
          ©{getCurrentYear()}
          <Link href="/" className="hover:underline ml-1">
            AA
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
