import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full relative bg-[#23856D] rounded-[5px] py-[80px] flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col lg:flex-row gap-[30px] items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-[20px] text-center lg:text-left">
          <h4 className="font-Montserrat font-normal text-[20px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="font-Montserrat font-bold text-[36px] lg:text-[58px] leading-[40px] lg:leading-[80px] text-white">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex flex-col lg:flex-row gap-[15px] items-center lg:items-start">
            <h3 className="font-Montserrat font-bold text-[24px] text-white">
              $16.48
            </h3>
            <button className="rounded-[5px] bg-[#2DC071] py-[10px] px-[20px]">
              <h1 className="font-Montserrat text-[14px] text-white">
                ADD TO CART
              </h1>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[70%] lg:w-[510px]">
            <Image
              src={greenman}
              alt="picman"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
