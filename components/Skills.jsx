import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

import html from "../public/assets/skills/html.svg";
import css from "../public/assets/skills/css.svg";
import javascript from "../public/assets/skills/js.svg";
import sass from "../public/assets/skills/sass.svg";
import git from "../public/assets/skills/git.svg";
import react from "../public/assets/skills/react.svg";
import redux from "../public/assets/skills/redux.svg";
import material from "../public/assets/skills/material.svg";
import tailwindcss from "../public/assets/skills/tailwindcss.svg";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full py-24" id="skills">
      <div className="container mx-auto px-4 w-full h-full">
        <div className="w-full h-full">
          <p className=" font-bold uppercase py-2 text-lg text-[#5651e5] purple-500">
            Skills
          </p>
          <h2>What I Can Do</h2>
          <div className="mt-14 w-[85%] sm:w-[95%] mx-auto">
            <Slider {...settings}>
              <div className="p-6 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={html} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">html</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={css} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">css</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src={javascript}
                      alt="/"
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">javascript</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={sass} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">sass</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={git} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">git & githun</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={react} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">react</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={redux} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">redux toolkit</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={material} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">material-ui</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src={tailwindcss}
                      alt="/"
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">tailwindcss</h3>
                  </div>
                </div>
              </div>
              {/* <div className="p-6  rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <div className="flex items-center justify-between">
                  <div>
                    <Image src={firebase} alt="/" width="64px" height="64px" />
                  </div>
                  <div>
                    <h3 className="uppercase text-white">firebase</h3>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
