import React, { useEffect, useState } from 'react'

const Projects = () => {
    const images = [
        '/public/js-intl-en.png',
        '/public/js-intl-jp.png',
        '/public/ssh.png',
        '/public/homepage.png',
        '/public/ggc-hp.png'
    ]
    
  return (
    <div id='projects' className='flex flex-col items-center justify-center text-center mt-60 font-secondary'>
        <div>
            <h1 className="text-white text-[40px] font-extralight">Projects</h1>
        </div>


    </div>
  )
}

export default Projects