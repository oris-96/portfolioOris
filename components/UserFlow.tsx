/** @format */

import Image from 'next/image';
import React from 'react';
import UserFlowCard from './UserFlowCard';

interface UserFlowProps {
  anchor: string;
  colorTxt: string;
  colorBg: string;
  gridOneText: string;
  gridTwoText: string;
  gridThreeText: string;
  gridFourText: string;
  gridFiveText: string;
  gridSixText: string;
  gridSevenText: string;
}

const UserFlow: React.FC<UserFlowProps> = ({
  anchor,
  colorTxt,
  colorBg,
  gridOneText,
  gridTwoText,
  gridThreeText,
  gridFourText,
  gridFiveText,
  gridSixText,
  gridSevenText,
}) => {
  return (
    <div className="p-8 mt-16">
      <div>
        <div className=" flex justify-center items-center rounded-lg bg-buttonBg w-8 h-8  ">
          <Image
            className="w-5"
            src={`${anchor}`}
            width={256}
            height={128}
            alt="anchor"
          />
        </div>
        <p className="my-5 font-mono ">User Flow</p>
        <p className="text-heroTextColor text-14 text-start ">
          In order to design the best experience, I’ve looked at the possible
          paths the user might take during their journey and examined what
          happens during each step. I usually create a map in Figma to get a
          detailed view of the User Flow.
        </p>
      </div>
      <div className="mt-8 pr-7 ">
        <UserFlowCard
          colorTxt={colorTxt}
          colorBg={colorBg}
          gridOneText={gridOneText}
          gridTwoText={gridTwoText}
          gridThreeText={gridThreeText}
          gridFourText={gridFourText}
          gridFiveText={gridFiveText}
          gridSixText={gridSixText}
          gridSevenText={gridSevenText}
        />
      </div>
    </div>
  );
};

export default UserFlow;
