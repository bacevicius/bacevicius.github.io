import React from "react";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-7">Vidas Bacevičius </h1>
          <p className="py-1  max-w-[90%] m-auto">
            Full Stack Developer at TU Delft X
          </p>
          <p className="py-1 max-w-[90%] m-auto">
            BSc Computer Science & Engineering at TU Delft
          </p>
          <p className="pt-7 max-w-[90%] m-auto">Resume:</p>

          <div className="flex items-center justify-around  max-w-[200px] m-auto">
            <p className="mr-5">
              <a
                className="hover:border-b-4 "
                href="/../assets/CVstandard.pdf"
                target="_blank"
              >
                Standard
              </a>{" "}
              |{" "}
              <a
                className="hover:border-b-4 "
                href="/../assets/CVpretty.pdf"
                target="_blank"
              >
                Pretty
              </a>
            </p>
          </div>

          <div className="flex p-10 items-center justify-around max-w-[300px] m-auto py-7">
            <a
              href="https://www.linkedin.com/in/vidas-bacevi%C4%8Dius-335b3b194/"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" cursor-pointer hover:scale-110 ease-in duration-150">
                <FaLinkedinIn size={40}></FaLinkedinIn>
              </div>
            </a>
            <a
              href="https://github.com/bacevicius/"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" cursor-pointer hover:scale-110 ease-in duration-150">
                <FaGithub size={40}></FaGithub>
              </div>
            </a>
            <a
              href="mailto:vidasbace@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" cursor-pointer hover:scale-110 ease-in duration-150">
                <IoMail size={40}></IoMail>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
