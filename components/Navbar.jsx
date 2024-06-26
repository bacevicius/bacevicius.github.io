import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    // Navbar shadow
    <div
      className={
        shadow ? "fixed w-full h-20 shadow-xl z-[9]" : "fixed w-full h-20 z-[9]"
      }
    >
      <div className="bg-gray-100 flex flex-row-reverse justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-lg uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-lg uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-lg uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Use state here to show/hide the background */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex flex-row-reverse w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-xl">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-xl">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-xl">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-xl">
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] text-xl">
                Let&apos;s Connect!
              </p>

              <div className="flex items-center my-4 w-full sm:w=[80]">
                <a
                  href="https://www.linkedin.com/in/vidas-bacevi%C4%8Dius-335b3b194/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaLinkedinIn size={40}></FaLinkedinIn>
                  </div>
                </a>
                <a
                  href="https://github.com/bacevicius/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaGithub size={40}></FaGithub>
                  </div>
                </a>
                <a
                  href="mailto:vidasbace@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                    <IoMail size={40}></IoMail>
                  </div>
                </a>
              </div>
              <div className="pt-40">
                <i className="text-italic text">Hey, I love your phone! :)</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
