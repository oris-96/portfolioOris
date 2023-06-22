/** @format */

import Image from 'next/image';
import React from 'react';

interface ICaseStudy {
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  title: string;
  description: string;
}

interface CaseStudiesCardProps {
  caseStudy: ICaseStudy;
}

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({
  caseStudy: { imageSrc, imageAlt, bgColor, title, description },
}) => {
  return (
    <div className="mb-5">
      <div
        className={`flex justify-center items-end w-20 rounded-lg h-52 ${bgColor}`}
      >
        <Image
          className="w-72"
          src={imageSrc}
          width={256}
          height={128}
          alt={imageAlt}
        />
      </div>
      <div className="p-5">
        <p className="text-12 font-mono text-caseTextColor ">{title}</p>
        <p className="text-heroTextColor text-10 ">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
