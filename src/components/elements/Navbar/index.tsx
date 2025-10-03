import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export interface NavbarProps {
  setOpenSidebar: (open: boolean) => void;
}

function Navbar({  setOpenSidebar }: NavbarProps) {
  return (
    <nav className="flex w-full md:w-[500px] h-16 mx-auto justify-end md:justify-center items-center px-6 bg-[#352d26] border-b-2 md:border-3 border-white md:rounded-4xl shadow-2xl">
      {/* Desktop Menu */}
      <ul className="hidden md:flex w-full h-full gap-8 justify-center items-center text-white font-semibold">
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'/'}>Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'#about'}>About</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'#projects'}>Project</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'#contact'}>Contact</Link></li>
      </ul>

      {/* Mobile Menu */}
      <div className="flex w-full justify-between items-center md:hidden">
        <p className="text-white text-2xl font-bold">YMP</p>
        <Menu color="#FFFFFF" size={40} onClick={() => setOpenSidebar(true)}/>
      </div>
    </nav>
  );
}

export default Navbar;
