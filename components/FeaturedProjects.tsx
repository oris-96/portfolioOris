/** @format */
import React, { ReactElement } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ITechnology {
  name: string;
}

interface IProjectImage {
  src: string;
  alt: string;
}

interface IProps {
  title: string;
  technologies: ITechnology[];
  detailLink: string;
  bgColor: string;
  images: IProjectImage[];
  imageSide: string;
}

const FeaturedProjects = ({
  title,
  technologies,
  detailLink,
  bgColor,
  images,
  imageSide = 'left' || 'right',
}: IProps): ReactElement => {
  return (
    <div className=" px-10 justify-center lg:flex mt-4 lg:justify-center md:flex md:justify-center  ">
      <div
        className={`flex ${bgColor} min-w-fit px lg:min-w-full justify-between rounded-lg py-9  ${
          imageSide === 'left'
            ? 'lg:flex-row-reverse md:flex-row-reverse  md:gap-20  lg:gap-20 pl-14 md:pl-0 lg:pl-0 lg:pr-20 '
            : 'pl-14'
        }`}
      >
        <div className="">
          <p className=" leading-7 font-mono text-lg mb-4 text-white ">
            {title}
          </p>

          <div className="flex gap-4 mx-auto px-5">
            {technologies.map((tech, index) => (
              <Button key={index} className="bg-projectBtnBg ">
                <span className="text-12"> {tech.name}</span>
              </Button>
            ))}
          </div>

          <Link href={detailLink}>
            <div className="flex mt-8 items-center gap-5">
              <p className=" text-12 text-white ">See Detail Project</p>
              <Image
                className="w-7"
                src={'/arrow.svg'}
                width={256}
                height={128}
                alt="arrow"
              />
            </div>
          </Link>
        </div>
        <div
          className={` ${
            imageSide === 'right'
              ? 'md:flex lg:flex md:flex-row lg:flex-row md:pr-0'
              : 'hidden'
          } md:flex-row lg:flex-row md:flex lg:flex hidden  `}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              className={`w-${index === 0 ? '72' : '16'} `}
              src={img.src}
              width={index === 0 ? 200 : 50}
              height={100}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
