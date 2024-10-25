import React, { useState } from "react";
import { PiChatsTeardropThin } from "react-icons/pi";
import TextEffect from "./TextEffect";


const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="home">
      <div className="absolute top-5 right-5 text-[25px] w-100 h-100 py-3 px-3 rounded-full border-t border border-[#e1e1e1] bg-white"><PiChatsTeardropThin color="#d0d0d0" size={50}/></div>

      <h1 className="absolute left-16 text-[#000000] text-[250px] tracking-wide font-bold font-secondary opacity-5">
        RAMIAEMI
      </h1>
      <div className="bottom-40">
        <h1 className="absolute left-32 top-12 text-[#000000] text-[250px] tracking-wide font-bold font-secondary">
          RAMIAEMI
        </h1>
      </div>

      <h1 className="absolute bottom-0 right-10 text-[#000000] text-[250px] tracking-wide font-bold font-secondary opacity-5">
        DASHLER
      </h1>
      <div className="-right-10">
        <h1 className="absolute bottom-10 right-32 text-[#000000] text-[250px] tracking-wide font-bold font-secondary">
          DASHLER
        </h1>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center gap-72">
          <p className="text-3xl line-effect">about</p>
          <p className="text-3xl line-effect">skills</p>
            <div className={`text-8xl text-[#ffffff] font-bold h-[300px] rounded-[100px] bg-[#c8c8c839] flex items-center justify-center transition-all duration-500
                ${isHovered ? 'w-[1050px]' : 'w-[350px]'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {!isHovered ? ( 
                    <p>Aloha</p>
                ) : (
                    <TextEffect/>
                )}
            </div>
          <p className="text-3xl line-effect">resume</p>
          <p className="text-3xl line-effect">projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
