"use client";

import Image from "next/image";
import AA_Logo from "../../../public/images/logo.png";
import Link from "next/link";
import { getCurrentYear } from "@/utils/Date/DateFormater";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-white dark:bg-slate-light rounded-base">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center justify-center sm:justify-baseline mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={AA_Logo} width={75} height={75} alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center justify-center sm:justify-baseline mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="hover:underline me-4 md:me-6 font-semibold dark:text-gray-light text-black"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/mentions-legales"
                className="hover:underline me-4 md:me-6 font-semibold dark:text-gray-light text-black"
              >
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline font-semibold dark:text-gray-light text-black"
              >
                Contact
              </Link>
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
