import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <NavBar/>
        <div className='mt-10 mb-40'>
            <section id='projects' className='mt-40'>
            <h1 className='text-white text-[40px] text-center font-extralight'>Projects</h1>

            <div className='w-[60%] mx-auto'>
            <div className='grid grid-cols-1 items-start mx-auto rounded-md'>
                    <p className='mt-20 text-2xl uppercase font-bold'>Development</p>
                </div>
                <div className='grid grid-cols-1 items-center justify-center my-10'>
                    <div className='glassmorphism-container flex items-center justify-between'>
                        <div className='ml-10'>
                        <a href="https://github.com/dashleremi/saas-invisibg" target='_blank' rel='noopener noreferrer'><h1 className='font-bold mb-5 text-lg hover:text-white'>InvisiBG</h1></a>
                        <p>AI-powered background removal that allows users to seamlessly <br /> isolate subjects from images with high quality and precision.</p>
                        </div>
                        <Image src="/homepage.png" alt="" className='mr-3 opacity-50 p-5' width={500} height={450}/>
                    </div>
                    <div className='glassmorphism-container flex items-center justify-between pt-5'>
                        <div className='ml-10'>
                        <a href="https://github.com/dashleremi/google-gemini-clone" target='_blank' rel='noopener noreferrer'><h1 className='font-bold mb-5 text-lg hover:text-white'>Google-Gemini Clone</h1></a>
                        <p>Google Gemini Clone that replicates the core functionality of interacting <br /> with a large language model (LLM) using React.</p>
                        </div>
                        <Image src="/ggc-hp.png" alt="" className='mr-3 opacity-50 p-5' width={500} height={200}/>
                    </div>
                </div>

                <div className='grid grid-cols-1 items-start mx-auto rounded-md'>
                    <p className='mt-20 text-2xl uppercase font-bold'>Case Studies</p>
                </div>

                <div className='grid grid-cols-2 items-center justify-center mt-20 gap-10'>
                    <div className='glassmorphism-container'>
                        <h1 className='font-bold text-lg'>Mint Case Study</h1>
                        <p>coming soon...</p>
                    </div>
                    <div className='glassmorphism-container'>
                        <h1 className='font-bold text-lg'>Netflix Redesign, Case Study</h1>
                        <p>coming soon...</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 items-center jutify-center mt-20'>
                    <div className='glassmorphism-container'>
                        <h1 className='font-bold text-lg'>Coding with kids</h1>
                        <p>coming soon...</p>
                    </div>
                </div>
            </div>
            </section>
        </div>

        <div className='mt-40'>
            <Footer/>
        </div>
    </div>
  )
}

export default Projects