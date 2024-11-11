import React from 'react'
import Footer from '@/components/Footer'
import SelectedWorks from '@/components/SelectedWorks'
import TextEffect from '../components/TextEffect'
import { RxDoubleArrowDown } from "react-icons/rx";
import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet';

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div id='home' className='text-center'>
        <NavBar/>
        <div className='mt-60'>
          <div className='grid grid-cols-2 items-center justify-between px-80'>
            <div><h2 className='font-bold text-3xl'>Ramiaemi Dashler</h2></div>
            <div><h2><TextEffect/></h2></div>
          </div>
        <div className='mt-60 text-7xl font-bold'><span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>designing and developing for tomorrow.</span></div>
        
        <p className='mt-20 text-xl'>driven by curisosity, powered by creativity</p>
        <div className='flex justify-center mt-96'>
          <RxDoubleArrowDown size={50} color='#4b5563' className='heartbeat'/>
        </div>
      </div>
      <SelectedWorks/>
      <Footer/>
    </div>
    </div>
  )
}

export default index