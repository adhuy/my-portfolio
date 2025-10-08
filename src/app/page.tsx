"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/app/hero/page";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

export default function Home() {
  const [ openSidebar, setOpenSidebar ] = useState(false);

  return (
    <div className="flex flex-col w-full desktop:w-[1440px] mx-auto shadow-lg">
      <header className="flex w-full desktop:w-[1440px] h-16 md:py-5 justify-center fixed top-0 z-10 bg-transparent">
        <Navbar setOpenSidebar={setOpenSidebar} />
      </header>
      <aside
        className={`flex flex-col md:hidden w-full h-full fixed right-0 top-0 z-20 justify-end items-end bg-transparent transform transition-all duration-500 ease-in-out
        ${openSidebar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        onClick={() => setOpenSidebar(false)}
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </aside>
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="flex w-full h-16 justify-center items-center bg-[#352d26] text-white">
        <p>created by Yudha Merdeka</p>
      </footer>
    </div>
  );
}
