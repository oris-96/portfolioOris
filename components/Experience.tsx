/** @format */

import Image from 'next/image';

interface ExperienceProps {
  companyName: string;
  role: string;
  duration: number;
  iconSrc: string;
}

const Experience: React.FC<ExperienceProps> = ({
  companyName,
  role,
  duration,
  iconSrc,
}) => {
  return (
    <div className="lg:m-7 md:m-7 ml-24 hover:drop-shadow-xl flex md:justify-start lg:justify-start">
      <div className=" w-30 bg-white flex gap-5 items-center h-20 rounded-lg cursor-pointer ">
        <div className="p-4">
          <Image
            src={`${iconSrc}`}
            className=" w-10 "
            width={256}
            height={128}
            alt="nordstrom"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono">{companyName}</p>
          <p className=" text-12 ">
            {role} . {duration} years experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
