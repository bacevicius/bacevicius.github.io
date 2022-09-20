import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

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
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 curson-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn></FaLinkedinIn>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 curson-pointer hover:scale-110 ease-in duration-300">
              <FaGithub></FaGithub>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 curson-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail></AiOutlineMail>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 curson-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill></BsFillPersonLinesFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
