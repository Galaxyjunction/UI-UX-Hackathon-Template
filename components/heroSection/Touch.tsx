import Image from "next/image";

const Touch = () => {
  return (
    <div className="relative w-full h-[603px] md:w-[1440px] md:h-[603px] bg-white flex flex-col md:flex-row mt-36 mb-0 pb-0">
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
          width={850}
          height={8003}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Touch;

// import Image from 'next/image'
// import React from 'react'

// const Touch = () => {
//   return (
//     <>
//       <section>
//         <div className="py-12 text-[#2A254B] mt-12">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-[720px] h-auto px-4 md:px-12  flex flex-col justify-between">
//               <div>
//                 <h1 className="text-2xl md:text-2xl">
//                   From a studio in London to a global brand with <br /> over 400 outlets
//                 </h1>
//                 <h1 className="py-6 text-lg md:text-xl">
//                   When we started Avion, the idea was simple. Make high-quality furniture <br />
//                   affordable and available for the mass market.
//                 </h1>
//                 <h1 className="text-base md:text-lg">
//                   Handmade and lovingly crafted furniture and homeware is what we live, <br />
//                   breathe, and design, so our Chelsea boutique became the hotbed for the <br />
//                   London interior design community.
//                 </h1>
//               </div>
//               <div className="my-10">
//                 <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
//                   Get in touch
//                 </button>
//               </div>
//             </div>

//             <div className="w-full md:w-[890px] h-auto">
//               <Image
//                 src={'/images/SofaWithVase.png'}
//                 height={850}
//                 width={800}
//                 alt="chair"
//                 className='w-full h-[100%]'
              
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Touch; import Image from "next/image";

// const Touch = () => {
//   return (
//     <div className="relative w-full max-w-[1440px] mx-auto h-[720px] bg-white flex flex-row items-center gap-8 px-4 mb-0 pb-0">
//       <div className="flex flex-col justify-center gap-6 w-1/2 pl-12">
//         <h4 className="font-clash text-2xl font-normal leading-[36px] text-[#2a254b] max-w-[514px]">
//           From a studio in London to a global brand with over 400 outlets
//         </h4>
//         <p className="font-satoshi text-lg leading-[28px] text-[#505977] max-w-[570px]">
//           When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
//         </p>
//         <p className="font-satoshi text-lg leading-[28px] text-[#505977] max-w-[570px]">
//           Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
//         </p>
//         <div>
//           <button className="w-[309px] py-4 px-8 bg-lightGray bg-opacity-[15%] text-[#2a254b] font-satoshi text-lg hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out">
//             Get in touch
//           </button>
//         </div>
//       </div>
      
//       <div className="w-1/2 h-full">
//         <Image
//           src="/images/SofaWithVase.png"
//           alt="Sofa and Vase Image"
//           width={720}
//           height={720}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Touch;
