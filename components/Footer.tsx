/** @format */

'use client';

import { Linkedin, Globe, Github } from 'lucide-react';
import Image from 'next/image';

import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div data-aos="fade-up" className="flex justify-center ">
        <div className=" p-10 md:flex lg:flex justify-between items-center rounded-lg w-100 m-10 min-h-full bg-cover bg-no-repeat bg-center bg-[url('/collaborate.png')]">
          <div>
            <p className="font-mono text-25 mb-8 ">
              Have a project idea to <br /> collaborate on ?
            </p>
            <Link href="/contact">
              <Button className=" rounded-3xl bg-white text-10 ">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex lg:flex">
            <Image src={'/threesd.png'} width={256} height={128} alt="comp" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 my-10 ">
        <a href="https://www.linkedin.com/in/iabdulkareem/" target="_blank">
          <Linkedin className=" text-iconBg" />
        </a>
        <Globe className=" text-iconBg" />
        <a href="https://github.com/oris-96" target="_blank">
          <Github className=" text-iconBg" />
        </a>
      </div>
    </>
  );
};

export default Footer;
