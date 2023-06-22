/** @format */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import FeaturedProjects from './FeaturedProjects';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Morrent - A Car Rental Application',
    bgColor: 'bg-projectRentBg',
    technologies: [{ name: 'ReactJS, Next.js' }, { name: 'Nodejs, MongoDB' }],
    detailLink: '#',
    images: [
      { src: '/rentLap.png', alt: 'Laptop Image' },
      { src: '/rentMobile.svg', alt: 'Mobile Image' },
    ],
    imageSide: 'right',
  },
  {
    title: 'Jobit - A Job Finding Application',
    bgColor: 'bg-projectJobBg',
    technologies: [{ name: 'ReactJS, Next.js' }, { name: 'Nodejs, MongoDB' }],
    detailLink: '#',
    images: [
      { src: '/jobit.png', alt: 'Laptop Image' },
      { src: '/jobitmob.svg', alt: 'Mobile Image' },
    ],
    imageSide: 'left',
  },
  {
    title: 'Trip Guide - A Trip Booking Platform',
    bgColor: 'bg-projectTrip',
    technologies: [{ name: 'ReactJS, Next.js' }, { name: 'Nodejs, MongoDB' }],
    detailLink: '#',
    images: [
      { src: '/triplaptop.png', alt: 'Laptop Image' },
      { src: '/tripmob.svg', alt: 'Mobile Image' },
    ],
    imageSide: 'right',
  },
];

const FeaturedProjectsList = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="font-mono mt-14">Featured Projects</p>
      </div>

      <div className="m-5">
        {projects.map((project, index) => (
          <FeaturedProjects key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center my-5 ">
        <Button className="bg-buttonBg rounded-full">
          <Link href="/case-studies">
            <span className="text-12">See More Case Studies</span>
          </Link>
          <ArrowRight className="w-5" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjectsList;
