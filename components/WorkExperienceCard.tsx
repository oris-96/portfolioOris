/** @format */

import Image from 'next/image';

const WorkExperienceCard = () => {
  return (
    <div className="m-7 relative ">
      <Image
        className="mt-5 absolute right-14 top-4 w-2"
        src={'/dot.svg'}
        width={256}
        height={128}
        alt="pacman"
      />
      <div className=" w-30 h-24 rounded-lg p-20 bg-headerColor ">
        <p className="text-white text-30 font-mono ">
          Work <br /> Experience
        </p>

        <p className="text-white mt-6 text-14 font-light ">
          Progress and milestones: A simple walkthrough of roles, projects, and
          achievements in my career.
        </p>

        <Image
          className="mt-8"
          src={'/line-decor.png'}
          width={256}
          height={128}
          alt="line"
        />
        <Image
          className="mt-5 w-5"
          src={'/pacman.svg'}
          width={256}
          height={128}
          alt="pacman"
        />
      </div>
    </div>
  );
};

export default WorkExperienceCard;
