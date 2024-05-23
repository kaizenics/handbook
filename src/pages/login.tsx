"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import hcdcIcon from "~/assets/images/hcdc-icon.png";
import hcdcStroke from "~/assets/images/hcdc-stroke.png";
import hcdcLogo from "~/assets/images/hcdclogo.png";

export const Login = () => {
  const router = useRouter();

    return (
        <>
        <main>
      <div className="max-w-screen-xl w-[90%] mx-auto mt-20">
        <div className="flex flex-col justify-center items-center">
          <Image src={hcdcIcon} alt="HCDC Logo" />
          <h1 className="text-red-700 text-6xl my-5 font-inter tracking-tighter font-bold uppercase">
            College Student Handbook
          </h1>
        </div>
      </div>

      {/* <div className="absolute top-[320px] right-[690px] bottom-[100px]">
      <Image
        src={hcdcStroke}
        alt="HCDC Stroke"
        className="opacity-20 w-[540px] h-[500px] "
      />
      </div> */}

      <div className="flex justify-center items-center">
        <div className="my-10 w-[550px] h-[550px] bg-red-700 rounded-md">
          <div className="flex justify-center items-center mt-10">
            <Image
              src={hcdcLogo}
              alt="HCDC Logo"
              className="w-[110px] h-[120px]"
            />
          </div>
          <h1 className="text-4xl font-inter font-bold tracking-tighter text-center uppercase my-3">
            Student Login
          </h1>
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="relative w-[400px] h-[50px] my-2">
              <FaUser className="absolute left-3 top-2/3 transform -translate-y-1/2 text-red-700" />
              <input
                type="text"
                placeholder="Email"
                className="w-[400px] h-[50px] pl-9 pr-3 bg-gray-200 text-black rounded-md my-2 outline-red-500 border-none placeholder:text-red-700 placeholder:font-inter"
              />
            </div>
            <div className="relative w-[400px] h-[50px] my-2">
              <FaLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-red-700" />
              <input
                type="password"
                placeholder="Password"
                className="w-[400px] h-[50px] pl-9 pr-3 bg-gray-200 text-black rounded-md my-2 outline-red-500 border-none placeholder:text-red-700 placeholder:font-inter"
              />
            </div>
            <div className="flex justify-between space-x-40 mt-2">
              <label className="flex space-x-1 items-center cursor-pointer">
                <input type="checkbox" className="w-[15px] h-[15px] py-0 my-2 bg-red-700" />
                <span className="font-inter text-white text-sm py-1">
                  Remember me
                </span>
              </label>
              <h1 className="font-inter text-white text-sm py-1 underline">
                Forgot password?
              </h1>
            </div>
            <button className="w-[120px] h-[40px] font-inter font-bold bg-white text-red-500 rounded-md my-4"
            onClick={() => router.push("/chat")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
        </>
    )
}