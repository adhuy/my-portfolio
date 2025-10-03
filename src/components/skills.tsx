import React from "react";
import BoxTitle from "./elements/BoxTitle";

function Skills() {
  const dataSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Figma", level: "Basic" },
    { name: "Postman", level: "Basic" },
  ];

  return (
    <section className="flex flex-col w-full h-[500px] mx-auto relative bg-[#bdbdbd] border-b-4 border-[#483f3b] overflow-hidden" id="skills">
      <BoxTitle title="Skill & Tools" position="right" />
      <div className="flex w-fit gap-4 m-auto justify-start items-center animate-loop-logo">
      {
        [...dataSkills, ...dataSkills].map((skill, index) => (
          <div key={index} className="flex bg-white rounded-full text-lg border-2 border-black">
            <p className="w-[150px] h-[50px] p-2 justify-center items-center text-center font-semibold">
              {skill.name}
            </p>
          </div>
        ))
      }
      </div>
    </section>
  );
} 

export default Skills;
