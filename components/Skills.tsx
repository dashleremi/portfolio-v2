import React from 'react'
import { 
    FaHtml5,
    FaCss3Alt, 
    FaJava, 
    FaJs, 
    FaPython, 
    FaReact, 
    FaVuejs, 
    FaSwift, 
    FaNodeJs, 
    FaGithub, 
    FaSlack, 
    FaSass, 
    FaFigma, 
    FaSketch } from 'react-icons/fa';

import { 
    //SiTypescript, 
    SiMongodb, 
    SiPytorch, 
    SiCplusplus, 
    SiFlask, 
    SiPostgresql, 
    SiStorybook, 
    SiTailwindcss, 
    SiAdobexd, 
    SiVercel, 
    SiFlutter,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeindesign,
    SiAdobeillustrator } from 'react-icons/si';


const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center text-center mt-60 font-secondary">
        <div>
            <h1 className="text-white text-[40px] font-extralight">Skills</h1>
        </div>

        <div className='mt-20 flex items-centers gap-20'>
            <div className='glassmorphism-container p-10 hover:scale-125 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Frontend - Backend -</h2>
                {/* icons */}
                <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center justify-center gap-2'>
                        <FaHtml5 size={20} color='#e34c26'/>
                        <p className='text-black'>HTML</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaCss3Alt size={20} className='mr-2' color='#264de4'/>
                        <p className='text-black'>CSS</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaSass size={20} className='mr-2' color='#CD6799'/>
                        <p className='text-black'>SASS</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaJs size={20} className='mr-2' color='#f7df1e'/>
                        <p className='text-black'>JavaScript</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaJs size={20} className='mr-2' color='#007acc'/>
                        <p className='text-black'>TypeScript</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaReact size={20} className='mr-2' color='#007acc'/>
                        <p className='text-black'>React</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 mt-3'>
                    <div className='flex items-center gap-2'>
                        <FaVuejs size={20} className='mr-2' color='#5eead4'/>
                        <p className='text-black'>Vue.js</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiTailwindcss size={20} className='mr-2' color='#38bdf8'/>
                        <p className='text-black'>TailwindCSS</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiStorybook size={20} className='mr-2' color='#FF4785'/>
                        <p className='text-black'>Storybook</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaNodeJs size={20} className='mr-2' color='#3c873a'/>
                        <p className='text-black'>Node.js</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 mt-3'>
                    <div className='flex items-center gap-2'>
                        <SiFlask size={20} className='mr-2' color='black'/>
                        <p className='text-black'>Flask</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaPython size={20} className='mr-2' color='#ffde57'/>
                        <p className='text-black'>Python</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaJava size={20} className='mr-2' color='#f89820'/>
                        <p className='text-black'>Java</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiCplusplus size={20} className='mr-2' color='#38bdf8'/>
                        <p className='text-black'>C++</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaSwift size={20} className='mr-2' color='#FD2020'/>
                        <p className='text-black'>Swift</p>
                    </div>
                </div>
            </div>

            <div className='glassmorphism-container p-10 hover:scale-150 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Design - UX/UI - </h2>
                <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center gap-2'>
                        <FaFigma size={20} className='mr-2' color='#ff7667'/>
                        <p className='text-black'>Figma</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaSketch size={20} className='mr-2' color='#FDAD00'/>
                        <p className='text-black'>Sketch</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiAdobexd size={20} className='mr-2' color='#470137'/>
                        <p className='text-black'>Adobe XD</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiAdobephotoshop size={20} className='mr-2' color='#001E36'/>
                        <p className='text-black'>Photoshop</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 mt-3'>
                    <div className='flex items-center gap-2'>
                        <SiAdobeillustrator size={20} className='mr-2' color='#330000'/>
                        <p className='text-black'>Illustrator</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiAdobeindesign size={20} className='mr-2' color='#eb43a3'/>
                        <p className='text-black'>InDesign</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiAdobepremierepro size={20} className='mr-2' color='#00005B'/>
                        <p className='text-black'>Premiere Pro</p>
                    </div>
                </div>
            </div>
            
            <div className='glassmorphism-container p-10 hover:scale-150 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Databases - DevOps - Other -</h2>
                <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center gap-2'>
                        <SiMongodb size={20} className='mr-2' color='#0cd45b'/>
                        <p className='text-black'>MongoDB</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiPostgresql size={20} className='mr-2' color='#008bb9'/>
                        <p className='text-black'>PostgreSQL</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaGithub size={20} className='mr-2' color='black'/>
                        <p className='text-black'>Git</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiVercel size={20} className='mr-2' color='black'/>
                        <p className='text-black'>Vercel</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 mt-3'>
                    <div className='flex items-center gap-2'>
                        <SiPytorch size={20} className='mr-2' color='#EE4C2C'/>
                        <p className='text-black'>Pytorch</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <SiFlutter size={20} className='mr-2' color='#41d0fd'/>
                        <p className='text-black'>Flutter</p>
                    </div>
                    |
                    <div className='flex items-center gap-2'>
                        <FaSlack size={20} className='mr-2' color='#e580ff'/>
                        <p className='text-black'>Slack</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-20 glassmorphism-container p-10 hover:scale-150 transition-all duration-500'>
            <h2 className='uppercase font-bold text-2xl mb-8'>Soft Skills</h2>
            <p className='text-xl'>Detail oriented, Leadership, Communication, Problem-Solving, Critical Thinking, Work Ethic, Collaboration, Adaptability, Creativity, Time Management, Slef-Starter, Quick Learner</p>
        </div>
    </div>
  )
}

export default Skills
