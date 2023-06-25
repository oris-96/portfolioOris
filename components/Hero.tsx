/** @format */

'use client';

import Image from 'next/image';
import { Linkedin, Globe, Github } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../public/103094-contact.json';

import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" p-10 bg-heroBg font-mono lg:grid lg:grid-cols-2 ">
      <section className="flex flex-col justify-start">
        <span className=" tracking-widest text-buttonBg ">
          HI, I AM IBRAHIM
        </span>

        <p className="mt-7 text-67">
          Professional <br /> <span> Software Engineer </span>
          <br /> Based In USA
        </p>
        <p className="mt-7 leading-7 text-12 text-heroTextColor ">
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </p>

        <div className="flex items-center mt-7 space-x-6 ">
          <div>
            <Link href="/contact">
              <Button className=" bg-buttonBg text-14 text-white font-mono rounded-full w-32 ">
                Contact Us
              </Button>
            </Link>
          </div>
          <a href="https://www.linkedin.com/in/iabdulkareem/" target="_blank">
            <Linkedin className="w-4" />
          </a>
          <Globe className="w-4" />
          <a href="https://github.com/oris-96" target="_blank">
            <Github className="w-4" />
          </a>
          <Image
            className="object-contain w-28 "
            src={'/line-arrow.png'}
            width={256}
            height={128}
            alt="arrow"
          />
        </div>
      </section>
      <section className="hidden lg:flex ">
        <Lottie animationData={animationData} />
      </section>
    </div>
  );
};

export default Hero;
