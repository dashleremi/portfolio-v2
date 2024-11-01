import Home from '@/pages/Home'
import React from 'react'
import Footer from '@/components/Footer'
import SelectedWorks from '@/components/SelectedWorks'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <SelectedWorks/>

      {/* <About/> */}
      {/* <Resume/> */}
      
      <Footer/>
    </div>
  )
}

export default index