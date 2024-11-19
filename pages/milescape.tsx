import NavBar from '@/components/NavBar'
import React from 'react'
import { Helmet } from 'react-helmet'

const MileScape = () => {
  return (
    <div>
      <Helmet>
        <title>MileScape</title>
      </Helmet>
        <NavBar/>
        <div className="w-full h-[80vh] opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/plane.png')", }}></div>

        <div className='flex justify-center'>
        <div className='mt-40 w-[50%] grid grid-cols-2 text-left items-start justify-center'>
            <div>
                <h2 className='text-[#36363663]'>project info</h2>
                <hr className="w-[20%] border-t-2 border-gray-200 mt-2 mb-20" />
                <br />
                <p className=''>Travel made easy, <br /> adventures made unforgettable!</p>
                <br /><br />
                <p>Role: Research, Design, Test</p>
                <p>Location: Miami, FL</p>
            </div>
            
            <div>
                <h2 className='text-[#36363663]'>intro</h2>
                <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
                <br /><br />
                <p>MindScape transforms air travel into an exciting journey! <br />
                Track your flights, log miles, and compete with friends, all while building a unique travel footprint. From your total miles to the countries you&apos;ve visited, every trip becomes an achievement!</p>
            </div>
        </div>
        </div>

        <div className="mt-40 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div className="w-full h-[100vh] opacity-100 bg-cover bg-center" style={{ backgroundImage: "url('/ms-designs.png')", }}></div>
        </div>

        <div className='mt-40 grid justify-center text-center'>
          <div>
            <h1 className='uppercase font-bold text-2xl'>r e s e a r c h + d e v e l o p m e n t</h1>
            <hr className="w-full border-t-2 border-gray-200 mt-2 mb-20" />
          </div>

          <div className='mt-10'>
          <h1 className='uppercase font-medium text-xl gap-2'>t h o u g h t s + m o t i v e s</h1>
          <hr className="w-full border-t-2 border-gray-200 mt-2 mb-10" />
          <p>Traveling frequently as an international student has turned the airport journey, from booking to boarding, into a daunting process. <br /> How can we make flying enjoyable again?</p>
          </div>

          <div className='mt-20'>
          <h1 className='uppercase font-medium text-xl'>f i n d i n g s</h1>
          <hr className="w-full border-t-2 border-gray-200 mt-2 mb-10" />
          <p>Through interviews and other methods, I discovered that most people worry about missing their flight. <br /> Three interviewees had missed flights before, and all participants reported experiencing pre-boarding anxiety.</p>
          <div className='grid grid-cols-4 mt-40 gap-72 text-7xl'>
            <div>
              <p>🕜</p>
              <p className='text-lg mt-5 font-bold'>worried about time</p>
            </div>
            <div>
              <p>😰</p>
              <p className='text-lg mt-5 font-bold'>unexpected events?</p>
            </div>
            <div>
              <p>🤨</p>
              <p className='text-lg mt-5 font-bold'>did I forget anything?</p>
            </div>
            <div>
              <p>🐌</p>
              <p className='text-lg mt-5 font-bold'>anxious waiting</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default MileScape