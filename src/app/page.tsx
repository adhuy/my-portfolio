"use client";

import React, { useState } from "react";
import Navbar from "@/components/elements/Navbar";
import Sidebar from "@/components/elements/Sidebar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  const [ openSidebar, setOpenSidebar ] = useState(false);

  return (
    <div className="flex flex-col w-full desktop:w-[1440px] mx-auto shadow-lg">
      <header className="flex w-full desktop:w-[1440px] h-16 md:py-5 justify-center fixed top-0 z-10 bg-transparent">
        <Navbar setOpenSidebar={setOpenSidebar} />
      </header>
      <aside
        className={`flex flex-col md:hidden w-3/4 sm:w-1/2 h-full fixed right-0 top-0 z-20 bg-[#352d26] border-l-2 border-white rounded-l-2xl p-4 transform transition-all duration-500 ease-in-out
        ${openSidebar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </aside>
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
