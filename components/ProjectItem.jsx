import React from "react";

import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ item }) => {
  return (
    <div className="relative flex items-center justify-center h-[200px] sm:h-[330px] md:h-[200px] lg:h-[260px] xl:h-[350px] w-full shadow-xl shadow-gray-400 rounded-xl group">
      <Image
        layout="fill"
        className="rounded-xl  object-cover h-full w-full"
        src={item.img}
        alt="/"
      />
      <div className="bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full absolute h-full rounded-xl flex items-center justify-center opacity-0 z-[-1] group-hover:opacity-100  group-hover:z-10 transition-all duration-300 ease-in">
        <div className="w-full">
          <h3 className="text-xl text-white tracking-wider text-center lg:text-2xl uppercase">
            {item.title}
          </h3>
          <p className="pb-3 pt-1 lg:pt-2 text-white font-semibold text-center text-base lg:text-lg capitalize">
            {item.by}
          </p>
          <Link href={`/projects/${item.title}`}>
            <p className="cursor-pointer py-1 px-4 lg:py-2 rounded-full text-gray-700 font-semibold lg:font-bold mx-auto bg-white w-fit text-base lg:text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
