"use client";

import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import ContributeButton from "./ContributeButton";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Link from "next/link";

const MenuItems = {
  "/leaderboard": "Leaderboard",
  "/people": "Contributors",
  "/projects": "Projects",
  "/feed": "Feed",
  "/releases": "Releases",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-1 backdrop-blur xl:px-3">
        <Logo />

        <div className="hidden flex-row items-center justify-between gap-3 rounded bg-secondary-100 font-semibold dark:bg-secondary-800 md:rounded-full md:px-6 md:py-1 lg:flex">
          {Object.entries(MenuItems).map(([href, label]) => (
            <Link
              key={href}
              className="text-sm transition-all hover:text-primary-500 hover:underline hover:dark:text-primary-300 md:p-2 md:text-base"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="align-center flex flex-row justify-center gap-4">
          <div className="hidden items-center justify-center md:flex">
            <ContributeButton />
          </div>
          <div className="hidden md:block">
            <ThemeSwitch />
          </div>
          <div
            className="flex cursor-pointer items-center justify-center text-3xl transition-transform duration-300 ease-in-out lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      {open && (
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-96 bg-white dark:bg-secondary-800 lg:hidden ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <div className="relative flex h-full w-full flex-col gap-5 bg-secondary-300 px-6 py-4 dark:bg-secondary-800">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(!open)}
                className="mt-3 self-center text-secondary-600 dark:text-secondary-400"
              >
                <IoClose className="text-3xl" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 md:px-4 md:py-2">
              {Object.entries(MenuItems).map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="p-1 text-sm hover:text-primary-500 hover:underline md:p-2 md:text-base"
                >
                  {label}
                </Link>
              ))}
            </div>
            <ContributeButton />
            <div className="absolute bottom-7 left-0 w-full items-center">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
