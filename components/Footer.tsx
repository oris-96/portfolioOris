/** @format */

'use client';

import { Linkedin, Globe, Github } from 'lucide-react';
import Image from 'next/image';

import { Button } from './ui/button';

const Footer = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" p-10 md:flex lg:flex justify-between items-center rounded-lg w-100 m-10 h-56 bg-cover bg-no-repeat bg-center bg-[url('/collaborate.png')]">
          <div>
            <p className="font-mono text-25 mb-8 ">
              Have a project idea to <br /> collaborate on ?
            </p>
            <Button className=" rounded-3xl bg-white text-10 ">
              Contact Us
            </Button>
          </div>

          <div className="hidden md:flex lg:flex">
            <Image src={'/threesd.png'} width={256} height={128} alt="comp" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 my-10 ">
        <Linkedin className=" text-iconBg" />
        <Globe className=" text-iconBg" />
        <Github className=" text-iconBg" />
      </div>
    </>
  );
};

export default Footer;
