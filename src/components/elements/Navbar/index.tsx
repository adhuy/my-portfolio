import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex w-[600px] h-16 mx-auto justify-center items-center px-6 bg-[#352d26] border-2 border-white rounded-4xl">
      <ul className="flex w-full h-full gap-8 justify-center items-center text-white font-semibold">
        <Link className="hover:text-gray-300 cursor-pointer" href={'/'}>Home</Link>
        <Link className="hover:text-gray-300 cursor-pointer" href={'#about'}>About</Link>
        <Link className="hover:text-gray-300 cursor-pointer" href={'#skills'}>Skills</Link>
        <Link className="hover:text-gray-300 cursor-pointer" href={'#projects'}>Project</Link>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
