import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Helmet } from 'react-helmet';
import { FaInstagram, FaSpotify } from "react-icons/fa";

const About = () => {
  return (
    <div id='about'>
      <div className='mt-10 flex items-center justify-center text-center'>
      <Helmet>
        <title>About</title>
      </Helmet>
        <NavBar/>
        <section className='mt-32'>
          <h1 className='text-white text-[40px] font-extralight'>About</h1>

          <br />
          <p className='mt-20 text-3xl'>Ramiaemi <span className='text-5xl font-bold mr-10 ml-10'>&quot;<span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%'>Emi</span>&quot;</span>  Dashler</p>
          <div>
            <h3 className='uppercase mt-40 text-[#939393]'>background</h3>
            <p className='mt-10 text-xl'>I hold a degree in computer science and am currently pursuing a dual master&apos;s degree <br /> in computer science specializing in AI, and research design and analysis.</p>
          </div>

          <div className='mt-40'>
            <p>From an early age, my life was a mosaic of cultures, landscapes, and endless new beginnings. As a military child, I moved from place to place, <br /> each new destination becoming a part of me and igniting a lifelong love for travel and exploration.
            <br />Every city and country I lived in expanded my perspective, taught me resilience, and perhaps most importantly, nurtured a curiosity that has fueled my entire journey. <br />
            This rich tapestry of experiences sparked an early passion for creative expression, a fascination that manifested through art, storytelling, and the endless possibilities of technology.</p>

            <br /><br />
            <p>When I first encountered programming and UX/UI design in middle school, something clicked. The realization that I could bring an idea to life with a few lines of code felt magical,<br /> like discovering a new language that could shape reality.
            I knew, right then, that I had found my path. Through the years, I honed my skills, diving into every opportunity to blend artistry with logic, <br />
            heart with innovation. The field became not only my career choice but a deeply personal calling - one where I could transform imagination into tangible, user-centered experiences. </p>

            <br /><br />
            <p>In an industry where voices sometimes echo the notion that women face limitations, I stand as proof to the contrary. <br />
            From creating immersive, user-friendly designs at Chanel to engineering complex, dynamic applications for clients worldwide, I have dedicated myself to pushing boundaries and challenging stereotypes. <br />
            Today, with expertise across JavaScript, React, Figma, and more, I approach each project as a chance to craft meaningful digital experiences that resonate with users and bring them joy. <br /> 
            For me, this work is not just about technology; it&apos;s about showing the world that passion and commitment transcend any barrier.</p>
          </div>

          <br /><br /><br />
          <div>
            <p className='text-xl'>Feel free to connect with me via:</p>
            <div className='flex items-center justify-center gap-8 mt-5'>
            <a href="https://www.instagram.com/emi.dashler/" target='_blank' rel='noopener noreferrer'><FaInstagram size={25} className='hover:scale-105 hover:text-[#b659b7] transition-all duration-300'/></a>
            <a href='https://open.spotify.com/user/kdb6pye33fsroyo3og0i8ijz5' target='_blank' rel='noopener noreferrer'><FaSpotify size={25} className='hover:scale-105 hover:text-[#4c9b64] transition-all duration-300'/></a>
            </div>
          </div>
        </section>
      </div>

      <div className='mt-40'>
        <Footer/>
      </div>
    </div>
  )
}

export default About