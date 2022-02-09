import Image from 'next/image'

const Footer = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-8 bg-gray-100 px-20 py-14 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p> How Airbb works</p>
        <p> Newsroom</p>
        <p> Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p> How Airbb works</p>
        <p> Newsroom</p>
        <p> Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p> How Airbb works</p>
        <p> Newsroom</p>
        <p> Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p> How Airbb works</p>
        <p> Newsroom</p>
        <p> Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
    </div>
  )
}

export default Footer
