"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hcdcIcon from "~/assets/images/hcdc-icon-white.png";
import { VscSparkleFilled } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const router = useRouter();

  return (
    <>
      <div
        className={`sticky top-0 h-screen bg-red-700 overflow-hidden transition-all duration-300 ${
          isCollapsed ? "w-[80px]" : "w-[250px]"
        } hidden md:block`}
      >
        <div className="flex items-center justify-between mt-8 mx-6">
          <div className="flex items-center space-x-2">
            <span
              className={`mx-4 text-2xl font-bold text-emerald-500 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              <Image src={hcdcIcon} alt="HCDC" width={200} height={200} />
            </span>
          </div>
          <button onClick={toggleSidebar} className="text-white">
            {isCollapsed ? <IoMdMenu size={34} /> : <IoMdClose size={34} />}
          </button>
        </div>
        {!isCollapsed && (
          <div className="flex flex-col items-center mt-8">
            <div className="mt-4">
              <h1 className="mt-4 font-inter text-xl font-bold tracking-tighter uppercase">
                Student Handbook
              </h1>
              <div className="flex space-x-1 ml-20">
                <p className="font-inter font-thin text-sm">an AI Assistant</p>
                <VscSparkleFilled className="w-[25px] h-[25px]" />
              </div>
            </div>
          </div>
        )}
        <nav className="font-inter font-thin flex flex-col my-10">
          <div
            onClick={() => router.push("/chat")}
            className="flex items-center py-3 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
          >
            <AiFillHome className="w-8 h-8" />
            <span
              className={`text-md text-white ${isCollapsed ? "hidden" : "block"}`}
            >
              Home
            </span>
          </div>
          <div
            onClick={() => router.push("/about")}
            className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
          >
            <AiFillInfoCircle className="w-8 h-8" />
            <span
              className={`text-md text-white ${isCollapsed ? "hidden" : "block"}`}
            >
              About
            </span>
          </div>
          <div
            onClick={() => router.push("/contact")}
            className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
          >
            <MdContactPhone className="w-8 h-8" />
            <span
              className={`text-md text-white ${isCollapsed ? "hidden" : "block"}`}
            >
              Contact
            </span>
          </div>
          <div
            onClick={() => router.push("/library")}
            className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
          >
            <FaListUl className="w-8 h-8" />
            <span
              className={`text-md text-white ${isCollapsed ? "hidden" : "block"}`}
            >
              Library
            </span>
          </div>
          <div className={`flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer ${isCollapsed ? "hidden" : "block"}`}>
            <LuExternalLink className="w-8 h-8" />
            <span
              className="text-md text-white"
            >
              <a href="https://studentportal.hcdc.edu.ph/login" target="_blank">
                Student Portal
              </a>
            </span>
          </div>
          <div className={`flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer ${isCollapsed ? "hidden" : "block"}`}>
            <LuExternalLink className="w-8 h-8" />
            <span
              className="text-md text-white"
            >
              <a href="https://www.hcdc.edu.ph/" target="_blank">
                HCDC Page
              </a>
            </span>
          </div>
        </nav>
        
      </div>
     
    </>
  );
};
