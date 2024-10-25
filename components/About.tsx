import React from "react";

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="flex flex-col items-center justify-center mt-60"
      >
        <h1 className="text-white text-[40px] font-extralight">About</h1>
      </div>

      <div className="w-[50%] mt-60 grid grid-cols-1 md:grid-cols-2 gap-x-28 items-start justify-center mx-auto">
        <img src="/IMG_4211.PNG" alt="Emi" className="w-56 h-60 object-cover rounded-xl"/>

        <div>
          <p className="text-3xl">Welcome to my Portfolio !</p>
          <p className="mt-10 text-xl">I&apos;m Emi, a software engineer blending creativity with technology.</p>
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
