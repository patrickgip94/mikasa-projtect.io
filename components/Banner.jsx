import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image 
        src="https://i.pinimg.com/originals/c2/70/62/c27062043faf63a98917756ce2df1bc6.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-gray-700">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md 
          rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  )
};

export default Banner;