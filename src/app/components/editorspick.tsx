import Image from "next/image";
import Men from "@/images/filter.png";
import women from "@/images/filter (1).png";
import div1 from "@/images/filter (2).png";
import div2 from "@/images/filter (3).png";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] relative bg-[#f5f5f5]">
      <div className="w-full lg:w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] sm:p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="w-full sm:w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {/* Images Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-[30px]">
          {/* Men Image */}
          <div className="relative w-full lg:w-[510px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
            <Image
              src={Men}
              alt="men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[50px] py-[8px] sm:py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>
          {/* Women Image */}
          <div className="relative w-full lg:w-[240px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
            <Image
              src={women}
              alt="women"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[48px] py-[8px] sm:py-[12px] shadow-md">
              <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>
          {/* Accessories and Kids */}
          <div className="flex flex-col gap-[20px] w-full lg:w-[240px]">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={div1}
                alt="accessories"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>
            {/* Kids Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={div2}
                alt="kids"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
