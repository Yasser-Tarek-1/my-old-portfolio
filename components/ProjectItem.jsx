import React from "react";

import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, projectWith, backgroundImg, projectUrl }) => {
  return (
    <div className="bg-[#ecf0f3] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden_ele group-hover:block absolute ">
        <h3 className="text-xl text-white tracking-wider text-center lg:text-2xl">
          {title}
        </h3>
        <p className="pb-3 pt-1 lg:pt-2 text-white font-semibold text-center text-base lg:text-lg">
          {projectWith}
        </p>
        <Link href={projectUrl}>
          <p className="cursor-pointer py-1 px-4 lg:py-2 rounded-full text-gray-700 font-semibold lg:font-bold mx-auto bg-white w-fit text-base lg:text-lg">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
