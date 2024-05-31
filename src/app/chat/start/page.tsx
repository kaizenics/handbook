import { SideBar } from "~/components/sidebar";
import { useRouter } from "next/navigation";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaArrowUp } from "react-icons/fa6";

export default function Start() {
  

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 relative">
        <div className="">
        <div className="font-inter max-w-screen-lg w-[65%] mx-auto my-7">
              <div className="mt-5">
                <h1 className="mt-4 text-black font-inter text-2xl font-bold tracking-tighter uppercase">
                  HCDC Student Handbook
                </h1>
                <div className="flex space-x-1 justify-start">
                  <p className="text-black font-inter font-thin text-xl">
                    an AI Assistant
                  </p>
                  <VscSparkleFilled className="text-blue-700 w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="relative flex flex-col space-y-4 mt-5">
                {/* Render the chat messages here */}
                <div className="bg-gray-400 p-4 rounded-lg place-self-end max-w-[800px]">
                  What is the Prescribed haircut for Male?
                </div>

                <div className="bg-red-700 p-4 rounded-lg place-self-start max-w-[800px]">
                  <h1>
                    The prescribed haircut for men typically refers to a haircut
                    that is required or recommended in certain formal,
                    professional, or institutional settings, such as the
                    military, law enforcement, certain schools, or corporate
                    environments.
                  </h1>
                </div>
                {/* Add more chat messages as needed */}
              </div>
              <div className="absolute flex justify-center bottom-7">
                <div className="relative">
                  <input
                    placeholder="Ask Gab and Ana..."
                    className="font-inter w-[1040px] h-[56px] outline-none py-4 pl-4 pr-14 text-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700"
                    type="text"
                  />
                  <button className="absolute font-montserrat bg-red-700 py-3 px-3 rounded-full top-2 right-2 transition duration-300 hover:bg-red-800">
                    <FaArrowUp className="w-[15px] h-[15px]" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
