import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className=''>
        <div>
            <h1 className="flex flex-col items-center justify-center text-center mt-60 font-secondary text-white text-[40px] font-extralight">Projects</h1>
        </div>

        <main className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12'>
          <section className='bg-[#000000] p-6 rounded-lg shadow-lg'>
            <img src="/ssh.png" alt="" width="700" height="700" className="mx-auto rounded-md" />
            <h2 className='font-secondary uppercase text-white mt-4'>Sugar Sugar Hawaii</h2>
            <p className='text-[#ffffff] mt-4'>An online boutique offering trendy jewelry, accessories, and fashion items with a focus on vibrant, island-inspired designs.</p>
          </section>

          <section className='bg-[#000000] p-6 rounded-lg shadow-lg'>
            <img src="/js-intl-en.png" alt="" width="700" height="700" className="mx-auto rounded-md" />
            <h2 className='font-secondary uppercase text-white mt-4'>J&apos;s International School</h2>
            <p className='text-[#ffffff] mt-4'>A comprehensive school management dashboard for an international school in Tokyo, Japan, offering tailored access for admins, teachers, students, and parents.</p>
          </section>

          <section className='bg-[#000000] p-6 rounded-lg shadow-lg'>
            <img src="/homepage.png" alt="" width="700" height="700" className="mx-auto rounded-md" />
            <h2 className='font-secondary uppercase text-white mt-4'>InvisiBG</h2>
            <p className='text-[#ffffff] mt-4'>AI-powered background removal that allows users to seamlessly isolate subjects from images with high quality and precision.</p>
          </section>

          <section className='bg-[#000000] p-6 rounded-lg shadow-lg'>
            <img src="/ggc-hp.png" alt="" width="700" height="700" className="mx-auto rounded-md" />
            <h2 className='font-secondary uppercase text-white mt-4'>Google Gemini - Clone</h2>
            <p className='text-[#ffffff] mt-4'>Google Gemini Clone that replicates the core functionality of interacting with a large language model.</p>
          </section>
        </main>
    </div>
  )
}

export default Projects