"use client";

import { useState } from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

export const MobileBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("home");

  const handleNavigation = (path: any, item: any) => {
    setActive(item);
    router.push(path);
  };

  return (
    <>
      <div className="block md:hidden">
        <div className="fixed bottom-0 w-full h-16 bg-red-700">
          <div className="flex flex-row justify-center relative">
            {active === "home" && (
              <div className="absolute top-1 left-[12.5%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-[25vw] h-2 "></div>
            )}
            {active === "about" && (
              <div className="absolute top-1 left-[37.5%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-[25vw] h-2 "></div>
            )}
            {active === "contact" && (
              <div className="absolute top-1 left-[62.5%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-[25vw] h-2 "></div>
            )}
            {active === "library" && (
              <div className="absolute top-1 left-[87.5%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-[25vw] h-2 "></div>
            )}
            <div
              onClick={() => handleNavigation("/chat", "home")}
              className={`py-3 w-[25vw] cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <AiFillHome className="w-6 h-6" />
                <span className="text-sm font-semibold text-white">Home</span>
              </div>
            </div>
            <div
              onClick={() => handleNavigation("/about", "about")}
              className={`py-3 w-[25vw] cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <AiFillInfoCircle className="w-6 h-6" />
                <span className="text-sm font-semibold text-white">About</span>
              </div>
            </div>
            <div
              onClick={() => handleNavigation("/contact", "contact")}
              className={`py-3 w-[25vw] cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <MdContactPhone className="w-6 h-6" />
                <span className="text-sm font-semibold text-white">Contact</span>
              </div>
            </div>
            <div
              onClick={() => handleNavigation("/library", "library")}
              className={`py-3 w-[25vw] cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <FaListUl className="w-6 h-6" />
                <span className="text-sm font-semibold text-white">Library</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
