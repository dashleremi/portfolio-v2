import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";

const MileScape = () => {
  return (
    <div>
      <Helmet>
        <title>MileScape</title>
      </Helmet>
      <NavBar />
      <div
        className="w-full h-[80vh] opacity-30 bg-cover bg-center"
        style={{ backgroundImage: "url('/plane.png')" }}
      ></div>

      <div className="flex justify-center">
        <div className="mt-40 w-[50%] grid grid-cols-2 text-left items-start justify-center">
          <div>
            <h2 className="text-[#36363663]">project info</h2>
            <hr className="w-[20%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <p className="">
              Travel made easy, <br /> adventures made unforgettable!
            </p>
            <br />
            <br />
            <p>Role: Research, Design, Test</p>
            <p>Location: Miami, FL</p>
          </div>

          <div>
            <h2 className="text-[#36363663]">intro</h2>
            <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <br />
            <p>
              MindScape transforms air travel into an exciting journey! <br />
              Track your flights, log miles, and compete with friends, all while
              building a unique travel footprint. From your total miles to the
              countries you&apos;ve visited, every trip becomes an achievement!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-40 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div
          className="w-full h-[100vh] opacity-100 bg-cover bg-center"
          style={{ backgroundImage: "url('/ms-designs.png')" }}
        ></div>
      </div>

      <div className="mt-40 grid justify-center text-center">
        <div>
          <h1 className="uppercase font-bold text-2xl">
            r e s e a r c h + d e v e l o p m e n t
          </h1>
          <hr className="w-full border-t-2 border-gray-200 mt-2 mb-20" />
        </div>

        <div className="mt-10">
          <h1 className="uppercase font-medium text-xl gap-2">
            t h o u g h t s + m o t i v e s
          </h1>
          <hr className="w-full border-t-2 border-gray-200 mt-2 mb-10" />
          <p>
            Traveling frequently as an international student has turned the
            airport journey, from booking to boarding, into a daunting process.{" "}
            <br /> How can we make flying enjoyable again?
          </p>
        </div>

        <div className="mt-20">
          <h1 className="uppercase font-medium text-xl">f i n d i n g s</h1>
          <hr className="w-full border-t-2 border-gray-200 mt-2 mb-10" />
          <p>
            Through interviews and other methods, I discovered that most people
            worry about missing their flight. <br /> Three interviewees had
            missed flights before, and all participants reported experiencing
            pre-boarding anxiety.
          </p>
          <div className="grid grid-cols-4 mt-40 gap-72 text-7xl">
            <div>
              <p>🕜</p>
              <p className="text-lg mt-5 font-bold">worried about time</p>
            </div>
            <div>
              <p>😰</p>
              <p className="text-lg mt-5 font-bold">unexpected events?</p>
            </div>
            <div>
              <p>🤨</p>
              <p className="text-lg mt-5 font-bold">did I forget anything?</p>
            </div>
            <div>
              <p>🐌</p>
              <p className="text-lg mt-5 font-bold">anxious waiting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div
          className="w-full h-[100vh] opacity-100 bg-cover bg-center"
          style={{ backgroundImage: "url('/ms-int.png')" }}
        ></div>
      </div>

      <div className="flex justify-center">
        <div className="mt-40 w-[80%] grid grid-cols-2 text-left items-start justify-center">
          <div>
            <h2 className="text-[#36363663]">takeaways</h2>
            <hr className="w-[20%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <p>
              A majority of interviewees expressed dissatisfaction with <br />
              the arduous nature of the travel process, encompassing flight{" "}
              <br />
              reservations, check-in, airport transit, and security screening.
            </p>
            <br />
            <br />
            <p>One wrong move, and your flight could be gone.</p>

            <div className="mt-48">
              <h2 className="text-[#36363663]">problem</h2>
              <hr className="w-[20%] border-t-2 border-gray-200 mt-2 mb-20" />
              <br />
              <p>
                Navigating multiple apps and tools to plan a trip is cumbersome.
              </p>
              <p>
                Keeping track of the many moving parts of a trip is challenging.
              </p>
              <p>The excitement of airport experiences has faded.</p>
              <p>
                The overwhelming nature of travel planning can be exhausting.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#36363663]">process</h2>
            <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <Image src="/ms-fc.png" alt="" width={1000} height={2000} />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-52 w-[80%] grid grid-cols-2 text-left items-start justify-center">
          <div>
            <div>
              <h2 className="text-[#36363663]">HMW</h2>
              <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
              <br />

              <p className="font-bold text-lg">
                How might we create a more seamless <br />
                and satisfying air travel experience?
              </p>
            </div>
            <div className="mt-32">
              <h2 className="text-[#36363663]">Target Users</h2>
              <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
              <br />

              <p className="font-bold">Primary:</p>
              <p>Travel enthusiasts</p>
              <p>People who would like to record their flights</p>
              <p className="mt-10 font-bold">Secondary:</p>
              <p>People who takes flights</p>
              <p>People who needs to track flight info</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#36363663]">Approach</h2>
            <hr className="w-[15%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />

            <p>
              A mobile app is the most effective solution, leveraging the
              ubiquity of smartphones to provide timely notifications.
            </p>
            <br />
            <p className="mt-10">
              I conducted three participatory design workshops to uncover user
              needs and preferences regarding essential flight information and
              commonly used features.
            </p>
            <br />
            <p className="mt-24 mb-5 font-bold uppercase">Key Points:</p>
            <p>Streamlined booking process</p>
            <p>Timely notifications</p>
            <p>Automatic data synchronization</p>
            <p>Unified travel platform</p>
            <p>Engaging user experience</p>
            <p>Travel social network</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-60 w-[80%] grid grid-cols-2 text-left items-start justify-center">
          <div>
            <h2 className="text-[#36363663]">Wireframe</h2>
            <hr className="w-[30%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <p>
              The wireframe outlined a clear and intuitive user journey, <br />
              encompassing login, flight search, social features, and <br />
              personalized rewards.
            </p>
            <br />
            <h2 className="text-[#36363663] mt-40">Figma!</h2>
            <hr className="w-[30%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <Image src="/ms-fig.png" alt="" width={500} height={1000} />
          </div>
          <div>
            <h2 className="text-[#36363663]">Concept</h2>
            <hr className="w-[30%] border-t-2 border-gray-200 mt-2 mb-20" />
            <br />
            <Image src="/ms-wf.png" alt="" width={1000} height={2000} />
          </div>
        </div>
      </div>

      <div className="mt-40 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div>
          <h1>login page / signup page</h1>
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/ms-log.png')" }}
      ></div>

      <div className="mt-20 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div>
          <h1>flight detail</h1>
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/ms-fd.png')" }}
      ></div>

      <div className="mt-20 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div>
          <h1>adding a flight</h1>
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/ms-addf.png')" }}
      ></div>

      <div className="mt-20 bg-white bg-cover bg-center flex items-center justify-center py-40">
        <div>
          <h1>sharing / personal profile</h1>
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/ms-prof.png')" }}
      ></div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MileScape;
