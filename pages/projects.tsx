import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <NavBar />
      <div className="mt-10 mb-40">
        <section id="projects" className="mt-40">
          <h1 className="text-white text-[40px] text-center font-extralight">
            Projects
          </h1>

          <div className="w-[60%] mx-auto">
            <div className="grid grid-cols-1 items-start mx-auto rounded-md">
              <p className="mt-20 text-2xl uppercase font-bold">Development</p>
            </div>
            <div className="grid grid-cols-1 items-center justify-center my-10">
              <div className="glassmorphism-container flex items-center justify-between">
                <div className="ml-10">
                  <a
                    href="https://github.com/dashleremi/saas-invisibg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="font-bold mb-5 text-lg hover:text-white">
                      InvisiBG
                    </h1>
                  </a>
                  <p>
                    AI-powered background removal that allows users to
                    seamlessly <br /> isolate subjects from images with high
                    quality and precision.
                  </p>
                </div>
                <Image
                  src="/homepage.png"
                  alt=""
                  className="mr-3 opacity-50 hover:opacity-100 transition-all duration-500 p-5"
                  width={500}
                  height={450}
                />
              </div>
              <div className="glassmorphism-container flex items-center justify-between pt-5">
                <div className="ml-10">
                  <a
                    href="https://github.com/dashleremi/google-gemini-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="font-bold mb-5 text-lg hover:text-white">
                      Google-Gemini Clone
                    </h1>
                  </a>
                  <p>
                    Google Gemini Clone that replicates the core functionality
                    of interacting <br /> with a large language model (LLM)
                    using React.
                  </p>
                </div>
                <Image
                  src="/ggc-hp.png"
                  alt=""
                  className="mr-3 opacity-50 hover:opacity-100 transition-all duration-500 p-5"
                  width={500}
                  height={200}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 items-start mx-auto rounded-md">
              <p className="mt-20 text-2xl uppercase font-bold">
                Product Design
              </p>
            </div>

            <div className="grid grid-cols-2 items-center justify-center mt-20 gap-10">
              <Link href="/milescape">
                <div className="glassmorphism-container">
                  <h1 className="font-bold text-lg mb-5">MileScape</h1>
                  <p>
                    Rack Up Miles, Rise on the Leaderboard, and Relive Every
                    Adventure!
                  </p>
                  <Image
                    src="/ms-top.png"
                    alt=""
                    className="mr-3 opacity-50 hover:opacity-100 transition-all duration-500 p-5"
                    width={500}
                    height={200}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
