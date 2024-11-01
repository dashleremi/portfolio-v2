//import Resume from '@/components/Resume'
import Home from '@/components/Home'
//import Skills from '@/components/Skills'
import React from 'react'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Projects/>

      {/* <About/> */}
      {/* <Skills/> */}
      {/* <Resume/> */}
      
      <Footer/>
    </div>
  )
}

export default index