import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='items-center justify-center'>
      <div className='flex flex-col items-center justify-center mt-60 mb-20'>
        <h1 className="text-white text-[40px] font-extralight">Resume</h1>   
      </div>

      <div className='w-[80%] grid grid-cols-1 items-start justify-center mx-auto'>
        <p className='font-normal uppercase text-2xl'>Education</p>

        <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
          <div>
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>Florida International University</h1>
            <p>Jun. 2020 - Dec. 2023</p>
            <br />
            <p>Master of Science - Research Design and Analysis</p>
            <p>Bachelor of Arts - Computer Science</p>
          </div>
          <div className='w-[165px] h-[165px]'>
            <img src="/fiu.png" alt="" />
          </div>
        </div>

        <div className='mt-32'>
          <p className='font-normal uppercase text-2xl'>Certifications</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center mx-auto'>
            <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
              <div>
              <h1 className='pb-5 text-3xl uppercase font-secondary tracking-wide font-bold'>Georgia tech</h1>
              <p>Introduction to User Experience Design</p>
              </div>
              <img src="/ga-tech.png" alt="" className='w-[130px] h-[75px]'/>
            </div>

            <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
              <div>
              <h1 className='pb-5 text-3xl uppercase font-secondary tracking-wide font-bold'>IBM</h1>
              <p>DevOps and Software Engineering</p>
              </div>
              <img src="/ibm.png" alt="" className='w-[120px]'/>
            </div>
            <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
              <div>
              <h1 className='pb-5 text-3xl uppercase font-secondary tracking-wide font-bold'>IBM</h1>
              <p>Generative AI for Software Developers</p>
              </div>
              <img src="/ibm.png" alt="" className='w-[120px]'/>
            </div>
          
            <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
              <div>
              <h1 className='pb-5 text-3xl uppercase font-secondary tracking-wide font-bold'>Udemy</h1>
              <p>Python & JavaScript DSA</p>
              </div>
              <img src="/udemy.png" alt="" className='w-[95px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] grid grid-cols-1 items-start justify-center mx-auto mt-32'>
        <p className='font-normal uppercase text-2xl'>Experience</p>

        <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
          <div>
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>Hawaii Technology Development Corporation</h1>
            <p>Nov. 2023 - Aug. 2024</p>
            <br />
            <p>Software Engineer Intern</p>
          </div>
          <div className='w-[150px] mr-2'>
            <img src="/htdc.png" alt="" />
          </div>
        </div>

        <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between pr-5'>
          <div>
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>Chanel</h1>
            <p>May 2023 - Oct. 2023</p>
            <br />
            <p>UX/UI Design Intern</p>
          </div>
          <div className='w-[200px]'>
            <img src="/chanel.png" alt="" />
          </div>
        </div>

        <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
          <div>
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>Anthropologie</h1>
            <p>Aug. 2022 - May 2023</p>
            <br />
            <p>Frontend Development Intern</p>
          </div>
          <div className='w-[90px] mr-10'>
            <img src="/anthro.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience