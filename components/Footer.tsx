import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#ffffff94] border-t border-[#9f9f9f3b]'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
            <nav className='flex flex-wrap -mx-5 -my-2'>
                <div className='px-10 py-2'>
                    <Link href="/homepage" className='hover:font-bold transition-all duration-300'>Home</Link>
                </div>
                <div className='px-10 py-2'>
                    <Link href="/aboutme" className='hover:font-bold transition-all duration-300'>About</Link>
                </div>
                <div className='px-10 py-2'>
                    <Link href="/projects" className='hover:font-bold transition-all duration-300'>Projects</Link>
                </div>
                <div className='px-10 py-2'>
                    <Link href="/myresume" className='hover:font-bold transition-all duration-300'>Resume</Link>
                </div>
            </nav>

            <hr className="mx-auto my-8 border-t-2 border-gray-200" />


            <div className='flex justify-end mt-8 space-x-14 text-[#c3c3c3]'>
                <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'><FaGithub size={30} className='hover:text-[#000000] transition-all duration-500'/></a>
                <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} className='hover:text-[#4586ff] transition-all duration-500'/></a>
                <a href='mailto:emi.dashler@gmail.com' target=' _blank' rel='noopener noreferrer'><FaMailBulk size={30} className='hover:text-[#ff4242] transition-all duration-500'/></a>
            </div>
        </div>
    </section>
  )
}

export default Footer