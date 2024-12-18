import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='mt-10 fixed top-0 left-0 z-10 w-full flex items-center justify-between'>
        <div className='px-10 py-3 container mx-auto flex items-center justify-between rounded-full border border-t border-[#66666689] w-[50%] backdrop-blur'>
            <div>
            <Link id='' href="/homepage" className='hover:font-bold transition-all duration-300'>Home</Link>
            </div>
            <div className='flex items-center gap-10'>
            <Link href="/aboutme" className='hover:font-bold transition-all duration-300'>About</Link>
            <Link href="/projects" className='hover:font-bold transition-all duration-300'>Projects</Link>
            <Link href="/myresume" className='hover:font-bold transition-all duration-300'>Resume</Link>
            <Link href="/contactme" className='hover:font-bold transition-all duration-300'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar