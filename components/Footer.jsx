import React from "react";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-[#ecf0f3] border-t-[1px] shadow-sm shadow-gray-400 h-[140px]">
      <div className="container mx-auto p-4 w-full h-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between pt-4 max-w-[330px] m-auto">
            <Link
              className="w-full"
              href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
              target="_blank"
            >
              <a target="_blank">
                <div className="mx-2 rounded-full p-4 md:p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
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
                <div className="mx-2 rounded-full p-4 md:p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
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
                <div className="mx-2 rounded-full p-4 md:p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
              </a>
            </Link>
            <Link className="w-full" href="tel:01016736238" target="_blank">
              <a target="_blank">
                <div className="mx-2 rounded-full p-4 md:p-5 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200">
                  <BsPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
          <div className="mt-4 text-gray-600 font-semibold text-sm md:text-base">
            Copyright © 2022, All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
