import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex w-full desktop:w-[1440px] h-[600px] px-6 mx-auto relative bg-[#b5b5b5] overflow-hidden">
      <div className="flex w-2/3 h-60 justify-end items-center my-auto text-2xl">
        <div className="max-w-2xl bg-white rounded-3xl p-6 shadow-lg">
          {/* <p>Front End Developer with 3+ years of experience in building responsive, and user-friendly web applications using React.js, Next.js, and Tailwind CSS. Skilled in API integration, UI/UX collaboration, and optimizing performance for better Core Web Vitals.</p> */}
          <p className="text-[28px]">Hello! I&#39;m Yudha Merdeka, a Front End Developer. Welcome to my portfolio!</p>
          <p></p>
        </div>
      </div>
      <div className="w-1/3 h-full overflow-hidden relative">
        <Image
          src="/assets/images/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute -bottom-0 right-0 w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;