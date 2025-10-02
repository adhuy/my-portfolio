"use client"

import React, { useState, useCallback } from "react";
import BoxTitle from "./elements/BoxTitle";
import CardSwap, { Card } from './elements/CardSwap';
import FadeInComponent from "./elements/FadeInComponent";
import Image from "next/image";
import { dataProjects } from "@/mock-data";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

function Projects () {
  const [ activeCard, setActiveCard ] = useState(dataProjects[0] || {});
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCount = dataProjects.length;

  const handleLink = (url: string) => {
    window.open(url, '_blank');
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    setActiveCard(dataProjects[(currentSlide + 1) % slideCount]);

    // scroll to top of the project description
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [slideCount, currentSlide]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    setActiveCard(dataProjects[(currentSlide - 1 + slideCount) % slideCount]);

    // scroll to top of the project description
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [slideCount, currentSlide]);

  return (
    <section
      className="flex flex-col w-full h-full md:min-h-[650px] mx-auto relative overflow-hidden border-b-4 border-[#483f3b] bg-[#dfdfdf]"
      id="projects"
    >
      <BoxTitle title="Project" position="left" customeStyle="absolute z-[5]" />

      <div className="flex flex-col lg:flex-row w-full h-full px-4 lg:px-0">
        <FadeInComponent>
          <div className="flex flex-col w-full h-full gap-10 lg:mx-10 my-10 mt-[128px] p-6 bg-[#fafafa] rounded-2xl">
            <h5 className="text-4xl">{activeCard ? activeCard.title : ''}</h5>
            <p className="text-[20px]">{activeCard ? activeCard.description : ''}</p>
            <div className="w-full flex flex-wrap gap-4">
              <div className="w-fit px-4 py-1 border-2 border-[#4b4b4b] rounded-full shadow-lg text-[#4b4b4b] font-bold">
                <p>HTML</p>
              </div>
              <div className="w-fit px-4 py-1 border-2 border-[#4b4b4b] rounded-full shadow-lg text-[#4b4b4b] font-bold">
                <p>Next.js</p>
              </div>
              <div className="w-fit px-4 py-1 border-2 border-[#4b4b4b] rounded-full shadow-lg text-[#4b4b4b] font-bold">
                <p>Tailwind CSS</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 rounded-full text-white font-bold animate-pulse cursor-pointer hover:animate-none hover:scale-105 transition-all duration-300" onClick={() => handleLink(activeCard.url)}>View Project</button>
          </div>
        </FadeInComponent>

        <div className="flex flex-col w-full lg:w-1/2 h-full lg:min-h-[650px] justify-end items-center">
          {/* Desktop view */}
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            onCardClick={(idx) => setActiveCard(dataProjects[idx])}
            customeStyle="w-[80%] h-full lg:w-[500px] lg:h-[400px] hidden lg:block"
          >
            {dataProjects.map((project) => (
              <Card key={project.id} customClass="!w-full cursor-pointer">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-xl hover:scale-105 transition-all duration-300 border-4 border-white"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Card>
            ))}
          </CardSwap>

          {/* Mobile view */}
          <FadeInComponent>
            <div className="flex lg:hidden w-full h-full mobile:w-[360px] justify-center items-center mb-10 bg-white p-2 rounded-xl relative">
              <Image
                src={dataProjects[currentSlide]?.imageUrl || ''}
                alt={dataProjects[currentSlide]?.title || ''}
                width={350}
                height={200}
                className="rounded-xl object-cover"
                style={{ width: '100%', height: 'auto' }}
              />

              {/* Arrows Button */}
              <button 
                className="absolute -left-5 bg-[#fafafa] rounded-full border-2 border-[#352d26] p-2 animate-bounce-x-left"
                onClick={prevSlide}
              >
                <ArrowBigLeftDash color="#352d26" fill="#352d26"/>
              </button>
              <button 
                className="absolute -right-5 bg-[#fafafa] rounded-full border-2 border-[#352d26] p-2 animate-bounce-x-right"
                onClick={nextSlide}
              >
                <ArrowBigRightDash color="#352d26" fill="#352d26"/>
              </button>
            </div>
          </FadeInComponent>
        </div>
      </div>  
    </section>
  );
}

export default Projects;
