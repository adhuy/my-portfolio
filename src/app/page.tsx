import React from "react";
import Navbar from "@/components/elements/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full desktop:w-[1440px] mx-auto shadow-lg">
      <header className="flex w-full desktop:w-[1440px] h-16 py-5 justify-center fixed top-0 z-10 bg-transparent">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
