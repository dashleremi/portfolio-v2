import React from 'react'

const Experience = () => {
  return (
    <div id='resume' className='items-center justify-center'>
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
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>J's International School</h1>
            <p>Sep. 2024 - Oct.2024</p>
            <br />
            <p className='font-secondary font-bold mb-3'>Frontend Development</p>
            <p>Designed and developed the frontend/UI for a school management dashboard, incorporating both English and Japanese language support <br /> for seamless user experience across regions.</p>
          </div>
          <div className='w-[130px] mr-2'>
            <img src="/js.png" alt="" />
          </div>
        </div>

        <div className='glassmorphism-container mt-5 p-10 text-2xl flex items-center justify-between'>
          <div>
            <h1 className='text-3xl uppercase font-secondary tracking-wide font-bold'>Hawaii Technology Development Corporation</h1>
            <p>Nov. 2023 - Aug. 2024</p>
            <br />
            <p className='font-secondary font-bold mb-3'>Software Engineer Intern</p>
            <p>Developed 20+ front-end components using HTML, CSS, React, and TypeScript, ensuring cross-browser compatibility and seamless <br /> integration  with backend systems.
            Collaborated in agile teams to enhance user experience and site functionality.</p>
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
            <p className='font-secondary font-bold mb-3'>UX/UI Design Intern</p>
            <p>Maintained design documentation and style guides across multiple projects, modernized UX/UI designs using Adobe XD and Figma, <br /> and conducted user research to improve usability. <br />
            Provided guidance to the team to ensure content consistency and quality.</p>
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
            <p className='font-secondary font-bold mb-3'>Frontend Development Intern</p>
            <p>Redesigned and optimized responsive web applications using HTML, CSS, JavaScript, and C#, collaborating with product managers and <br /> engineers to deliver scalable, user-friendly tools.</p>
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