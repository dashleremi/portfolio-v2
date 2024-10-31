import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center text-center mt-60 font-secondary"
    >
      <div>
        <h1 className="text-white text-[40px] font-extralight mb-20">
          Selected Work/Projects
        </h1>
      </div>

      <main className="grid grid-cols-1 mb-5 w-[50%]">
        <section className="bg-[var(--color-gray-9)] p-6 rounded-[var(--radius-3)] shadow-lg transition-transform duration-300 hover:scale-95">
          <h2 className="font-secondary uppercase text-xl font-bold mt-4 mb-5">
            J&apos;s International School
          </h2>
          <img
            src="/js-intl-en.png"
            alt="J's International School"
            width="700"
            height="700"
            className="mx-auto rounded-[var(--radius-2)]"
          />
          <p className="text-[var(--color-gray-1)] mt-4">
            A comprehensive school management dashboard for an international
            school in Tokyo, Japan, offering tailored access for admins,
            teachers, students, and parents.
          </p>
        </section>

        <section className="bg-[var(--color-gray-9)] p-6 rounded-[var(--radius-3)] shadow-lg transition-transform duration-300 hover:scale-95">
          <h2 className="font-secondary uppercase text-xl font-bold mt-4 mb-5">
            Sugar Sugar Hawaii
          </h2>
          <img
            src="/ssh.png"
            alt="Sugar Sugar Hawaii"
            width="700"
            height="700"
            className="mx-auto rounded-[var(--radius-2)]"
          />
          <p className="text-[var(--color-gray-1)] mt-4">
            An online boutique offering trendy jewelry, accessories, and fashion
            items with a focus on vibrant, island-inspired designs.
          </p>
        </section>

        <section className="bg-[var(--color-gray-9)] p-6 rounded-[var(--radius-3)] shadow-lg transition-transform duration-300 hover:scale-95">
          <h2 className="font-secondary uppercase text-xl font-bold mt-4">
            InvisiBG
          </h2>
          <img
            src="/homepage.png"
            alt="InvisiBG"
            width="700"
            height="700"
            className="mx-auto rounded-[var(--radius-2)]"
          />
          <p className="text-[var(--color-gray-1)] mt-4">
            AI-powered background removal that allows users to seamlessly
            isolate subjects from images with high quality and precision.
          </p>
        </section>

        <section className="bg-[var(--color-gray-9)] p-6 rounded-[var(--radius-3)] shadow-lg transition-transform duration-300 hover:scale-95">
          <h2 className="font-secondary uppercase text-xl font-bold mt-4">
            Google Gemini - Clone
          </h2>
          <img
            src="/ggc-hp.png"
            alt="Google Gemini - Clone"
            width="700"
            height="700"
            className="mx-auto rounded-[var(--radius-2)]"
          />
          <p className="text-[var(--color-gray-1)] mt-4">
            Google Gemini Clone that replicates the core functionality of
            interacting with a large language model.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Projects;
