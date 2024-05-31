"use client";

import { useState } from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

export const MobileBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("home");

  const handleNavigation = (path: string, item: string) => {
    setActive(item);
    router.push(path);
  };

  return (
    <div className="block md:hidden">
      <div className="fixed bottom-0 left-0 w-full bg-red-700">
        <div className="flex justify-center">
          <div
            onClick={() => handleNavigation("/chat", "home")}
            className={`py-1 w-[25vw] cursor-pointer ${
              active === "home" ? "border-t-4 border-blue-700" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <AiFillHome className="w-7 h-7" />
              <span className="text-sm text-white">Home</span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/about", "about")}
            className={`py-1 w-[25vw] cursor-pointer ${
              active === "about" ? "border-t-4 border-blue-700" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <AiFillInfoCircle className="w-7 h-7" />
              <span className="text-sm text-white">About</span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/contact", "contact")}
            className={`py-1 w-[25vw] cursor-pointer ${
              active === "contact" ? "border-t-4 border-blue-700" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <MdContactPhone className="w-7 h-7" />
              <span className="text-sm text-white">Contact</span>
            </div>
          </div>
          <div
            onClick={() => handleNavigation("/library", "library")}
            className={`py-1 w-[25vw] cursor-pointer ${
              active === "library" ? "border-t-4 border-blue-700" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <FaListUl className="w-7 h-7" />
              <span className="text-sm text-white">Library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
