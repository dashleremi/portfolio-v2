import ContactForm from '@/components/ContactForm'
import React from 'react'
import { Helmet } from 'react-helmet'

const contact = () => {
  return (
    <div id='contact'>
      <Helmet>
        <title>Contact</title>
      </Helmet>
        <div className='mt-10 flex items-center justify-center text-center'>
        <h1 className='text-white text-[40px] font-extralight'>Contact</h1>
        </div>

        <div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default contact