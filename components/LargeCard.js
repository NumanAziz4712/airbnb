import Image from 'next/image'
import React from 'react'

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-10 left-10 sm:left-12 sm:top-16">
        <h3 className="mb-3 w-40 text-2xl font-semibold sm:w-64 sm:text-4xl">
          {title}
        </h3>
        <p className="font-medium text-gray-600">{description}</p>
        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
