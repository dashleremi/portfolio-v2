import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center text-center mt-60 font-secondary">
        <div>
            <h1 className="text-white text-[40px] font-extralight">Skills</h1>
        </div>

        <div className='mt-20 flex items-centers gap-20'>
            <div className='glassmorphism-container p-10 hover:scale-125 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Frontend - Backend -</h2>
                <p className='text-xl'>HTML, CSS/SASS, JavaScript/TypeScript, React, Vue.js, TailwindCSS, Storybook</p>
                <p className='text-xl'>Node.js, Flask, Python, Java, C++, Swift</p>
            </div>

            <div className='glassmorphism-container p-10 hover:scale-150 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Design - UX/UI - </h2>
                <p className='text-xl'>Figma, Sketch, Adobe XD, Photoshop, Illustrator, InDesign, Premiere Pro</p>
            </div>
            
            <div className='glassmorphism-container p-10 hover:scale-150 transition-all duration-500'>
                <h2 className='uppercase font-bold text-2xl mb-8'>- Databases - DevOps - Other -</h2>
                <p className='text-xl'>MongoDB, PostgreSQL, Git, Vercel</p>
                <p className='text-xl'>Pytorch, Flutter, Slack</p>
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