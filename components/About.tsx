import React from "react";
import HawaiiTime from "./HawaiiTime";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="flex flex-col items-center justify-center mt-60">
        <h1 className="text-white text-[40px] font-extralight">About</h1>
      </div>

      <div className="w-[80%] mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-28 items-start justify-center mx-auto">
        <div>
            <div className="flex items-center justify-center gap-32">
                <div className="flex gap-20">
                <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'><FaGithub size={30} className="hover:text-[#7a7a7a] cursor-pointer hover:scale-150 transition-all duration-500" /></a>
                <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} className="hover:text-[#7dd3fc] cursor-pointer hover:scale-150 transition-all duration-500" /></a>
                </div>

            <img src="/me-img.png" alt="Emi" className="w-56 h-60 object-cover rounded-xl"/>

                <div className="flex gap-20">
                <a href="https://www.instagram.com/emi.dashler" target='_blank' rel='noopener noreferrer'><FaInstagram size={30} className="hover:text-[#f9a8d4] cursor-pointer hover:scale-150 transition-all duration-500"/></a>
                <a href="https://open.spotify.com/user/kdb6pye33fsroyo3og0i8ijz5" target='_blank' rel='noopener noreferrer'><AiOutlineSpotify size={30} className="hover:text-[#6ee7b7] cursor-pointer hover:scale-150 transition-all duration-500"/></a>
                </div>

        </div>

        <div className="">
            <hr className='border-t border-[#d4d4d4] mt-10'/>
            <div className="mt-10"><HawaiiTime/></div>
        </div>
    

        </div>
        <div className="mt-28">
          <p className="text-3xl font-bold font-secondary">WELCOME TO MY PORTFOLIO !</p>
          <p className="mt-20 text-xl">I&apos;m Emi, a software engineer blending creativity with technology.</p>
          <p className="mt-5 text-xl">With a degree in computer science and a self-taught background in JavaScript/TypeScript, React, 
            Node.js, Next.js, Swift, and Flutter, I&apos;m always expanding my skills out of a passion for learning.</p>
          <p className="mt-5 text-xl">When I&apos;m not coding, I dive into books or explore art through drawing and painting, always
            embracing my love for creativity in all forms.
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default About;
