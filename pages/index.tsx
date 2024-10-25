import About from '@/components/About'
import Home from '@/components/Home'
import React from 'react'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <About/>
    </div>
  )
}

export default index