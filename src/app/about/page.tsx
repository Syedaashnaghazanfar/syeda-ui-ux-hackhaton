import Navbar from "../components/navbar2";
import Image from "next/image";
import girl from "@/images/hero-2-bg-shape-cover.png";
import bg from "@/images/media bg-cover.png"
export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="absolute w-[1050px] h-[545px] left-[calc(50%-525px)] top-[104px] flex flex-col items-start gap-[80px] py-[112px]">
        <div className="flex flex-row items-center gap-[30px] w-[1044px] h-[321px]">
          {/* Column 1 (col-md-8) */}
          <div className="flex flex-col items-start gap-[35px] w-[599px] h-[321px]">
            {/* Headline */}
            <h5 className="w-[149px] h-[24px] font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              ABOUT COMPANY
            </h5>

            {/* Main Heading */}
            <h1 className="w-[542px] h-[80px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
              ABOUT US
            </h1>

            {/* Sub Heading */}
            <h4 className="w-[376px] h-[60px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>

            {/* CTA */}
            <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
              {/* Button */}
              <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px]">
                <span className="w-[115px] h-[22px] font-bold text-[14px] leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]">
                  Get Quote Now
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 (col-md-4) */}
          <Image src={girl} alt="girl" className="absolute left-[-1px]" />
        </div>
      </div>
      <div className="absolute w-[1440px] h-[236px] left-[50%] top-[650px] transform -translate-x-[50%] bg-white flex flex-col items-center py-[24px]">
        {/* Row */}
        <div className="flex flex-row justify-center items-center gap-[60px] w-[1018px] h-[188px]">
          {/* Frame 1 (Left Column) */}
          <div className="flex flex-col items-start py-[24px] gap-[80px] w-[394px] h-[188px]">
            {/* Paragraph */}
            <p className="w-[116px] h-[20px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#E74040]">
              Problems trying
            </p>

            {/* Section Title */}
            <h2 className="w-[394px] h-[96px] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>

          {/* Frame 2 (Right Column) */}
          <div className="flex flex-col items-start gap-[49px] w-[529px] h-[40px]">
            {/* Paragraph */}
            <p className="w-[545px] h-[40px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
      <section
        className="bg-white py-16"
        style={{ top: "850px", position: "relative" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                15K
              </h1>
              <p className="text-lg font-semibold text-gray-500">
                Happy Customers
              </p>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                150K
              </h1>
              <p className="text-lg font-semibold text-gray-500">
                Monthly Visitors
              </p>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                15
              </h1>
              <p className="text-lg font-semibold text-gray-500">
                Countries Worldwide
              </p>
            </div>
            {/* Metric 4 */}
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                100+
              </h1>
              <p className="text-lg font-semibold text-gray-500">
                Top Partners
              </p>
            </div>
          </div>
        </div>
      </section>
      PICTURE SECTION
<section className="relative bg-white py-16">
  {/* Container */}
  <div className="absolute top-[1200px] left-1/2 transform -translate-x-1/2 w-full max-w-[1050px] h-auto">
    {/* Video Card */}
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[540px] bg-white rounded-2xl shadow-lg">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      {/* Gradient Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/90 rounded-2xl"></div>
      {/* Play Button */}
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="w-[60px] sm:w-[80px] md:w-[92.6px] h-[60px] sm:h-[80px] md:h-[92.6px] bg-[#23A6F0] rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform">
          {/* Play Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-4 h-5 sm:w-5 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3l14 9-14 9V3z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
