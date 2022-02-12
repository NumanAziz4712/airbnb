import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
const InfoCard = ({
  img,
  title,

  description,
  star,
  price,
  total,
  location,
}) => {
  return (
    <div className="flex gap-5 overflow-hidden rounded-lg border  pr-4 transition duration-200 ease-out  hover:opacity-80 hover:shadow-lg   xl:rounded-lg xl:border  ">
      <div className="relative h-[136px] w-40 flex-shrink-0 sm:h-[196px] sm:w-[170px] md:h-52 md:w-80 lg:h-[250px] lg:w-[400px] xl:h-[290px] xl:w-[320px] 2xl:h-[260px]">
        <Image
          src={img}
          layout="fill"
          // className="rounded-lg"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-grow flex-col justify-center pt-3 lg:pb-2 xl:pt-4 xl:pr-2  ">
        <div className="flex  justify-between">
          <p className=" mb-2 rounded-sm  bg-red-400 py-1 px-1 text-xs font-medium uppercase tracking-widest text-white lg:mb-6 ">
            {location}
          </p>
          <HeartIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-red-400" />
        </div>
        <h4 className="text-sm font-bold text-gray-700 sm:text-xl">{title}</h4>
        <div className="w-10 border-b pt-3" />
        <p className="hidden pt-3 text-sm text-gray-500 sm:inline-flex lg:flex-grow ">
          {description}
        </p>

        {/* price and stars of the card */}
        <div className="flex items-end items-center justify-between py-2 font-medium text-gray-600 sm:pt-2">
          <p className="flex items-center gap-2 sm:text-xl">
            <StarIcon className="h-6 text-red-400 " />
            {star}
          </p>
          <div>
            <p className=" text-sm  sm:text-xl ">{price}</p>
            {/* <p className="text-right text-sm font-extralight">{total}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
