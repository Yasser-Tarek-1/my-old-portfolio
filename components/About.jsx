import React from "react";
import Link from "next/link";
import Iamge from "next/image";

import img_1 from "../public/assets/IMG-1.jpg";

const About = () => {
  return (
    <div className="w-full py-24" id="about">
      <div className="container mx-auto px-4 w-full h-full">
        <div className="lg:grid grid-cols-5">
          <div className="col-span-3 lg:mr-40">
            <p className=" font-bold uppercase py-2 text-lg text-[#5651e5] ">
              About
            </p>
            <h2>Who I Am</h2>
            <p className="py-2 text-gray-600">
              My passion for programming started from a young age and I decided
              to start in it, I began to delve into it and then decided to learn
              the web field.
            </p>
            <p className="py-2 text-gray-600">
              I started by learning basic languages like HTML, CSS and JS and
              then developed and designed many small applications using them,
              now I have evolved in them and work with the React JS, and I built
              a lot of projects with it.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer font-semibold">
              <Link
                href="https://drive.google.com/file/d/18mkg1-oKRXldoRppVuMo36ubec3COclo/view"
                target="_blank"
              >
                <a target="_blank">Show My CV</a>
              </Link>
            </p>
          </div>
          <div className="col-span-2  w-full h-auto lg:p-4 bg-[#ecf0f3] shadow-xl shadow-gray-400 rounded-xl flex lg:hover:scale-105 ease-in transition mt-6 lg:mt-0">
            <Iamge src={img_1} alt="/" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
