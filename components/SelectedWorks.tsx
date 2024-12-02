import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectedWorks = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="mt-40 mb-20">
      <div className="text-center mb-20">
        <h1 className="text-white text-[40px] font-secondary font-extralight">Selected Works</h1>
      </div>

      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          {/* left side 1*/}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-[#d1d1d12b] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-sm">
              <h3 className="font-bold text-xl mb-5 mt-8">School Management Dashboard <span className="font-normal">(Freelance)</span></h3>
              <p className="mb-10">A comprehensive school management dashboard offering tailored access for admins, teachers, students, and parents.
                Available in English and Japanese.
              </p>
              <Link href="/project1"><Image src="/j-intl.png" alt="" className="opacity-50 hover:opacity-100 transition-all duration-500" width={700} height={300} /></Link>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#dadada74] rounded-full pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#bbbbbb] shadow"></div>
            </div>
          </div>

          {/* right side 1 */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#dadada74] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#bbbbbb] shadow"></div>
            </div>
            <div className="bg-[#d1d1d12b] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-sm">
              <h3 className="text-xl font-bold mb-5 mt-8">Chanel et moi <span className="font-normal">(Internship)</span></h3>
              <p className="mb-10">Luxurious, user-centric web experience blending elegant design with intuitve navigation to highlight brand&apos;s commitment.</p>
              <Link href="/project2"><Image src="/cem.png" alt="" className="opacity-50 hover:opacity-100 transition-all duration-500" width={700} height={240}/></Link>
            </div>
          </div>

          {/* left side 2 */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-[#d1d1d12b] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-sm">
              <h3 className="text-xl font-bold mb-5 mt-8">Sugar Sugar Hawaii <span className="font-normal">(Volunteer)</span></h3>
              <p className="mb-10">An online boutique offering trendy jewelry, accessories, and fashion items with a focus on vibrant, island-inspired designs.</p>
              <Link href="/project3"><Image src="/ssh.png" alt="" className="opacity-50 hover:opacity-100 transition-all duration-500" width={700} height={240}/></Link>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#dadada74] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#bbbbbb] shadow"></div>
            </div>
          </div>

          {/* right side 2 */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#dadada74] pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#bbbbbb] shadow"></div>
            </div>
            <div className="bg-[#d1d1d12b] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-sm">
              <h3 className="text-xl font-bold mb-5 mt-8">Anthropologie <span className="font-normal">(Internship)</span></h3>
              <p className="mg-10">Suite of high-performance, responsive web applications designed to boost user engagement and streamline workflows across devices.</p>
              <Link href="/project4"><Image src="/anthro-hp.png" alt="" className="opacity-50 hover:opacity-100 transition-all duration-500" width={900} height={240}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SelectedWorks;
