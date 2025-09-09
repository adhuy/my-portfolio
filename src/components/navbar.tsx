import React from "react";

function Navbar() {
  return (
    <nav className="flex w-[600px] h-16 mx-auto justify-center items-center px-6 bg-[#352d26] rounded-4xl">
      <ul className="flex w-full h-full gap-8 justify-center items-center text-white font-semibold">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Skills</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;