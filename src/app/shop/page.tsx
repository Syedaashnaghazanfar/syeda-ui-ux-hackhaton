import Image from "next/image";
import Navbar from "../components/navbar";
import GreenHeader from "../components/green-header";
import arrow from "@/images/Vector (13).png";
import cat1 from "@/images/card-item.png";
import cat2 from "@/images/card-item (1).png";
import cat3 from "@/images/card-item (2).png";
import cat4 from "@/images/card-item (3).png";
import cat5 from "@/images/card-item (4).png";
import drop from "@/images/Vector (14).png";
import frame from "@/images/Frame 31.png";
import clients from "@/images/desktop-clients-1.png";
import pic9 from "@/images/product-cover-5 (8).png";
import pic10 from "@/images/product-cover-5 (9).png";
import pic11 from "@/images/product-cover-5 (10).png";
import pic12 from "@/images/product-cover-5 (11).png";
import pic13 from "@/images/product-cover-5 (12).png";
import pic14 from "@/images/product-cover-5 (13).png";
import pic15 from "@/images/product-cover-5 (14).png";
import pic16 from "@/images/product-cover-5 (15).png";
import pic17 from "@/images/product-cover-5 (16).png";
import pic18 from "@/images/product-cover-5 (17).png";
import pic19 from "@/images/product-cover-5 (18).png";
import pic20 from "@/images/product-cover-5 (19).png";

import CardText from "../components/cards-text";
import Footer from "../components/footer";

export default function () {
  return (
    <div>
      <GreenHeader />
      <Navbar />
      {/* Shop Section */}
      <div className="w-full h-[92px]  flex flex-col items-center mt-[10px]">
        <div className="w-full max-w-screen-xl flex gap-4 items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Category Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-[90px] lg:ml-[70px]">
          <Image
            src={cat1}
            alt="1"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat2}
            alt="2"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat3}
            alt="3"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat4}
            alt="4"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat5}
            alt="5"
            className="w-[60%] md:w-full lg:w-full"
          />
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-full h-[98px] flex justify-center items-center mt-12">
        <div className="w-full max-w-screen-xl flex justify-between items-center py-[24px] px-4">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex gap-4 items-center">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center relative">
              <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
              <Image
                src={drop}
                alt="drop"
                className="absolute top-[10px] left-[10px]"
              />
            </button>
            <button className="w-[94px] h-[50px] flex justify-center items-center bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative mt-12">
        <Image src={clients} alt="clients" className="w-full" />
      </div>
      {/* Product Cards */}
      <div className="relative w-full px-4 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            pic9,
            pic10,
            pic11,
            pic12,
            pic13,
            pic14,
            pic15,
            pic16,
            pic17,
            pic18,
            pic19,
            pic20,
          ].map((pic, index) => (
            <div
              key={index}
              className="w-full max-w-[238px] mx-auto mb-8 flex flex-col items-center"
            >
              <div className="w-[239px] h-[auto] flex flex-col">
                <div className="flex-grow">
                  <Image
                    src={pic}
                    alt={`product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="">
                  <CardText />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full max-w-[313px] mx-auto mt-[100px] border border-gray-300 rounded-lg shadow-md">
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-gray-100 text-gray-600 font-extrabold py-2 px-4 border border-gray-300 rounded-l-md shadow-md cursor-pointer">
              First
            </div>
            <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
              1
            </div>
            <div className="bg-blue-600 text-white py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
              2
            </div>
            <div className="bg-white text-blue-600 py-2 px-3 border border-gray-300 shadow-md cursor-pointer">
              3
            </div>
            <div className="bg-white text-blue-600 py-2 px-4 border border-gray-300 rounded-r-md shadow-md cursor-pointer">
              Next
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
