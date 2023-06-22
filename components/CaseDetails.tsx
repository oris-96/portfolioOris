/** @format */

import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiFigma } from '@react-icons/all-files/si/SiFigma';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { SiGit } from '@react-icons/all-files/si/SiGit';

const CaseDetails = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="text-center mb-8 mt-10  ">
          <p className="text-buttonBg text-10 ">Web Dev Project</p>
          <p className="text-buttonBg font-mono text-25  ">
            MORENT - A Car Rental Website
          </p>
        </div>

        <div className="flex justify-center ">
          <Image
            src="/rentLap.png"
            width={256}
            height={128}
            className="w-72"
            alt="laptop"
          />
          <Image
            src="/rentcase.svg"
            width={256}
            height={128}
            className="w-16 mt-10 "
            alt="laptop"
          />
        </div>

        <div className=" p-10 flex gap-20 justify-center items-center ">
          <a href="#">
            <p className="text-10 text-buttonBg  ">
              Demo Site
              <span>
                <ArrowRight className=" inline w-3 " />
              </span>
            </p>
          </a>
          <a href="#">
            <p className="text-10 text-buttonBg ">
              Source Code
              <ArrowRight className=" inline w-3 " />
            </p>
          </a>
        </div>

        <div className="w-screen h-28 bg-casebannerBg flex items-center justify-around ">
          <div>
            <p className="font-mono text-10 ">MY ROLE</p>
            <p className="text-12 text-casebannerTextColor">
              Software Engineer
            </p>
          </div>
          <div>
            <p className="font-mono text-10 "> START DATE </p>
            <p className="text-12 text-casebannerTextColor ">24/01/2023</p>
          </div>
          <div>
            <p className="font-mono text-10 "> END DATE </p>
            <p className="text-12 text-casebannerTextColor ">02/03/2023</p>
          </div>
        </div>

        <div className="p-10 mb-11 mt-11">
          <div className="flex justify-start flex-col  ">
            <div className=" md:flex md:justify-center lg:flex lg:justify-center md:items-center lg:items-center md:flex-col lg:flex-col  ">
              <p className="text-8">TECHNOLOGIES USED</p>
              <p className="font-mono">Tech Stack</p>
            </div>

            <div className="flex flex-wrap gap-5 mt-4 md:justify-center md:flex lg:flex lg:justify-center  ">
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-yellow-300 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiJavascript className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-react hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiReact className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiHtml5 className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg  hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiCss3 className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-blue-400 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiTailwindcss className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white  hover:text-green-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiMongodb className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-buttonBg hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiFigma className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiGithub className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:text-green-300 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <FaNodeJs className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white  hover:text-orange-600 hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <SiGit className=" text-xl " />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <Image
                  src={'/next.svg'}
                  className=" h-6 "
                  width={256}
                  height={128}
                  alt="express"
                />
              </div>
              <div className=" flex justify-center h-12 w-12 bg-heroBg hover:animate-jump hover:bg-white hover:scale-125 hover:drop-shadow-xl  items-center rounded-3xl  ">
                <Image
                  src={'/express.svg'}
                  className=" h-3 "
                  width={256}
                  height={128}
                  alt="express"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen min-h-min p-10 pl-16 pr-16  bg-casebannerBg ">
          <div>
            <p className="text-12 text-start  text-casebannerTextColor">
              <p>
                Morent, a cutting-edge car rental application that was developed
                using the MERN stack. The app boasts a dynamic homepage that
                showcases featured vehicles, along with convenient pickup and
                drop-off location options and a comprehensive list of available
                cars.
              </p>
              <br />
              <p>
                My team and I also developed the car listing page which offers a
                search bar and various filtering options for users to find the
                perfect vehicle. Additionally, it has a car details page which
                provides users with detailed information along with suggestions
                for other recommended vehicles.
              </p>
              <br />
              <p>
                Car owners are also able to list their cars for rent through our
                Add Car page, while users can easily track their rented and
                rented-out cars through their profile page. Overall, we've
                created an intuitive and user-friendly MVP version of the
                platform that will make renting a car a breeze.
              </p>
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default CaseDetails;
