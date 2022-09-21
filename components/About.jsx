import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full m:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a graduate of Bachelors of Science in Computer Science and
            Engineering from TU Delft and a Full Stack Developer at TU Delft X -
            the Sports and Culture center of my alma mater.
          </p>
          <p className="py-2 text-gray-600">
            As a software engineer, I strive to be open and communicative. I
            enjoy learning new technologies and do not hesitate to ask for help
            if I encounter a problem beyond my scope of expertise.
          </p>

          <p className="py-2 text-gray-600">
            I am currently interested in the fields of Cloud Computing, DevOps
            and SRE.
          </p>

          {/* <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Here you can see some cool projects that I worked on.
            </p>
          </Link> */}
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/face.png"
            alt="/"
            height="616px"
            width="561px"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
