import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <div className="flex flex-col w-full desktop:w-[1440px] mx-auto shadow-lg">
      <header className="flex w-full desktop:w-[1440px] h-16 py-5 justify-center fixed top-0 z-10 bg-transparent">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <Hero />
        <About />
      </main>
    </div>
  );
}
