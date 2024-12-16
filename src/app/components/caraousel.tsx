import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carousel() {
  return (
    <div className="relative w-full h-auto">
      {/* Image for large screens */}
      <div className="block relative w-full h-[716px]">
        <Image
          src={women}
          alt="Summer collection"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 70%" // Adjust to focus on the hand of the girl
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center lg:items-start gap-4 px-4 sm:px-8 text-white">
        <h5 className="font-Montserrat font-semibold text-sm sm:text-base lg:text-lg">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl lg:text-[58px] leading-tight text-center lg:text-left max-w-full lg:max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-base sm:text-lg lg:text-xl text-center lg:text-left max-w-full lg:max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#2DC071] text-white text-sm sm:text-base lg:text-lg rounded-md font-Montserrat hover:bg-[#25a061] transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
