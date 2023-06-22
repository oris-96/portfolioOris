/** @format */

import React from 'react';
import CaseStudiesCard from './CaseStudiesCard';

interface ICaseStudy {
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  title: string;
  description: string;
  link?: string;
}

const caseStudies: ICaseStudy[] = [
  {
    imageSrc: '/rentLap.png',
    imageAlt: 'laptop',
    bgColor: 'bg-caseBg',
    title: 'Morrent',
    description: 'Car Rent Application',
    link: '/case-studies/details-morent',
  },
  {
    imageSrc: '/jobitcase.png',
    imageAlt: 'laptop',
    bgColor: 'bg-jobitBg',
    title: 'Jobit',
    description: 'Job Finding Application',
    link: '/case-studies/details-jobit',
  },
  {
    imageSrc: '/triplaptop.png',
    imageAlt: 'laptop',
    bgColor: 'bg-tripBg',
    title: 'Trip Guide',
    description: 'Booking Platform',
  },
];

const CaseStudiesList = () => {
  return (
    <div className=" flex flex-wrap gap-5 justify-center md:justify-center lg:justify-center md:flex md:flex-1 md:flex-wrap lg:flex lg:flex-1 lg:flex-wrap  md:gap-5 lg:gap-5 ">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudiesCard key={index} caseStudy={caseStudy} />
      ))}
    </div>
  );
};

export default CaseStudiesList;
