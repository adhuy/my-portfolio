"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mouse } from "lucide-react";

const TYPING_TEXT = "Hello! I'm Yudha Merdeka, a Front End Developer. Welcome to My Portfolio Website!";

function Hero() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (displayText.length < TYPING_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayText(TYPING_TEXT.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayText]);
  
  return (
    <section className="flex flex-col md:flex-row w-full h-screen md:min-h-[640px] 2xl:h-[800px] px-6 mx-auto relative bg-[#b5b5b5] overflow-hidden">
      <div className="flex w-full md:w-2/3 h-2/3 md:h-full justify-end items-end md:items-center my-auto text-2xl">
        <div className="w-2xl min-h-[100px] bg-white rounded-3xl p-6 shadow-lg">
          <p>{displayText}</p>
        </div>
      </div>
      <div className="flex w-full md:w-1/3 h-1/3 md:h-full justify-end items-end my-auto">
        <Image
          src="/assets/images/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-[200px] md:w-[500px] h-auto object-cover"
          priority
        />
      </div>
      <div className="hidden md:flex justify-center absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
        <Mouse size={64} color="#161616" />
      </div>
    </section>
  );
}

export default Hero;
