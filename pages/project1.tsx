import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'

const project1 = () => {
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[#5c488a] text-4xl text-center font-extralight mb-8">School Management Dashboard</h1>
            <div className="flex justify-center">
                <Image src="/j-intl.png" alt="School Dashboard" className="w-[90%] max-w-[1300px] h-auto hover:scale-105 transition-all duration-700" width={900} height={600}/>
            </div>
            <div className='flex items-center justify-center gap-20 mt-10 text-xl font-bold'><p>J&apos;s International School</p><p>Tokyo, JP</p></div>
            
        </div>
        <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200" />

        <div className='flex justify-center w-full'>
            <div className='w-[80%] flex flex-col items-center'>
                <h1 className='text-[#5c488a] text-2xl text-center font-semibold mt-10'>Contract Project Overview</h1>
                <hr className="w-[20%] mx-auto border-t-2 border-gray-200 mb-20" />
                <div className="grid grid-cols-4 gap-10 w-full text-center">
                    <div>
                        <h2 className='mb-2 font-bold'>Timeline</h2>
                        <p>09/2024 - 10/2024</p>
                        <p>Freelance Contract</p>
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
                        <p>Sketching</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>

                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Tools</h2>
                        <p>Figma</p>
                        <p>JavaScript/TypeScript</p>
                        <p>React</p>
                        <p>Next.js</p>
                    </div>
                </div>
                <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200 mt-20" />

                <div className='w-[80%] flex flex-col items-center text-center mb-32 mt-10'>
                    <h1 className='text-[#5c488a] text-2xl font-semibold'>Experience</h1>
                    <hr className="w-[10%] mx-auto border-t-2 border-gray-200 mb-20" />
                    <p className='text-lg'>Developed a responsive, multilingual web application using Next.js and Tailwind CSS, featuring advanced navigation, dynamic layouts, and lazy loading for optimal performance. Integrated real-time data visualization with Recharts, supporting radial, bar, and line charts. Enhanced accessibility with bilingual support for English and Japanese, and implemented dynamic forms with React-Hook-Form and Zon validation, supporting CRUD operations, modals, and paginated tables. Delivered a modular and reusable component architecture to ensure a seamless user experience across devices. Successfully completed the project under a freelance contract within one month, achieving full functionality and responsiveness.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default project1