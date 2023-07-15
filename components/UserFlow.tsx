/** @format */

import Image from 'next/image';
import React from 'react';
import UserFlowCard from './UserFlowCard';

interface UserFlowProps {
  anchor: string;
  imgUrl: string;
}

const UserFlow: React.FC<UserFlowProps> = ({ anchor, imgUrl }) => {
  return (
    <div className="p-8 mt-16 ">
      <div>
        <div className="md:flex md:justify-center lg:flex lg:justify-center">
          <div className="flex justify-start md:justify-center md:flex lg:flex lg:justify-center rounded-md w-8 h-8">
            <Image
              className="bg-buttonBg rounded-md"
              src={`${anchor}`}
              width={256}
              height={128}
              alt="anchor"
            />
          </div>
        </div>
        <p className="my-5 font-mono lg:text-center md:text-center  ">
          User Flow
        </p>
        <p className="text-heroTextColor text-14 text-start lg:text-center md:text-center ">
          In order to design the best experience, I’ve looked at the possible
          paths the user might take during their journey and examined what
          happens during each step. I usually create a map in Figma to get a
          detailed view of the User Flow.
        </p>
      </div>
      <div className="mt-8 pr-7 ">
        <UserFlowCard imgUrl={imgUrl} />
      </div>
    </div>
  );
};

export default UserFlow;
