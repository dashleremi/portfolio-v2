import About from '@/components/About'
import Experience from '@/components/Experience'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import React from 'react'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  )
}

export default index