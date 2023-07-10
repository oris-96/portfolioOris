/** @format */

import Image from 'next/image';
import React from 'react';

interface CardImageLink {
  imgUrl: string;
}

const UserFlowCard: React.FC<CardImageLink> = ({ imgUrl }) => {
  return (
    <div className="flex justify-center">
      <Image
        className=" w-30 md:w-full lg:w-full xl:w-[600px] "
        src={`${imgUrl}`}
        width={256}
        height={128}
        alt="right"
      />
    </div>
  );
};

export default UserFlowCard;
