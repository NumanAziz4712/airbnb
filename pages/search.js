import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const Search = ({ searchResults }) => {
  console.log(searchResults)
  // router
  //   herer we catch the query and destructure it
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  // since the date is in string and nreadable formate we need to formate it
  const formatStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formatendDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formatStartDate} - ${formatendDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number of guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className=" mb-5 hidden gap-3 whitespace-nowrap lg:inline-flex ">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="my-12 grid grid-cols-1 gap-6  xl:grid-cols-2">
            {searchResults.map((item) => (
              <InfoCard key={item.title} {...item} location={location} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
