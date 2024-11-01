import Home from '@/pages/Home'
import React from 'react'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Projects/>

      {/* <About/> */}
      {/* <Resume/> */}
      
      <Footer/>
    </div>
  )
}

export default index