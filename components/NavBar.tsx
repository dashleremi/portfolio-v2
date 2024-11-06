import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='mt-10 fixed top-0 left-0 z-10 w-full flex items-center justify-between'>
        <div className='px-10 py-3 container mx-auto flex items-center justify-between rounded-full border border-t border-[#66666689] w-[50%] backdrop-blur'>
            <div>
            <Link id='' href="/home" className='hover:font-bold'>Home</Link>
            </div>
            <div className='flex items-center gap-10'>
            <Link href='/about' className='hover:font-bold'>About</Link>
            <Link href="/projects" className='hover:font-bold'>Projects</Link>
            <Link href="/resume" className='hover:font-bold'>Resume</Link>
            <Link href="/contact" className='hover:font-bold'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar