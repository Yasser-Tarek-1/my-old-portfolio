import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.svg";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

import { useRouter } from "next/router";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navBar, setNavBar] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }, [router]);

  const handelNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div
      className={
        navBar
          ? "fixed left-0 top-0 w-full h-20 shadow-xl z-[5000] bg-[#ecf0f3]"
          : "absolute left-0 top-0 w-full h-20 z-[5000] bg-transparent"
      }
    >
      <div className="container mx-auto p-4 flex items-center justify-between w-full h-full px-2">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="100px"
            height="40px"
            className={
              navBar
                ? "fill-current cursor-pointer"
                : "fill-current cursor-pointer logo"
            }
          />
        </Link>
        <div>
          <div className="md:hidden w-[100px] flex items-center justify-center">
            <AiOutlineMenu
              size={25}
              cursor="pointer"
              onClick={handelNav}
              className={navBar ? "text-[#1f2937]" : "text-white/75"}
            />
          </div>
          <ul
            className={
              navBar
                ? "hidden_with_globals md:flex font-semibold text-[#1f2937]"
                : "hidden_with_globals md:flex font-semibold text-white/75"
            }
          >
            <li className="mx-4 hover:text-[#5651e5] duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 hover:text-[#5651e5] duration-200">
              <Link href="/#about">About</Link>
            </li>
            <li className="mx-4 hover:text-[#5651e5] duration-200">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="mx-4 hover:text-[#5651e5] duration-200">
              <Link href="/#projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          showNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40 z-40"
            : ""
        }
      >
        <div
          className={`${
            showNav
              ? "fixed left-0 top-0 bg-[#ecf0f3] w-[75%]  h-screen sm:w-[60%] p-4 ease-linear duration-500 z-50"
              : "fixed left-[-100%] top-0  duration-500 h-screen ease-linear"
          }`}
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src={logo} alt="logo" width="50px" height="40px" />
              <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer">
                <AiOutlineClose size={25} onClick={handelNav} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="py-4 w-[85%]">
                Let`s build something legendary together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase font-semibold">
                <li
                  className="py-4 text-sm underline text-[#5651e5]"
                  onClick={() => setShowNav(false)}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="py-4 text-sm underline text-[#5651e5]"
                  onClick={() => setShowNav(false)}
                >
                  <Link href="/#about">About</Link>
                </li>
                <li
                  className="py-4 text-sm underline text-[#5651e5]"
                  onClick={() => setShowNav(false)}
                >
                  <Link href="/#skills">Skills</Link>
                </li>
                <li
                  className="py-4 text-sm underline text-[#5651e5]"
                  onClick={() => setShowNav(false)}
                >
                  <Link href="/#projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-24 w-[75%]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let`s Connect
              </p>
              <div className="flex items-center pt-6">
                <Link
                  className="w-full"
                  href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
                  target="_blank"
                >
                  <a target="_blank">
                    <div className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200 mx-[5px]">
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
                    <div className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200 mx-[5px]">
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
                    <div className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200 mx-[5px]">
                      <AiOutlineMail />
                    </div>
                  </a>
                </Link>
                <Link className="w-full" href="tel:01016736238" target="_blank">
                  <a target="_blank">
                    <div className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer sm:hover:scale-105 ease-in duration-200 mx-[5px]">
                      <BsPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
