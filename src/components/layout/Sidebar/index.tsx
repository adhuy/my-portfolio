import React from "react";
import Link from "next/link";
import { PanelRightClose } from "lucide-react";
import gsap from "gsap";

export interface SidebarProps {
  setOpenSidebar: (open: boolean) => void;
}

function Sidebar({ setOpenSidebar }: SidebarProps) {

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: id, offsetY: 90 },
        ease: "power2.inOut",
      });
    }

    setOpenSidebar(false);
  };

  return (
    <nav className="w-3/4 sm:w-1/2 h-full relative bg-[#352d26] border-l-2 border-white rounded-l-2xl">
      <ul className="flex flex-col justify-around h-full items-center text-white font-semibold">
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleScrollTo('#home')}><Link href={'/'} >Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleScrollTo('#about')}><Link href={'#about'}>About</Link></li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleScrollTo('#projects')}><Link href={'#projects'}>Project</Link></li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleScrollTo('#contact')}><Link href={'#contact'}>Contact</Link></li>
      </ul>

      <PanelRightClose
        color="#FFFFFF"
        size={60}
        className="absolute top-1/2 -left-10 p-2 bg-[#352d26] border-2 border-white rounded-full"
        onClick={() => setOpenSidebar(false)}
      />
    </nav>
  );
}

export default Sidebar;
