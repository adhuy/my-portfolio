"use client"

import React, { useState } from "react";
import BoxTitle from "./elements/BoxTitle";
import CardSwap, { Card } from '@/components/elements/CardSwap';
import Image from "next/image";
import { dataProjects } from "@/mock-data";

function Projects () {
  const [ activeCard, setActiveCard ] = useState(dataProjects[0] || {});

  const handleLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section
      className="flex flex-col w-full min-h-[650px] mx-auto relative overflow-hidden border-b-4 border-[#483f3b] bg-[#dfdfdf]"
      id="projects"
    >
      <BoxTitle title="Project" position="left" customeStyle="absolute z-[5]" />

      <div className="flex flex-col w-1/2 h-full gap-10 mx-10 mt-[128px] p-6 bg-[#fafafa] rounded-2xl">
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

      <div className="flex flex-col w-1/2 h-full gap-10 bg-red-500">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          onCardClick={(idx) => setActiveCard(dataProjects[idx])}
        >
          {dataProjects.map((project) => (
            <Card key={project.id} customClass="cursor-pointer">
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
      </div>
    </section>
  );
}

export default Projects;
