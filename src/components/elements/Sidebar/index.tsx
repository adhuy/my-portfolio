import React from "react";
import Link from "next/link";
import { PanelRightClose } from "lucide-react";

export interface SidebarProps {
  setOpenSidebar: (open: boolean) => void;
}

function Sidebar({ setOpenSidebar }: SidebarProps) {
  return (
    <nav className="h-full relative">
      <ul className="flex flex-col justify-around h-full items-center text-white font-semibold">
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'/'}>Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'#about'}>About</Link></li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'#projects'}>Project</Link></li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
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
