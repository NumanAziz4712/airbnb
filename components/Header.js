import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

const Header = ({ placeholder }) => {
  // states
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  // this redirects the user to specefic pages
  // this actually push the page on top of the stack
  // and if the user wanna go back, the prev pages will be there
  // this takes time whwen we click the redirect cause it is in development mode and it builds the pages ,it is fast in production
  const router = useRouter()
  // handle selece
  // the ranges and all the stuff comming from the library
  const handleSelect = (ranges) => {
    console.log(ranges)
    setStartDate(ranges.Selection.startDate)
    setEndDate(ranges.Selection.endDate)
  }
  // range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  }

  // search
  const search = () => {
    // here we can pass the data dynamically
    // we can pass the pathname and the a query as object
    // to pass the data dynamically and then catch it using
    // router.query
    router.push({
      pathname: '/search',
      query: {
        // the date should be in string
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  return (
    <div className="sticky top-0 z-50 grid grid-cols-2  bg-white py-5 px-5 shadow-md sm:grid-cols-3 md:px-10">
      {/* left div */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto flex hidden h-10 cursor-pointer items-center sm:inline "
      >
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
          value={searchInput}
          className="flex-grow bg-transparent pl-5  text-sm placeholder-gray-400 outline-none"
          placeholder={placeholder || 'Search'}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className=" col-span-3 mx-auto mt-2 flex flex-col">
          {/* this takes couples of values  */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-2.5 flex items-center border-b border-gray-100 pb-1 ">
            <h2 className="flex-grow text-2xl font-medium">Number of Guests</h2>
            <UsersIcon className="h-5 text-gray-400" />
            <input
              type="number"
              min={1}
              max={5}
              className="inline-flex w-12 pl-2 text-lg font-semibold text-red-400 outline-none"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="mt-2 flex items-center justify-end gap-6">
            <button
              onClick={() => setSearchInput('')}
              className="text-gray-500 hover:text-red-400"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="rounded-full bg-red-400 px-2 py-1 text-sm text-white hover:bg-red-500 hover:shadow-md"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
