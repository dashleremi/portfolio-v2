import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const project1 = () => {
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[#5c488a] text-4xl text-center font-extralight mb-8">School Management Dashboard</h1>
            <div className="flex justify-center">
                <img src="j-intl.png" alt="School Dashboard" className="w-[90%] max-w-[1300px] h-auto" />
            </div>
            <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200" />
        </div>

        <div className='flex justify-center w-full'>
            <div className='w-[80%] flex flex-col items-center'>
                <h1 className='text-[#5c488a] text-2xl text-center font-semibold'>Contract Project Overview</h1>
                <hr className="w-[20%] mx-auto my-3 border-t-2 border-gray-200 mb-20" />
                <div className="grid grid-cols-4 gap-10 w-full text-center">
                    <div>
                        <h2 className='mb-2 font-bold'>Timeline</h2>
                        <p>09/2024 - 10/2024</p>
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
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default project1