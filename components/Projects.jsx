import React, { useState } from "react";

import { FaScrewdriver } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import Link from "next/link";

import dashboard from "../public/assets/projects/dashboard.png";
import gpt from "../public/assets/projects/gpt.png";
import special from "../public/assets/projects/special.png";
import creative from "../public/assets/projects/creative.png";
import fylo from "../public/assets/projects/fylo.png";

const Projects = () => {
  const [allProjects, setAllProjects] = useState(false);

  return (
    <div className="w-full py-24" id="projects">
      <div className="container mx-auto p-4">
        <div className="">
          <p className=" font-bold uppercase py-2 text-lg text-[#5651ef] flex items-center ">
            My Projects
            <span className="ml-3">
              <FaScrewdriver size={20} />
            </span>
          </p>
          <h2>What I`ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <ProjectItem
              title="Admin Dashbord"
              projectWith="React JS"
              backgroundImg={dashboard}
              projectUrl="/projects/dashboard"
            />
            <ProjectItem
              title="Gpt-3 Landing Page"
              projectWith="React JS"
              backgroundImg={gpt}
              projectUrl="/projects/gpt"
            />
            <ProjectItem
              title="Landing Page"
              projectWith="Pure JS"
              backgroundImg={special}
              projectUrl="/projects/special"
            />
            <ProjectItem
              title="Landing Page"
              projectWith="Pure Html & Css"
              backgroundImg={creative}
              projectUrl="/projects/creative"
            />
            {allProjects && (
              <ProjectItem
                title="Landing Page"
                projectWith="Pure Html & Css"
                backgroundImg={fylo}
                projectUrl="/projects/fylo"
              />
            )}
          </div>
          <div
            className="py-2 text-gray-600 underline cursor-pointer w-fit mx-auto mt-8"
            onClick={() => setAllProjects((prev) => !prev)}
          >
            {allProjects ? "Hidden Projects" : "Show More Projects"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
