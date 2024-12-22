import FeatureCard from "../reuseableComponents/FeaturedCard";

const Features = () => {
  return (
    <div className="relative lg:h-[335px] mt-[8rem] w-full h-[757px] bg-white flex flex-col gap-[2rem] md:gap-0 lg:gap-[2rem] lg:justify-center lg:mx-8 lg:items-center mx-auto">
      <h4 className="font-clash text-2xl font-normal leading-[28px] lg:text-3xl md:pb-4 lg:p-0 px-8">
        What makes our brand different
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:pr-0 md:pr-[3rem]">
        <FeatureCard
          image="Delivery"
          heading="Next day as standard"
          para="Order before 3pm and get your order the next day as standard"
        />

        <FeatureCard
          image="Checkmark"
          heading="Made by true artisans"
          para="Handmade crafted goods made with real passion and craftmanship"
        />

        <FeatureCard
          image="Purchase"
          heading="Unbeatable prices"
          para="For our materials and quality you won't find better prices anywhere"
        />

        <FeatureCard
          image="Sprout"
          heading="Recycled packaging"
          para="We use 100% recycled packaging to ensure our footprint is manageable"
        />
      </div>
    </div>
  );
};

export default Features;