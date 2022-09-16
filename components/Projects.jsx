import React, { useState } from "react";

import { FaScrewdriver } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import Link from "next/link";

import { projects } from "../projects";

const Projects = () => {
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
            {projects.map((item) => {
              return <ProjectItem item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
