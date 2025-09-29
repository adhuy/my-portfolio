import React from "react";
import Image from "next/image";
import BoxTitle from "@/components/elements/BoxTitle";

function About() {
  return (
    <section className="flex flex-col w-full mx-auto relative bg-[#e5e5e5] border-t-4 border-b-4 border-[#483f3b] overflow-hidden" id="about">
      <BoxTitle title="About Me" position="left" />

      <div className="flex flex-col max-w-4xl h-full justify-center items-center my-16 text-center bg-[#fafafa] rounded-3xl p-10 shadow-lg mx-auto">
        <p className="text-lg">
          I&apos;m a passionate Frontend Developer with over 3 years of experience building responsive and user-friendly web applications. My expertise lies in utilizing modern technologies like React.js, Next.js, and Tailwind CSS to create seamless user experiences. I also have experience and expertise in API integration, UI/UX collaboration, and performance optimization to ensure my projects perform smoothly.
        </p>
        <p className="mt-6">Bachelor of Informatics Engineering from Universitas Jenderal Achmad Yani with a GPA of 3.37</p>
      
        <div className="
          relative w-[200px] h-[150px] 
          bg-[#483f3b] 
          [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] 
          mt-10
        ">
          <div className="
            absolute inset-[6px]
            [clip-path:inherit]
            overflow-hidden bg-white
          ">
            <Image 
              src="/assets/images/hero.png"
              width={200}
              height={200}
              alt="profile image" 
              className="relative w-full h-full object-contain [clip-path:inherit]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
