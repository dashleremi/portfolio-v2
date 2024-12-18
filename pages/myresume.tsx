import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Helmet } from 'react-helmet'

const Resume = () => {
  return (
    <div id='resume'>
        <Helmet>
          <title>Resume</title>
        </Helmet>
      <NavBar/>
      <div className='mt-10 mb-40'>
        
        <section className='mt-40'>
          <h1 className='text-white text-[40px] text-center font-secondary font-extralight'>Resume</h1>
          
          <div className='w-[60%] grid grid-cols-1 items-center mx-auto'>
            <p className='mt-20 text2xl uppercase font-bold text-2xl'>Skills</p>

            <div className='grid grid-cols-2 items-start justify-center gap-10'>
              <div className='p-10 mt-10 glassmorphism-container'>
                <h2 className='text-2xl font-bold'>Technical</h2>
                <div className='mt-5'>
                  <p>HTML, CSS/SCSS/SASS, JavaScript/TypeScript, Java, Python</p>
                  <p>React, Next.js, Vue.js, Node.js, TailwindCSS</p>
                  <p>Swift, Flutter, C/C++, Figma, Sketch, Storybook</p>
                  <p>Git, Slack, Jira, MongoDB, PyTorch, Flask, PostgreSQL, Vercel</p>
                  <p>Adobe XD, Photoshop, Premiere Pro, InDesign, Illustrator</p>
                </div>
                <p></p>
              </div>
              <div className='p-10 mt-10 glassmorphism-container'>
                <h2 className='text-2xl font-bold'>Soft</h2>
                <div className='mt-5'>
                  <p>Detail-Oriented, Leadership, Communication, Problem-Solving</p>
                  <p>Critical Thinking, Work Ethic, Collaboration, Adaptability</p>
                  <p>Creativity, Time Management, Self-Starter, Quick Learner</p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[60%] grid grid-cols-1 items-start mx-auto'>
            <p className='mt-40 text-2xl uppercase font-bold'>Education</p>
            <div className='mt-10 flex items-center justify-between glassmorphism-container p-10'>
              <div>
                <h2 className='font-bold text-2xl mb-5'>Florida International University</h2>
                <p className='text-xl'><span className='mr-28'>2025</span>Master of Science, Research Design and Analysis</p>
                <p className='text-xl'><span className='mr-12'>2020 - 2023</span>Bachelor of Arts, Computer Science</p>
              </div>
              <Image src="/fiu.png" alt="" className='w-[140px] h-[120px] opacity-60' width={224} height={240}/>
            </div>

            <p className='mt-40 text-2xl uppercase font-bold'>Certification</p>
            <div className='grid grid-cols-2 mt-10 gap-10'>

              <div className='glassmorphism-container flex items-center justify-between'>
                <div className='ml-8'>
                  <h2 className='font-bold text-2xl mb-5'>Georgia Tech</h2>
                  <p className='text-xl'>Introduction to User Experience Design</p>
                </div>
                <Image src="/ga-tech.png" alt="" className='w-[140px] h-[100px] opacity-50' width={224} height={240}/>
              </div>

              <div className='glassmorphism-container flex items-center justify-between'>
                <div>
                  <h2 className='font-bold text-2xl mb-5'>IBM</h2>
                  <p className='text-xl'>DevOps and Software Engineering</p>
                </div>
                <Image src="/ibm.png" alt="" className='w-[120px] h-[120px] opacity-50' width={224} height={240}/>
              </div>

              <div className='glassmorphism-container flex items-center justify-between'>
                <div className='ml-8'>
                  <h2 className='font-bold text-2xl mb-5'>IBM</h2>
                  <p className='text-xl'>Generative AI for Software Developers</p>
                </div>
                <Image src="/ibm.png" alt="" className='w-[120px] h-[120px] opacity-50' width={224} height={240}/>
              </div>

              <div className='glassmorphism-container flex items-center justify-between'>
                <div>
                  <h2 className='font-bold text-2xl mb-5'>Udemy</h2>
                  <p className='text-xl'>Python and JavaScript DSA</p>
                </div>
                <Image src="/udemy.png" alt="" className='w-[100px] h-[80px] opacity-50' width={224} height={240}/>
              </div>
            </div>

            <p className='mt-40 text-2xl uppercase font-bold'>Experience</p>
            <Link href="/project1">
              <div className='mt-10 flex items-center justify-between glassmorphism-container p-10 hover:bg-[#d2d2d23f] transition-all duration-300'>
                <div>
                  <h2 className='font-bold text-2xl mb-2'>J&apos;s International School</h2>
                  <p>Frontend Developer & UX/UI Designer</p>
                  <p className='text-xl mt-5'>Sep 2024 - Oct 2024</p>
                  <p className='mt-5'>Designed and developed the frontend/UI for a school management dashboard, incorporating both English and Japanese<br /> language support for seamless user experience across regions.</p>
                </div>
                <Image src="/js.png" alt="" className='w-[80px] h-[80px] opacity-50' width={224} height={240}/>
              </div>
            </Link>

              <div className='mt-10 flex items-center justify-between glassmorphism-container p-10'>
                <div>
                  <h2 className='font-bold text-2xl mb-2'>Hawaii Technology Development Corporation</h2>
                  <p>Software Engineer + UI Developer Intern</p>
                  <p className='text-xl mt-5'>Nov 2023 - Aug 2024</p>
                  <p className='mt-5'>Developed front-end components using HTML, CSS, React, and TypeScript, ensuring cross-browser compatibility and <br /> seamless  integration  with backend systems.</p>
                </div>
                <Image src="/htdc.png" alt="" className='w-[90px] h-[90px] opacity-50' width={224} height={240}/>
              </div>


            <Link href="/project2">
              <div className='mt-10 flex items-center justify-between glassmorphism-container p-10 hover:bg-[#d2d2d23f] transition-all duration-300'>
                <div>
                  <h2 className='font-bold text-2xl mb-2'>CHANEL</h2>
                  <p>UX/UI Research & Design Intern</p>
                  <p className='text-xl mt-5'>May 2023 - Oct 2023</p>
                  <p className='mt-5'>Maintained design documentation and style guides across multiple projects, modernized UX/UI designs using Adobe XD  <br /> and Figma, and conducted user research to improve usability.</p>
                </div>
                <Image src="/chanel.png" alt="" className='w-[150px] h-[90px] -mr-8 opacity-50' width={224} height={240}/>
              </div>
            </Link>

            <Link href="/project4">
              <div className='mt-10 flex items-center justify-between glassmorphism-container p-10 hover:bg-[#d2d2d23f] transition-all duration-300'>
                <div>
                  <h2 className='font-bold text-2xl mb-2'>Anthropologie</h2>
                  <p>Software Development Engineer (Frontend) Intern</p>
                  <p className='text-xl mt-5'>Aug 2022 - May 2023</p>
                  <p className='mt-5'>Redesigned and optimized responsive web applications using HTML, CSS, JavaScript, and Vue.js, collaborating with product <br /> managers and  engineers to deliver scalable, user-friendly tools.</p>
                </div>
                <Image src="/anthro.png" alt="" className='w-[70px] h-[70px] mr-3 opacity-50' width={224} height={240}/>
              </div>
            </Link>

          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Resume