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
        <Lottie animationData={animationData} />
      </section>
      <section className="hidden lg:flex ">right</section>
    </div>
  );
};

export default Hero;
