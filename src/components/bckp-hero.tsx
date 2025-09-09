import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex w-full desktop:w-[1440px] h-[1000px] px-6 mx-auto relative bg-[#b5b5b5] overflow-hidden">
      <div className="flex flex-col w-2/3 h-full my-auto text-2xl">
        <div className="flex justify-center items-center w-full h-[600px]">
          <div className="max-w-2xl bg-white rounded-3xl p-6 shadow-lg">
            {/* <p>Front End Developer with 3+ years of experience in building responsive, and user-friendly web applications using React.js, Next.js, and Tailwind CSS. Skilled in API integration, UI/UX collaboration, and optimizing performance for better Core Web Vitals.</p> */}
            <p className="text-[28px]">Hello! I&#39;m Yudha Merdeka, a Front End Developer. Welcome to my portfolio!</p>
            <p></p>
          </div>
        </div>

        <div className="w-full h-[400px] flex justify-start pl-10">
          <h3 className="text-4xl font-bold">About Me</h3>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/3 h-full relative">
        <Image
          src="/assets/images/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;