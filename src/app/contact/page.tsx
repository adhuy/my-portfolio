"use client";

import React from "react";
import BoxTitle from "../../components/elements/BoxTitle";
import Image from "next/image";

function Contact() {
  return (
    <section className="flex flex-col w-full h-[400px] mx-auto relative bg-gradient-to-b from-[#929292] to-[#e5e5e5] border-b-4 border-[#483f3b] overflow-hidden" id="contact">
      <BoxTitle title="Contact" position="right" />
      <div className="flex flex-wrap w-full h-full gap-2 lg:gap-4 justify-center items-center m-auto px-2">
        <button
          className="flex w-[250px] h-[60px] bg-gradient-to-br from-white to-[#b8b7b7] border-2 border-white rounded-full text-4xl p-2 justify-center font-bold cursor-pointer hover:scale-105 transition-transform duration-200 shadow-2xl"
          onClick={() => window.open('https://www.linkedin.com/in/yudha-merdeka-putra91/', '_blank')}
        >
          <span className="flex gap-0.5">
            <p>Linked</p>
            <Image
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              width={50}
              height={20}
              className="object-fill"
              style={{ width: 'auto', height: 'auto' }}
            />
          </span>
        </button>
        <button 
          className="flex w-[250px] h-[60px] bg-gradient-to-br from-white to-[#b8b7b7] border-2 border-white rounded-full text-4xl p-2 justify-center font-bold cursor-pointer hover:scale-105 transition-transform duration-200 shadow-2xl"
          onClick={() => window.open('https://github.com/adhuy/', '_blank')}
        >
          <span className="flex gap-2">
            <Image
              src="/assets/icons/github.svg"
              alt="GitHub"
              width={50}
              height={20}
              className="object-fill"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p>GitHub</p>
          </span>
        </button>
        <button 
          className="flex w-[250px] h-[60px] bg-gradient-to-br from-white to-[#b8b7b7] border-2 border-white rounded-full text-4xl p-2 justify-center font-bold cursor-pointer hover:scale-105 transition-transform duration-200 shadow-2xl"
          onClick={() => window.open('mailto:yudhamerdeka91@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Yudha%2C%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.')}
          >
          <span className="flex gap-2">
            <Image
              src="/assets/icons/email.svg"
              alt="Email"
              width={50}
              height={20}
              className="object-fill"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p>Email</p>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Contact;
