import React from 'react'

const Home = () => {
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
      <div className='mt-40 w-[40%] flex items-center justify-between mx-auto'>
        <h1 className='text-2xl tracking-in-expand-fwd-top'>driven by curiosity</h1>
        <h1 className='text-2xl tracking-in-expand-fwd-top'>powered by creativity</h1>
      </div>
      <div className='mt-40 text-center text-6xl font-semibold'>designing and developing for tomorrow.</div>
    </div>
  )
}

export default Home