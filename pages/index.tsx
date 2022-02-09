import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
const Home = ({ exploreData, cardsData }) => {
  console.log(exploreData)
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* banner */}
      <Banner />
      <main className="mx-auto max-w-5xl px-8 sm:px-16">
        <section className="pt-8">
          <h2 className="pb-5 text-3xl font-bold">Explore Nearby</h2>

          {/* pull data from the server using nextjs - Server Side Rendering - */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.location} {...item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-3xl font-bold">Live Anywhere</h2>
          <div className="-ml-3 flex gap-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Grateast Outdoors"
            buttonText="Get Inspired"
            description="Wishlists curated by Airbnb"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Home
{
  /* pull data from the server using nextjs - Server Side Rendering - in this case the data doesnot change so we use the 'static rendering'. for static the server generate the page once and when the user comes, it delivers the same copy */
}

// function

export async function getStaticProps() {
  const res = await fetch('https://links.papareact.com/pyp')
  const exploreData = await res.json()

  // card data
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )
  return {
    // we pass the props to the functional component.
    props: {
      exploreData,
      cardsData,
    },
  }
}
