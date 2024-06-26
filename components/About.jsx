import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full m:h-screen p-2 flex items-center pt-28">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a graduate of Bachelors of Science in Computer Science and
            Engineering from TU Delft and currently a System Administrator at Oxylabs.
            Previously I was a Lead Full Stack Developer at TU Delft X -
            the Sports and Culture center of my alma mater.
          </p>
          <p className="py-2 text-gray-600">
            I am open and communicative. I
            enjoy learning new technologies and do not hesitate to ask for help
            if I encounter a problem beyond my scope of expertise.
          </p>

          <p className="py-2 text-gray-600">
            I am currently interested in the fields of Cloud Computing, DevOps
            and Site Reliability Engineering.
          </p>

          {/* <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Here you can see some cool projects that I worked on.
            </p>
          </Link> */}
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <Image
            className="rounded-xl"
            src="/../assets/face.png"
            alt="/"
            height="616"
            width="561"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
