"use client";

import { HiBell } from "react-icons/hi";

export default function NavbarWithNotification({placeholder}) {
  return (
    <div className="w-full bg-white border-b border-b-textDisable h-14 px-6 flex items-center justify-between ">
      <form className="w-[40%]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block mr-8 w-3/4 px-4 py-2.5 pl-10 text-sm text-gray-900 border-none rounded-lg bg-extraLight focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            placeholder={placeholder}
            required
          />
          <button
            type="submit"
            className="text-white absolute -right-14 lg:right-2.5 bottom-[1px] bg-primary hover:bg-primary/70 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Search
          </button>
        </div>
      </form>
      {/* Notification Icon */}
      <HiBell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
    </div>
  );
}
