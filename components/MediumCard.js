import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div className="duration transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-md" />
      </div>
      <h3 className=" mt-3 text-2xl font-medium">{title}</h3>
    </div>
  )
}

export default MediumCard
