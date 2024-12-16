import Navbar from "../components/navbar2";
import Image from "next/image";
import girl from "@/images/hero-2-bg-shape-cover.png";
import bg from "@/images/media bg-cover.png";
import facebookIcon from "@/images/facebook.png";
import instagramIcon from "@/images/ant-design_instagram-outlined.png";
import twittericon from "@/images/ant-design_twitter-outlined.png";
import user1 from "@/images/team-1-user-1.jpg";
import user2 from "@/images/team-1-user-2.jpg";
import user3 from "@/images/team-1-user-3.jpg";
import cm1 from "@/images/fa-brands-1.png";
import cm2 from "@/images/fa-brands-2.png";
import cm3 from "@/images/fa-brands-3.png";
import cm4 from "@/images/fa-brands-4.png";
import cm5 from "@/images/fa-brands-5.png";
import cm6 from "@/images/fa-brands-6.png";
import girl2 from "@/images/unsplash_vjMgqUkS8q8.png"
import video from "@/images/media bg-cover.png"
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col gap-8">
       {/* First Section */}
<div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
  <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
    {/* Column 1 */}
    <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
      <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
        ABOUT COMPANY
      </h5>
      <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
        ABOUT US
      </h1>
      <h4 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
        We know how large objects will act, but things on a small scale
      </h4>
      <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
        <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
          <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
            Get Quote Now
          </span>
        </div>
      </div>
    </div>
    
      {/* Column 2 */}
      
      <Image src={girl} alt="girl" className="absolute lg:block hidden lg:left-[-1px] top-[300px] lg:top-[0px]" />
          
  </div>
</div>

        {/* Description Section */}
        <div className="relative w-full">
  <div
    className="relative flex flex-col items-center px-4 py-6 w-full max-w-screen-xl h-auto left-1/2 -translate-x-1/2 bg-white"
  >
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-15 w-full max-w-full h-auto"
    >
      {/* Frame 1 */}
      <div
        className="flex flex-col items-start gap-4 w-full lg:w-[394px] h-auto"
      >
        <div
          className="flex flex-col items-start gap-3 w-full h-auto"
        >
          {/* Paragraph */}
          <p
            className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#E74040]"
          >
            Problems trying
          </p>

          {/* Section Title */}
          <h2
            className="w-full text-[24px] leading-[32px] font-bold tracking-[0.1px] text-[#252B42]"
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
      </div>

      {/* Column */}
      <div
        className="flex flex-col items-start gap-3 w-full lg:w-[529px] h-auto"
      >
        {/* Paragraph */}
        <p
          className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#737373]"
        >
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  </div>
</div>


      {/* short about us */}
       {/* Stats Section */}
       <div className="relative flex flex-col items-center bg-white py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1050px]">
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Happy Customers</h5>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Monthly Visitors</h5>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Countries  Worldwide</h5>
          </div>
          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Top Partners</h5>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="relative w-full bg-white h-[764px] max-w-[1440px] mx-auto flex justify-center items-center">
  {/* Video Card */}
  <div className="relative bg-white rounded-[20px] w-[90%] max-w-[989px] h-[540px] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
      <Image
        src={video}
        alt="Video Background"
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
      />
      {/* Gradient Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-80"></div>
    </div>

    {/* Play Button */}
    <div className="relative z-10">
      <button
        className="w-[92.6px] h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[19px] h-[23px] text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
    </div>
  </div>
</div>


        {/* Team Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">Emily Rose</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Software Engineer
                  </h6>
                  {/* Social Media */}
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user2}
                    alt="Team Member 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Jane Smith
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Marketing Head
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user3}
                    alt="Team Member 3"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    John Doe
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    UI/UX Designer
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANIES SECTION */}
        <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex justify-center">
                <Image src={cm1} alt="Client 1 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm2} alt="Client 2 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm3} alt="Client 3 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm4} alt="Client 4 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm5} alt="Client 5 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm6} alt="Client 6 Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* groW */}
        <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          
      {/* Right Side Blue Section */}
      <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
        <div className="w-[438px] flex flex-col gap-[24px]">
          <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
          <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
          Now Let’s grow Yours
          </h2>
          <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
          </p>
          <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
            <span className="text-white text-sm font-bold">Button</span>
          </button>
        </div>
      </div>
      {/* Left Side Image */}
      <div className="w-[540px] md:w-1/2 h-full relative">
        <Image
          src={girl2}
          alt="Testimonial Background"
          className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
        />
      </div>

    </section>
    {/* Footer */}
    <Footer/>
      </div>
    </div>
  );
}
