import Image from "next/image";
import { SideBar } from "~/components/sidebar";
import { MobileBar } from "~/components/mobilebar";
import { VscSparkleFilled } from "react-icons/vsc";
import { IoMdChatbubbles } from "react-icons/io";
import { GoCodeOfConduct } from "react-icons/go";
import { MdPolicy } from "react-icons/md";

import hcdcBldg from "~/assets/images/hcdc-bldg.png";
import hcdcBldg2 from "~/assets/images/hcdc-bldg2.jpg";
import hcdcLogo from "~/assets/images/hcdclogo.png";
import oldHcdc from "~/assets/images/old-hcdc.jpg";

export default function About() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 relative">
        <div className="relative">
          <Image
            src={hcdcBldg}
            alt="hcdcBldg"
            layout="responsive"
            height={200}
            className="opacity-95"
          />
          <div className="absolute right-0 bottom-0 mb-10 mr-10">
            <div className="flex justify-center items-center">
              <Image src={hcdcLogo} alt="HCDC" height={100} className="my-1" />
            </div>
            <div className="text-white font-montserrat text-center">
              <h1 className="font-bold text-2xl uppercase">
                Holy Cross of Davao College
              </h1>
              <p className="font-regular text-xl">From Faith to Truth</p>
            </div>
          </div>
        </div>

        <section className="">
          <section>
            <div className="flex relative justify-center items-center ">
              <div className="mt-8">
                <h1 className="mt-4 text-black font-montserrat text-5xl font-bold tracking-tighter uppercase">
                  HCDC Student Handbook
                </h1>
                <div className="flex space-x-3 justify-end">
                  <p className="text-black font-montserrat text-4xl">
                    an AI Assistant
                  </p>
                  <VscSparkleFilled className="text-blue-600 w-[45px] h-[45px]" />
                </div>
              </div>
            </div>
            <p className="text-black text-center font-inter text-xl px-20 py-2">
              The Holy Cross of Davao College Student Handbook serves as your
              guide to college life at HCDC. It likely covers academic rules,
              expectations for conduct, student support services available, and
              even campus life information. Think of it as a rulebook and
              roadmap to navigate your academic journey at HCDC.
            </p>
            <div className="flex justify-center items-center my-4">
              <div className="grid grid-cols-3 gap-8 my-4">
                <div className="relative w-[400px] h-[400px] bg-white border border-gray-300 shadow-xl rounded-md">
                  <div className="flex justify-center items-center my-5 mx-auto">
                    <IoMdChatbubbles className="w-[80px] h-[80px] text-blue-700" />
                  </div>
                  <div className="font-inter">
                    <h1 className="px-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                      Chatbots for Student Support
                    </h1>
                    <p className="px-3 py-4 text-black text-lg text-center font-regular">
                      HCDC AI could implement chatbots powered by AI to answer
                      frequently asked questions (FAQs) from students. This
                      could provide 24/7 support for basic inquiries about
                      course registration, administrative processes, or campus
                      resources, freeing up human staff to handle more complex
                      issues.
                    </p>
                  </div>
                </div>
                <div className="relative w-[400px] h-[400px] bg-white border border-gray-300 shadow-xl rounded-md">
                  <div className="flex justify-center items-center my-5 mx-auto">
                    <GoCodeOfConduct className="w-[80px] h-[80px] text-blue-600" />
                  </div>
                  <div className="font-inter">
                    <h1 className="px-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                      Student Code of Conduct
                    </h1>
                    <p className="px-3 py-4 text-black text-lg text-center font-regular">
                      The Student Code of Conduct is a set of guidelines that
                      outlines the expectations for student behavior at Holy
                      Cross of Davao College (HCDC). It aims to foster a safe,
                      respectful, and productive learning environment for
                      everyone.
                    </p>
                  </div>
                </div>
                <div className="relative w-[400px] h-[400px] bg-white border border-gray-300 shadow-xl rounded-md">
                  <div className="flex justify-center items-center my-5 mx-auto">
                    <MdPolicy className="w-[80px] h-[80px] text-blue-600" />
                  </div>
                  <div className="font-inter">
                    <h1 className="px-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                      Academic Policies
                    </h1>
                    <p className="px-3 py-4 text-black text-lg text-center font-regular">
                      The Academic Policies section of the Student Handbook is
                      your roadmap to navigating your academic journey at Holy
                      Cross of Davao College (HCDC). It provides crucial
                      information to ensure you understand the processes and
                      expectations surrounding your coursework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-24">
            <div className="flex space-x-5 my-10">
              <Image
                src={oldHcdc}
                alt="oldHcdc"
                width={300}
                height={500}
                placeholder="blur"
              />
              <div className="font-inter">
                <h1 className="text-red-700 font-bold text-4xl text-start uppercase">
                  Historical Development of HCDC
                </h1>
                <p className="text-black text-lg text-start">
                  Holy Cross of Davao College is a Catholic educational
                  institution nurtured by three religious institutions to answer
                  the needs of the community for quality education rooted in the
                  tradition of the Catholic faith. From 1951 -1956, the
                  Religious of the Virgin Mary Sisters (RVM) laid the foundation
                  upon which the school was founded. The Foreign Mission Society
                  of Quebec (PME Fathers) from 1957 – 1976 strengthened and
                  improved these structures. And the Archdiocese of Davao from
                  1976 up to the present, building on the traditions of its
                  predecessors, expanded them to make the Holy Cross of Davao
                  College a prime college in the city of Davao, providing
                  affordable quality Catholic education not only to the people
                  of the city but also to the neighboring provinces.
                </p>
              </div>
            </div>
            <div className="flex space-x-5 my-10">
              <div className="font-inter">
                <h1 className="text-red-700 font-bold text-4xl text-end uppercase">
                  HCDC Vision-Mission Statement and Core Values
                </h1>
                <p className="text-black text-lg text-end">
                  The Holy Cross of Davao College envisions a fully vibrant
                  community of believers and Christ-centered evangelizers,
                  educated in the faith, animated by the passion for truth, and
                  engaged in building a more humane world. As members of this
                  Filipino archdiocesan educational institution, we commit
                  ourselves to cultivate high quality Catholic education for
                  all, attentive to the needs of the less fortunate; nurture a
                  culture of excellence and holiness; and provide a human and
                  Christian learning environment for the integral liberating
                  formation of persons who will become effective agents of
                  social transformation.
                  <span className="font-bold">
                    From faith to truth, we uphold the values of servant
                    leadership, dialogue, justice, peace, and integrity of
                    creation, with wisdom as the underlying principle.
                  </span>
                </p>
              </div>
              <Image
                src={hcdcBldg2}
                alt="oldHcdc"
                width={300}
                height={500}
                placeholder="blur"
              />
            </div>
          </section>
        </section>
        <MobileBar />
      </div>
    </div>
  );
}
