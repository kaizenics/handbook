import { Sidebar } from "~/components/sidebar";
import Image from "next/image";

import { TbSocial } from "react-icons/tb";
import { SiSemanticscholar } from "react-icons/si";
import { RiGuideFill } from "react-icons/ri";

import hcdcStroke from "~/assets/images/hcdc-stroke.png";
import hcdcIcon from "~/assets/images/hcdc-icon.png";
export default function Contact() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <section>
          <div className="relative h-[200px] border-b-2 border-gray-300">
            <div className="flex justify-center items-center py-16 space-x-1">
              <div>
                <h1 className="text-red-900 font-montserrat text-4xl font-bold uppercase">
                  Get in touch with us
                </h1>
                <p className="text-red-900 font-montserrat text-end">
                  We had love to hear from you!
                </p>
              </div>
              <Image src={hcdcIcon} alt="HCDC" width={400} height={200} />
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <Image
                src={hcdcStroke}
                alt="hcdcBldg"
                layout="responsive"
                height={400}
                className="opacity-20"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center my-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-[400px] h-[500px] bg-white border-x border-gray-300">
              <div className="flex justify-center items-center my-5 mx-auto">
                <TbSocial className="w-[80px] h-[80px] text-blue-600" />
              </div>
              <div className="font-inter ">
                <h1 className="px-3 pb-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                  Holy Cross of Davao College
                </h1>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Customer Service Online Request Form:{" "}
                  <a href="https://bit.ly/hcdcserves" target="_blank">
                    <span className="text-red-900 underline">
                      https://bit.ly/hcdcserves
                    </span>
                  </a>
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Facebook:{" "}
                  <a href="https://bit.ly/hcdcserves" target="_blank">
                    <span className="text-red-900 underline">
                      https://facebook.com/hcdcinc
                    </span>
                  </a>
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Twitter: @hcdcofficial
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Instagram: @holycrossofdavaocollege
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Instagram: @holycrossofdavaocollege
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Smart / WhatsApp: 0939 768 3600
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Globe: 0945 600 4272
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[500px] bg-white border-x border-gray-300">
              <div className="flex justify-center items-center my-5 mx-auto">
                <SiSemanticscholar className="w-[80px] h-[80px] text-blue-600" />
              </div>
              <div className="font-inter">
                <h1 className="px-3 pb-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                  Admission and Scholarship Office
                </h1>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Telephone Number: (082) 221-9071 to 79 local 203
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  E-mail Address:{" "}
                  <a href="mailto:admission_scholarship@hcdc.edu.ph">
                    <span className="text-red-900 underline">
                      admission_scholarship@hcdc.edu.ph
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[500px] bg-white border-x border-gray-300">
              <div className="flex justify-center items-center my-5 mx-auto">
                <RiGuideFill className="w-[80px] h-[80px] text-blue-600" />
              </div>
              <div className="font-inter">
                <h1 className="px-3 text-red-700 text-2xl text-center font-bold tracking-tighter">
                  College Guidance and Counseling Center
                </h1>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Facebook:{" "}
                  <a href="https://www.facebook.com/HCDCCGCC" target="_blank">
                    <span className="text-red-900 underline">
                      https://www.facebook.com/HCDCCGCC
                    </span>
                  </a>
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  Telephone Number: (082) 221-9071 to 79 local 151
                </p>
                <p className="px-3 py-1 text-black text-md text-center font-regular">
                  E-mail Address:{" "}
                  <a href="mailto:collegeguidance@hcdc.edu.ph">
                    <span className="text-red-900 underline">
                      collegeguidance@hcdc.edu.ph
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
