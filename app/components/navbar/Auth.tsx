"use client";
import useColorMode from "../../../hooks/useColorMode";
import { SunIcon, MoonIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Auth = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className="hidden md:gap-18 sm:flex flex-row items-center gap-12">
      <a
        href=""
        className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        Home
      </a>
      <a
        href=""
        className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        About
      </a>
      <a
        href=""
        className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        Blogs
      </a>
      <a
        href=""
        className="text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        Contact
      </a>
      <div className="dark:text-white flex flex-row gap-4 py-1 pl-5 pr-2 bg-gray-200 rounded-lg dark:bg-slate-800">
        <button
          className="dark:text-white text-black outline-none px-2"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? (
            <MoonIcon className="h-5 w-5 text-black" />
          ) : (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          )}
        </button>
        <button className="text-white text-xs font-semibold tracking-wider flex gap-1 items-center bg-blue-600 py-2 px-5 rounded-lg">
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Auth;
