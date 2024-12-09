import Image from "next/image";
import colours from "@/images/product-colors.png";

export default function CardText() {
  return (
    <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
    </div>
  );
}
