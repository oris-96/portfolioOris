/** @format */

import Image from 'next/image';
import React from 'react';

const UserFlowCard = ({ imgUrl }) => {
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
