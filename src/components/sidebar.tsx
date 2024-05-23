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

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const router = useRouter();

  return (
    <div
      className={`sticky top-0 h-screen bg-red-700 overflow-hidden transition-all duration-300 ${
        isCollapsed ? "w-[85px]" : "w-[350px]"
      }`}
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
          <div className="mt-10">
            <h1 className="mt-4 font-inter text-3xl font-bold tracking-tighter uppercase">
              Student Handbook
            </h1>
            <div className="flex space-x-1 ml-36">
              <p className="font-inter font-thin text-xl">an AI Assistant</p>
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
          <AiFillHome className="w-9 h-9" />
          <span
            className={`text-lg text-white ${isCollapsed ? "hidden" : "block"}`}
          >
            Home
          </span>
        </div>
        <div
          onClick={() => router.push("/about")}
          className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
        >
          <AiFillInfoCircle className="w-9 h-9" />
          <span
            className={`text-lg text-white ${isCollapsed ? "hidden" : "block"}`}
          >
            About
          </span>
        </div>
        <div
          onClick={() => router.push("/contact")}
          className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
        >
          <MdContactPhone className="w-9 h-9" />
          <span
            className={`text-lg text-white ${isCollapsed ? "hidden" : "block"}`}
          >
            Contact
          </span>
        </div>
        <div
          onClick={() => router.push("/library")}
          className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
        >
          <FaListUl className="w-9 h-9" />
          <span
            className={`text-lg text-white ${isCollapsed ? "hidden" : "block"}`}
          >
            Library
          </span>
        </div>
        <div
          onClick={() => router.push("/library")}
          className="flex items-center py-4 px-4 space-x-3 mx-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer"
        >
          <LuExternalLink  className="w-9 h-9" />
          <span
            className={`text-lg text-white ${isCollapsed ? "hidden" : "block"}`}
          >
            <a href="https://studentportal.hcdc.edu.ph/login" target="_blank">Student Portal</a>
          </span>
        </div>
      </nav>
    </div>
  );
};
