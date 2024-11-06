import NavBar from '@/components/NavBar'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <NavBar/>
        <div className='mt-10 mb-40'>
            <section id='projects' className='mt-40'>
            <h1 className='text-white text-[40px] text-center font-extralight'>Projects</h1>

            <div className='w-[60%] mx-auto'>
                <div className='grid grid-cols-1 items-start mx-auto'>
                    <p className='mt-20 text-2xl uppercase font-bold'>Case Studies</p>
                </div>

                <div className='grid grid-cols-2 items-center justify-center mt-20'>
                    <div>
                        <h1>Mint Case Study</h1>
                    </div>
                    <div>
                        <h1>Netflix Redesign, Case Study</h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 items-center jutify-center mt-20'>
                    <h1>Coding with kids</h1>
                </div>
            </div>
            </section>
        </div>
    </div>
  )
}

export default Projects