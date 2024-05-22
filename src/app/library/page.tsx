import { Sidebar } from "~/components/sidebar";

import { GoStack } from "react-icons/go";
import { HiOutlineCollection } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Threads() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative">
        <div className="flex justify-center">
          <div className="w-full h-[100px] border-b border-gray-300">
            <div className="flex justify-center items-center">
              <div className="flex justify-between w-[1040px] mx-auto py-10">
                <h1 className="text-red-900 text-center font-montserrat text-3xl font-bold ">
                  Library
                </h1>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search threads"
                    className="w-[500px] h-[35px] border text-sm text-black border-gray-300 rounded-full pl-10 pr-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition duration-200"
                  />
                  <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-10">
          <section className="font-inter w-[700px] py-4">
            <div className="py-1 border-b border-gray-300">
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <div className="pt-1">
                    <GoStack className="w-[20px] h-[20px] text-black" />
                  </div>
                  <h1 className="text-black font-semibold pt-1">Threads</h1>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-red-800 text-white p-2 rounded-md">
                    <BsThreeDots className="w-[15px] h-[15px] text-white" />
                  </button>
                  <button className="bg-red-800 text-white p-2 rounded-md">
                    <IoMdAdd className="w-[15px] h-[15px] text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b border-gray-300">
              <h1 className="text-black text-md font-semibold cursor-pointer transition duration-300 hover:text-red-800">
                What is the Prescribed haircut for Male?
              </h1>
              <p className="text-black text-sm font-regular line-clamp-2">
                The prescribed haircut for men typically refers to a haircut
                that is required or recommended in certain formal, professional,
                or institutional settings, such as the military, law
                enforcement, certain schools, or corporate environments.
              </p>
            </div>
            <div className="py-2 border-b border-gray-300">
              <h1 className="text-black text-md font-semibold cursor-pointer transition duration-300 hover:text-red-800">
                What is the Prescribed haircut for Male?
              </h1>
              <p className="text-black text-sm font-regular line-clamp-2">
                The prescribed haircut for men typically refers to a haircut
                that is required or recommended in certain formal, professional,
                or institutional settings, such as the military, law
                enforcement, certain schools, or corporate environments.
              </p>
            </div>
            <div className="py-2 border-b border-gray-300">
              <h1 className="text-black text-md font-semibold cursor-pointer transition duration-300 hover:text-red-800">
                What is the Prescribed haircut for Male?
              </h1>
              <p className="text-black text-sm font-regular line-clamp-2">
                The prescribed haircut for men typically refers to a haircut
                that is required or recommended in certain formal, professional,
                or institutional settings, such as the military, law
                enforcement, certain schools, or corporate environments.
              </p>
            </div>
          </section>

          <section className="w-[300px] py-4">
            <div className="py-1 border-b border-gray-300">
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <div className="pt-1">
                    <HiOutlineCollection className="w-[20px] h-[20px] text-black" />
                  </div>
                  <h1 className="text-black font-semibold pt-1">Collections</h1>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-red-800 text-white p-2 rounded-md">
                    <IoMdAdd className="w-[15px] h-[15px] text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 h-[100px] my-3 rounded-md">
              <div className="py-4 px-4 space-y-1">
                <p className="text-black font-inter text-center text-sm">
                  Organize your threads. Categorize it or share to others!
                </p>
                <button className="bg-red-800 text-white py-1.5 rounded-md text-xs w-full">
                  Get Started
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
