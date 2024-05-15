import { Sidebar } from "~/components/sidebar";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Image from "next/image";

import hcdcStroke from "~/assets/images/hcdc-stroke.png";

export default function Chat() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 relative">
          <Image
            src={hcdcStroke}
            alt="HCDC"
            className="w-[1555px] h-[920px] absolute top-0 right-0 bottom-0 opacity-15"
          />
          <div className="mx-5 my-7">
            <h1 className="text-black text-4xl">Welcome Back,</h1>
            <p className="text-red-700 font-semibold text-5xl">User</p>
          </div>
          <div className="flex relative justify-center items-center ">
            <div className="mt-14">
              <h1 className="mt-4 text-black font-inter text-6xl font-bold tracking-tighter uppercase">
                HCDC Student Handbook
              </h1>
              <div className="flex space-x-3 justify-end">
                <p className="text-black font-inter font-thin text-5xl">
                  an AI Assistant
                </p>
                <VscSparkleFilled className="text-red-700 w-[50px] h-[50px]" />
              </div>
            </div>
          </div>
          <div className="font-inter flex justify-center items-center my-6">
            <div className="grid grid-cols-3 gap-4 relative">
              <div className="relative w-[400px] h-[200px] bg-red-700 rounded">
                <p className="py-8 px-5 text-4xl text-left">
                  What is the prescribe haircut for males?
                </p>
                <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3" />
              </div>
              <div className="relative w-[400px] h-[200px] bg-red-700 rounded">
                <p className="py-8 px-5 text-4xl text-left">What is CET?</p>
                <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3" />
              </div>
              <div className="relative w-[400px] h-[200px] bg-red-700 rounded">
                <p className="py-8 px-5 text-4xl text-left">
                  Courses offered by Holy Cross of Davao College?
                </p>
                <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3" />
              </div>
            </div>
          </div>
          <div className="font-inter flex justify-center items-center space-x-4 mt-10">
            <FaWandMagicSparkles className="text-red-700 w-[50px] h-[50px]" />
            <h1 className="font-regular text-red-700 text-4xl">
              How can I help you today?
            </h1>
          </div>
          <div className="flex justify-center mt-52">
                    <div className="relative">
                        <input
                            className="w-[1000px] h-[56px] outline-none py-4 pl-4 pr-14 text-black bg-gray-200 border border-gray-200 rounded-full"
                            type="text"/>
                        <button
                            className="absolute font-montserrat bg-red-700 py-3 px-3 rounded-full top-2 right-2"><FaArrowUp className="w-[15px] h-[15px]" /></button>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
}
