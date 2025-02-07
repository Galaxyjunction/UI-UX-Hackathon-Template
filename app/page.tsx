import Features from "@/components/heroSection/Features";
import Touch from "@/components/heroSection/Touch";
import Hero from "@/components/heroSection/Hero";
import Listing from "@/components/heroSection/Listing";
import PopularProducts from "@/components/heroSection/PopularProducts";
import SignUp from "@/components/heroSection/SignUp";

export default function Home() {
  return (
    <div className="relative mx-auto w-[390px] h-[4500px] bg-white md:w-[1440px] md:h-[4160px]">
      <Hero />
      <Features />
      <Listing />
      <PopularProducts/>
      <SignUp />
      <Touch />
    </div>
  );
}