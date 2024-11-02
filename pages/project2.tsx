import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const project2 = () => {
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[#0b0b0d] text-4xl text-center font-extralight mb-8">Repair Service Page</h1>
            <div className="flex justify-center">
                <img src="cem.png" alt="School Dashboard" className="w-[90%] max-w-[1300px] h-auto hover:scale-150 transition-all duration-700" />
            </div>
            <div className='flex items-center justify-center gap-20 mt-10 text-xl font-bold'><p>CHANEL</p><p>Miami, FL</p></div>
            
        </div>
        <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200" />

        <div className='flex justify-center w-full'>
            <div className='w-[80%] flex flex-col items-center'>
                <h1 className='text-[#0b0b0d] text-2xl text-center font-semibold mt-10'>Intern Project Overview</h1>
                <hr className="w-[20%] mx-auto border-t-2 border-gray-200 mb-20" />
                <div className="grid grid-cols-4 gap-10 w-full text-center">
                    <div>
                        <h2 className='mb-2 font-bold'>Timeline</h2>
                        <p>05/2023 - 10/2023</p>
                        <p>Internship</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Disciplines</h2>
                        <p>Interface Design</p>
                        <p>Interaction Design</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Responsibilities</h2>
                        <p>Enhance Design</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>
                        <p>User Research</p>
                        <p>Usability Testing</p>

                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Tools</h2>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                        <p>React</p>
                        <p>Next.js</p>
                    </div>
                </div>
                <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200 mt-20" />

                <div className='w-[80%] flex flex-col items-center text-center mb-32 mt-10'>
                    <h1 className='text-[#0b0b0d] text-2xl font-semibold'>Experience</h1>
                    <hr className="w-[10%] mx-auto border-t-2 border-gray-200 mb-20" />
                    <p className='text-lg'>Enhanced UX/UI frameworks using Adobe XD and Figma to improve mobile responsiveness and user experience, driving stronger brand consistency across multiple projects. Conducted in-depth user research and usability testing to address key pain points and implemented design solutions to streamline task completion. Established standardized design documentation and style guidelines, which improved cross-team communication and ensured consistent design execution.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default project2