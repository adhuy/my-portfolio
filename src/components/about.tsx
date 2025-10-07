import React from "react";
import Image from "next/image";
import BoxTitle from "@/components/elements/BoxTitle";
import FadeInComponent from "./elements/FadeInComponent";

function About() {
  return (
    <section className="flex flex-col w-full h-full mx-auto relative bg-[#e5e5e5] border-t-4 border-b-4 border-[#483f3b] overflow-hidden" id="about">
      <BoxTitle title="About Me" position="left" />

      <FadeInComponent>
        <div className="flex flex-col max-w-4xl h-full justify-center items-center my-8 md:my-16 text-center bg-[#fafafa] rounded-3xl p-10 shadow-lg mx-4">
          <p className="text-lg">
            A Software Developer with 5 years of experience in web application development, specializing in Front-End Development for the past 3 years. Skilled in React.js, Next.js, and Tailwind CSS, with strong attention to detail in UI/UX, performance optimization, and clean code architecture. Experienced working in cross-functional Agile/Scrum teams and passionate about building scalable, maintainable, and user-focused applications.
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
                className="relative w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </FadeInComponent>
    </section>
  );
}

export default About;
