/** @format */

import React from 'react';
import FeaturedProjects from './FeaturedProjects';

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
    </div>
  );
};

export default FeaturedProjectsList;
