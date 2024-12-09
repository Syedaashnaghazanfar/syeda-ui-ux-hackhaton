import Image from "next/image";
import couples from "@/images/asian-woman-man-with-winter-clothes 1.png";

export default function Whitediv() {
  return (
    <div className="w-full h-auto absolute top-[3810px]">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={couples}
            alt="couple"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
          <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className=" lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
