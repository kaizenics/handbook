import Image from "next/image";
import hcdcIcon from "~/assets/images/hcdc-icon-white.png";
import { VscSparkleFilled } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="sticky top-0 w-[350px] h-screen bg-red-700 overflow-hidden border-r">
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center space-x-2">
          <span className="mx-4 text-2xl font-bold text-emerald-500">
            <Image src={hcdcIcon} alt="HCDC" width={200} height={200} />
          </span>
        </div>
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
      <nav className="font-inter font-thin flex flex-col my-10">
          <div className="flex items-center my-3 py-1 px-6 space-x-3">
            <AiFillHome className="w-10 h-10" />
            <span className="text-lg text-white">Home</span>
          </div>
          <div className="flex items-center my-3 py-1 px-6 space-x-3">
            <AiFillInfoCircle className="w-10 h-10" />
            <span className="text-lg text-white">About</span>
          </div>
          <div className="flex items-center my-3 py-1 px-6  space-x-3">
            <MdHomeRepairService className="w-10 h-10" />
            <span className="text-lg text-white">Services</span>
          </div>
          <div className="flex items-center my-3 py-1 px-6  space-x-3">
            <MdContactPhone className="w-10 h-10" />
            <span className="text-lg text-white">Contact</span>
          </div>
        </nav>
    </div>
  );
};
