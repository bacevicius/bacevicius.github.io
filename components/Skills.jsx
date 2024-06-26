import Image from "next/image";
import React from "react";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Python from "../public/assets/skills/python.png";
import Docker from "../public/assets/skills/docker.png";
import Java from "../public/assets/skills/java.png";
import Linux from "../public/assets/skills/linux.png";
import Vue from "../public/assets/skills/vue.png";
import Gitlab from "../public/assets/skills/gitlab.png";
import Ansible from "../public/assets/skills/ansible.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-28">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Linux} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Linux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Ansible} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Ansible</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Gitlab} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Gitlab CI/CD</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Docker} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Docker</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center select-none">
              <div className="m-auto">
                <Image src={Javascript} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Java} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Vue} width="" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center select-none">
                <h3>Vue</h3>
              </div>
            </div>
          </div>

        </div>
        <p className="my-24">... and whatever you need me to!</p>
      </div>
    </div>
  );
};

export default Skills;
