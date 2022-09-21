import React from "react";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Letsgoooo
          </p>
          <h1 className="py-4 text-gray-700">
            Heyo, I'm <span className="text-[#5651e5]"> Vidas! </span>
          </h1>
          <h1 className="py-2 text-gray-700">A developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a 4th year Computer Science student and a part-time Full Stack
            Developer at TU Delft X, the Sports and Culture center of my alma
            mater.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/vidas-bacevi%C4%8Dius-335b3b194/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={40}></FaLinkedinIn>
              </div>
            </a>
            <a
              href="https://github.com/bacevicius/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={40}></FaGithub>
              </div>
            </a>
            <a
              href="mailto:vidasbace@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
