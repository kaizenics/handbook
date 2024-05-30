"use client";

import { useRouter } from "next/navigation";
import { Sidebar } from "~/components/sidebar";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

export default function Chat() {
  const router = useRouter();

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 mx-auto flex flex-col">
          <div className="flex-1 overflow-y-hidden">
            <div className="sticky top-0 bg-white">
              <div className="px-5 py-3">
                <h1 className="text-black text-2xl">Welcome Back,</h1>
                <p className="text-blue-700 font-semibold text-3xl">User</p>
              </div>
            </div>

            <div className="max-w-screen-lg h-full px-md mx-auto">
              <div className="flex relative justify-center items-center">
                <div className="mt-0">
                  <h1 className="mt-4 text-black font-montserrat lg:text-4xl md:text-3xl font-bold tracking-tighter uppercase">
                    HCDC Student Handbook
                  </h1>
                  <div className="flex space-x-1 justify-end">
                    <p className="text-black font-montserrat font-regular lg:text-2xl md:text-2xl">
                      an AI Assistant
                    </p>
                    <VscSparkleFilled className="text-blue-700 lg:w-[30px] lg:h-[30px] md:w-[30px] md:h-[30px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="font-inter grid grid-cols-4 gap-2 justify-center items-center my-6">
                  {[
                    "What is the prescribe haircut for males?",
                    "What is CET?",
                    "Courses offered by Holy Cross of Davao College?",
                    "Courses offered by Holy Cross of Davao College?",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="relative md:w-[180px] h-[120px] bg-red-700 border rounded-md transition-all duration-300 hover:scale-105 cursor-pointer p-4"
                    >
                      <p className="text-balance text-white text-sm">{text}</p>
                      <FaSearch className="w-5 h-5 absolute bottom-3 right-3 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-inter flex justify-center items-center space-x-2 mt-5">
                <FaWandMagicSparkles className="text-red-700 w-6 h-6" />
                <h1 className="font-regular text-red-700 lg:text-lg md:text-xl">
                  How can I help you today?
                </h1>
              </div>
          </div>

          </div>
          <div className="sticky bottom-0 w-full px-4 pb-4 bg-white">
            <div className="flex justify-center">
              <div className="relative w-full lg:w-1/2 px-2">
                <input
                  placeholder="Ask Gab and Ana..."
                  className="w-full h-[57px] px-4 pr-14 py-2 text-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700 outline-none"
                  type="text"
                />
                <button
                  className="absolute top-2 right-5 bg-red-700 p-3 rounded-full transition duration-300 hover:bg-red-800"
                  onClick={() => router.push("/chat/start")}
                >
                  <FaArrowUp className="w-[20px] h-[20px] text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
