import ContactForm from '@/components/ContactForm'
import React from 'react'

const contact = () => {
  return (
    <div>
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