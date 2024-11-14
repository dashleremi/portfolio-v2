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
                <hr className="w-[15%] border-t-2 border-gray-200 mb-20" />
                <br /><br />
                <p>MindScape transforms air travel into an exciting journey! <br />
                Track your flights, log miles, and compete with friends, all while building a unique travel footprint. From your total miles to the countries you’ve visited, every trip becomes an achievement!</p>
            </div>
        </div>
        </div>

        <div className="mt-40 w-full h-[60vh] bg-white bg-cover bg-center flex items-center justify-center">
            <div className='grid grid-cols-6 items-center justify-center text-center gap-10 opacity-30'>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
                <div className="bg-black shadow-[0px_0px_0px_2px_white] rounded-[28px] p-2 w-[min(230px)] aspect-[1/2] relative mx-auto" style={{ backgroundColor: 'hsl(0, 0%, 0%)', }}></div>
            </div>
        </div>
    </div>
  )
}

export default MileScape