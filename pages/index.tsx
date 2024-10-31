import Resume from '@/components/Resume'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import React from 'react'
import Projects from '@/components/Projects'
import NavBar from '@/components/navBar'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Home/>
      {/* <About/> */}
      
      <Skills/>
      <Resume/>
      <Projects/>
    </div>
  )
}

export default index