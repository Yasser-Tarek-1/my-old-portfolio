import React from "react";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full text-center h-screen" id="home">
      <div className="flex items-center justify-center w-full h-full container mx-auto px-4">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let`s Build Something Together
          </p>
          <h1 className="pt-4 text-gray-700">
            Hello, I`m <span className="text-[#5651e5]">Yasser</span>
          </h1>
          <h1 className="pt-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[100%] sm:max-w-[80%] lg:max-w-[70%] mx-auto">
            I am a front end web developer specializing in building (and
            designing) websites. Currently I create a lot of projects and
            designs to gain more experience.
          </p>
          <div className="flex items-center justify-between pt-4 max-w-[330px] m-auto">
            <Link
              className="w-full"
              href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
              target="_blank"
            >
              <a target="_blank">
                <div className="rounded-full p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
              </a>
            </Link>
            <Link
              className="w-full"
              href="https://github.com/Yasser-Tarek-1"
              target="_blank"
            >
              <a target="_blank">
                <div className="rounded-full p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <FaGithub />
                </div>
              </a>
            </Link>
            <Link
              className="w-full"
              href="mailto:siryasser2020@gmail.com?
                  subject=subject text"
              target="_blank"
            >
              <a target="_blank">
                <div className="rounded-full p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
              </a>
            </Link>
            <Link className="w-full" href="tel:01016736238" target="_blank">
              <a target="_blank">
                <div className="rounded-full p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <BsPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
