import HeroContent from "./heroComponent/HeroContent";

const Hero = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <video
        autoPlay
        loop
        muted
        className="absolute rotate-180 top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        {/* <source src="/images/blackhole.webm" type="video/webm"></source> */}
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
