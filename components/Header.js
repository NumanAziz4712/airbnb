import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/solid'
const Header = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-2 bg-white py-5 px-5 shadow-md sm:grid-cols-3 md:px-10">
      {/* left div */}
      <div className="relative my-auto flex hidden h-10 cursor-pointer items-center sm:inline ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          //   this keeps the aspect ration
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center rounded-full bg-gray-50 py-2 md:border-2 md:border-gray-100 md:bg-transparent md:shadow-sm">
        <input
          type="text"
          className="flex-grow bg-transparent pl-5  text-sm placeholder-gray-400 outline-none"
          placeholder="Search"
        />

        <SearchIcon className="   mx-auto hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-1.5 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer font-medium md:inline-flex md:text-sm lg:text-base">
          Become a Host
        </p>
        <GlobeAltIcon className="hidden h-6 cursor-pointer sm:inline-flex" />
        <div className="flex cursor-pointer items-center space-x-1 rounded-full border-2 p-2 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </div>
  )
}

export default Header
