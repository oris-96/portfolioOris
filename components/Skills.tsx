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
import { SiFigma } from '@react-icons/all-files/si/SiFigma';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiSplunk } from '@react-icons/all-files/si/SiSplunk';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { SiGit } from '@react-icons/all-files/si/SiGit';
import { SiDocker } from '@react-icons/all-files/si/SiDocker';
import { SiKubernetes } from '@react-icons/all-files/si/SiKubernetes';
import { SiAmazonaws } from '@react-icons/all-files/si/SiAmazonaws';
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
            <SiTypescript className=" text-xl " />
          </div>
          <p>TypeScript</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiPython className=" text-xl " />
          </div>
          <p>Python</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-green-300 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaNodeJs className=" text-xl " />
          </div>
          <p>Node</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiHtml5 className=" text-xl " />
          </div>
          <p>HTML</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiCss3 className=" text-xl " />
          </div>
          <p>CSS</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-blue-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiTailwindcss className=" text-xl " />
          </div>
          <p>TailwindCss</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-mui hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiMaterialUi className=" text-xl " />
          </div>
          <p>Material UI</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-green-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiMongodb className=" text-xl " />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-purple-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiRedux className=" text-xl " />
          </div>
          <p>Redux</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiPostgresql className=" text-xl " />
          </div>
          <p>PostgreSQL</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaJava className=" text-xl " />
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
            <SiFigma className=" text-xl " />
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
            <SiSplunk className=" text-xl " />
          </div>
          <p>Splunk</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiGithub className=" text-xl " />
          </div>
          <p>Github</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <FaGitlab className=" text-xl " />
          </div>
          <p>Gitlab</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiGit className=" text-xl " />
          </div>
          <p>Git</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiDocker className=" text-xl " />
          </div>
          <p>Docker</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiKubernetes className=" text-xl " />
          </div>
          <p>Kubernetes</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
            <SiAmazonaws className=" text-xl " />
          </div>
          <p>Aws</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
