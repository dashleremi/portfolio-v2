import React from 'react'
// import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='mt-10 fixed top-0 left-0 z-10 w-full flex items-center justify-between'>
        <div className='px-10 py-3 container mx-auto flex items-center justify-between rounded-full border border-t border-[#66666689] w-[50%] backdrop-blur'>
            <div>
            <a id='home' href="" className='hover:font-bold'>Home</a>
            </div>
            <div className='flex items-center gap-10'>
            <a href="" className='hover:font-bold'>About</a>
            <a href="" className='hover:font-bold'>Projects</a>
            <a href="" className='hover:font-bold'>Resume</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar