import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="relative w-full h-[603px] md:w-[1440px] md:h-[603px] bg-white flex flex-col md:flex-row mb-0 pb-0">
      <div className="flex flex-col gap-[16px] p-4 md:w-[720px]">
        <h4 className="font-clash text-xl font-normal leading-[28px] text-[#2a254b] md:text-2xl md:w-[514px]">
          From a studio in London to a global brand with over 400 outlets
        </h4>
        <p className="font-satoshi leading-[21px] font-normal text-[#505977] text-[14px] md:w-[570px] md:text-lg md:mt-3">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. <br />
          <br /> Handmade, and lovingly crafted furniture and homeware is what
          we live, breathe and design so our Chelsea boutique become the hotbed
          for the London interior design community.
        </p>
        <div className="relative flex justify-start mt-8">
          <button className="mt-6 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
            Get in touch
          </button>
        </div>
      </div>

      <div className="md:relative md:bottom-0 md:left-0 flex justify-center">
        <Image
          src="/images/SofaWithVase.png"
          alt="Sofa and Vase Image"
          width={720}
          height={603}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
