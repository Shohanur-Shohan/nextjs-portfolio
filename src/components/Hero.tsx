"use client";
import HeroContent from "./heroComponent/HeroContent";
import { SparklesCore } from "./ui/Sparkles";

export default function Hero() {
  return (
    <div className="min-h-[100vh] w-full bg-[#030014] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <div className="relative z-20">
        <HeroContent/>
      </div>
    </div>
  );
}
