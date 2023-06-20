/** @format */

'use client';

import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql';
import { FaJava } from '@react-icons/all-files/fa/FaJava';
import { FaGitlab } from '@react-icons/all-files/fa/FaGitlab';
// import { SiExpress } from '@react-icons/all-files/si/SiExpress ';
import { SiFigma } from '@react-icons/all-files/si/SiFigma';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
// import { SiNextdotjs } from '@react-icons/all-files/si/SiNextdotjs';
import { SiSplunk } from '@react-icons/all-files/si/SiSplunk';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { SiGit } from '@react-icons/all-files/si/SiGit';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <section className="flex justify-center  mt-5">
        <p className="font-mono">My Skills</p>
      </section>
      <section className="flex flex-1 gap-4 flex-wrap p-7 space-y-3 justify-center items-center ">
        <div className="flex justify-center mt-3 items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-yellow-300 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiJavascript className=" text-xl " />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-react hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiReact className=" text-xl " />
          </div>
          <p>React</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-ts hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiTypescript className=" text-3xl " />
          </div>
          <p>TypeScript</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiPython className=" text-3xl " />
          </div>
          <p>Python</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-green-300 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaNodeJs className=" text-3xl " />
          </div>
          <p>Node</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiHtml5 className=" text-3xl " />
          </div>
          <p>HTML</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiCss3 className=" text-3xl " />
          </div>
          <p>CSS</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-blue-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiTailwindcss className=" text-3xl " />
          </div>
          <p>TailwindCss</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-mui hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiMaterialUi className=" text-3xl " />
          </div>
          <p>Material UI</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-green-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiMongodb className=" text-3xl " />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-purple-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiRedux className=" text-3xl " />
          </div>
          <p>Redux</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiPostgresql className=" text-3xl " />
          </div>
          <p>PostgreSQL</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaJava className=" text-3xl " />
          </div>
          <p>Java</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <Image
              src={'/express.svg'}
              className=" h-3 "
              width={256}
              height={128}
              alt="express"
            />
          </div>
          <p>Express</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiFigma className=" text-3xl " />
          </div>
          <p>Figma</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <Image
              src={'/next.svg'}
              className=" h-6 "
              width={256}
              height={128}
              alt="express"
            />
          </div>
          <p>Next</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiSplunk className=" text-3xl " />
          </div>
          <p>Splunk</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiGithub className=" text-3xl " />
          </div>
          <p>Github</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaGitlab className=" text-3xl " />
          </div>
          <p>Gitlab</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiGit className=" text-3xl " />
          </div>
          <p>Git</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
