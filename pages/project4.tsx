import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'
import { Helmet } from 'react-helmet'

const project4 = () => {
  return (
    <div>
      <Helmet>
        <title>Anthropologie</title>
      </Helmet>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[#c9ce48] text-4xl text-center font-secondary font-extralight mb-8 mt-20">Employee Training Apps</h1>
            <div className="flex justify-center">
                <Image src="/anthro-hp.png" alt="School Dashboard" className="h-auto hover:scale-105 transition-all duration-700" width={1000} height={700}/>
            </div>
            <div className='flex items-center justify-center gap-20 mt-10 text-xl font-bold'><p>Anthropologie</p><p>Honolulu, HI</p></div>
            
        </div>
        <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200" />

        <div className='flex justify-center w-full'>
            <div className='w-[80%] flex flex-col items-center'>
                <h1 className='text-[#c9ce48] text-2xl text-center font-semibold mt-10'>Intern Project Overview</h1>
                <hr className="w-[20%] mx-auto border-t-2 border-gray-200 mb-20" />
                <div className="grid grid-cols-4 gap-10 w-full text-center">
                    <div>
                        <h2 className='mb-2 font-bold'>Timeline</h2>
                        <p>08/2022 - 05/2023</p>
                        <p>Internship</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Disciplines</h2>
                        <p>Interface Design</p>
                        <p>Interaction Design</p>
                        <p>Frontend Design</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Responsibilities</h2>
                        <p>Conceptual Redesign</p>
                        <p>Interface Design</p>
                        <p>Interaction Design</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Tools</h2>
                        <p>HTML/CSS</p>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                        <p>Vue.js</p>
                    </div>
                </div>
                <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200 mt-20" />

                <div className='w-[80%] flex flex-col items-center text-center mb-32 mt-10'>
                    <h1 className='text-[#c9ce48] text-2xl font-semibold'>Experience</h1>
                    <hr className="w-[10%] mx-auto border-t-2 border-gray-200 mb-20" />
                    <p className='text-lg'>Redesigned websites using modern frameworks and implemented structured change management processes to maintain code integrity and compliance with corporate standards. Developed and optimized responsive websites for multiple employee-exclusive applications using HTML, CSS, and JavaScript, focusing on enhanced performance and user engagement. Additionally, collaborated on compliance projects to ensure adherence to internal security protocols, contributing to comprehensive documentation efforts to support system security and integrity.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default project4