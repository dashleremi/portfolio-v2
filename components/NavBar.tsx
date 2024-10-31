import React from 'react'

const NavBar = () => {
  return (
    <div className='mt-10'>
        <div className='px-10 py-3 container mx-auto flex items-center justify-between rounded-full border border-t border-[#000000] w-[50%]'>
        <div>
          <a href="" className='hover:font-bold'>Home</a>
        </div>
        <div className='flex items-center gap-10'>
          <a href="" className='hover:font-bold'>Projects</a>
          <a href="" className='hover:font-bold'>Resume</a>
          <a href="" className='hover:font-bold'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar