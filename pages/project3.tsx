import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'
import { Helmet } from 'react-helmet'

const project3 = () => {
  return (
    <div>
      <Helmet>
        <title>Sugar Sugar Hawaii</title>
      </Helmet>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[#bd53cd] text-4xl text-center font-extralight mb-8">E-Commerce Website</h1>
            <div className="flex justify-center">
                <Image src="/ssh.png" alt='' className="h-auto hover:scale-105 transition-all duration-700" width={750} height={500}/>
            </div>
            <div className='flex items-center justify-center gap-20 mt-10 text-xl font-bold'><p>Sugar Sugar Hawaii, LLC</p><p>Honolulu, HI</p></div>
            
        </div>
        <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200" />

        <div className='flex justify-center w-full'>
            <div className='w-[80%] flex flex-col items-center'>
                <h1 className='text-[#bd53cd] text-2xl text-center font-semibold mt-10'>Volunteer Project Overview</h1>
                <hr className="w-[20%] mx-auto border-t-2 border-gray-200 mb-20" />
                <div className="grid grid-cols-4 gap-10 w-full text-center">
                    <div>
                        <h2 className='mb-2 font-bold'>Timeline</h2>
                        <p>01/2022 - 07/2022</p>
                        <p>Volunteer Work</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Disciplines</h2>
                        <p>Web Design</p>
                        <p>Web Development</p>
                        <p>Frontend/Backend</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Responsibilities</h2>
                        <p>Interface Design</p>
                        <p>Interaction Design</p>
                        <p>Conceptual Design</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>
                    </div>
                    <div>
                        <h2 className='mb-2 font-bold'>Tools</h2>
                        <p>Shopify</p>
                        <p>React</p>
                        <p>Vue.js</p>
                        <p>Node.js</p>
                        <p>Tailwind CSS</p>
                        <p>Stripe</p>
                    </div>
                </div>
                <hr className="w-[80%] mx-auto my-8 border-t-2 border-gray-200 mt-20" />

                <div className='w-[80%] flex flex-col items-center text-center mb-32 mt-10'>
                    <h1 className='text-[#bd53cd] text-2xl font-semibold'>Experience</h1>
                    <hr className="w-[10%] mx-auto border-t-2 border-gray-200 mb-20" />
                    <p className='text-lg'>While working as a sales associate, I collaborated with a business owner to transform their vision into a fully functional, visually engaging e-commerce website. Leveraging my background in computer science, I took on the project at my own pace, coordinating closely with the owner to develop a user-friendly interface that aligned with their brand and business objectives. In addition to creating a compelling design, I optimized website performance by reducing page load times and ensuring cross-browser compatibility, significantly enhancing the user experience and supporting seamless interactions across the platform.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default project3