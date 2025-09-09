import React from "react";

function About() {
  return (
    <section className="flex w-full desktop:w-[1440px] min-h-[500px] mx-auto relative bg-[#e5e5e5] overflow-hidden">
      <div className="flex w-[300px] h-[300px] justify-center items-center p-10 bg-white rounded-full shadow-lg absolute -top-16 -left-16">
        <h3 className="text-4xl font-bold">About Me</h3>
      </div>
    </section>
  );
}

export default About;
