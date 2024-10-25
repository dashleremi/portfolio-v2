import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="absolute top-5 right-5 text-[25px]">contact</div>

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
          <p className="text-8xl text-[#ffffff] font-bold w-[350px] h-[300px] rounded-[100px] bg-[#c8c8c839] items-center text-center justify-center flex">
            Aloha
          </p>
          <p className="text-3xl line-effect">experience</p>
          <p className="text-3xl line-effect">projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
