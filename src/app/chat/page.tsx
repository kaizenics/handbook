"use client";

import { useRouter } from "next/navigation";
import { SideBar } from "~/components/sidebar";
import { MobileBar } from "~/components/mobilebar";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Chat() {
  const router = useRouter();

  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className=" flex-1 mx-auto flex flex-col">
          <div className="flex-1 overflow-y-hidden">
            <div className="sticky top-0 border-b-2 bg-white">
              <div className="flex justify-between px-6 py-3">
                <h1 className="font-montserrat text-black text-md sm:text-xl">
                  Welcome,{" "}
                  <span className="font-semibold text-blue-500">
                    Nicose John!
                  </span>
                </h1>
                <div className="flex space-x-5 items-center">
                  <FaBell className="sm:w-7 sm:h-7 w-6 h-6 text-red-800 cursor-pointer" />
                  <FaUserAlt className="sm:w-7 sm:h-7 w-6 h-6 text-red-800 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="max-w-screen-lg h-full px-md mx-auto">
              <div className="flex relative justify-center items-center">
                <div className="mt-5 sm:mt-20">
                  <h1 className="mt-4 text-black font-montserrat lg:text-4xl sm:text-3xl text-[6.5vw] font-bold tracking-tighter uppercase">
                    HCDC Student Handbook
                  </h1>
                  <div className="flex space-x-1 justify-end">
                    <p className="text-black font-montserrat font-regular lg:text-2xl sm:text-2xl text-[5vw]">
                      an AI Assistant
                    </p>
                    <VscSparkleFilled className="text-blue-700 sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]" />
                  </div>
                </div>
              </div>
              <div className="block md:hidden w-full pt-5 bg-white">
                <div className="flex justify-center px-2">
                  <div className="relative w-full lg:max-w-3xl md:max-w-lg sm:max-w-md max-w-md">
                    <input
                      placeholder="Ask Gab and Ana..."
                      className="w-full h-[50px] px-4 pr-14 py-4 text-sm text-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700 outline-none"
                      type="text"
                    />
                    <button
                      className="absolute top-2 right-3 bg-red-700 p-2 rounded-full transition duration-300 hover:bg-red-800"
                      onClick={() => router.push("/chat/start")}
                    >
                      <FaArrowUp className="w-[20px] h-[20px] text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="font-inter grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-1 justify-center items-center my-6">
                  {[
                    "What is the prescribe haircut for males?",
                    "What is CET?",
                    "Courses offered by Holy Cross of Davao College?",
                    "Courses offered by Holy Cross of Davao College?",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="relative sm:w-[180px] sm:h-[120px] w-[85vw] h-[50px] mx-3 sm:mx-0 bg-red-700 border rounded-md transition-all duration-300 hover:sm:scale-105 cursor-pointer p-4"
                    >
                      <p className="sm:text-balance line-clamp-1 sm:line-clamp-none text-white text-sm">
                        {text}
                      </p>
                      <FaSearch className="w-5 h-5 absolute bottom-3 right-3 text-white hidden sm:block" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-inter flex justify-center items-center space-x-2 mt-5">
                <FaWandMagicSparkles className="text-red-700 w-6 h-6" />
                <h1 className="font-regular text-red-700 md:text-lg">
                  How can I help you today?
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full pb-4 bg-white">
            <div className="flex justify-center px-2">
              <div className="relative w-full lg:max-w-3xl md:max-w-lg sm:max-w-md max-w-md">
                <input
                  placeholder="Ask Gab and Ana..."
                  className="w-full h-[50px] px-4 pr-14 py-4 text-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700 outline-none"
                  type="text"
                />
                <button
                  className="absolute top-2 right-2 bg-red-700 p-2 rounded-full transition duration-300 hover:bg-red-800"
                  onClick={() => router.push("/chat/start")}
                >
                  <FaArrowUp className="w-[20px] h-[20px] text-white" />
                </button>
              </div>
            </div>
          </div>
          <MobileBar />
        </div>
      </div>
    </>
  );
}
