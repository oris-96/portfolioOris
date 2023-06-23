/** @format */

import Image from 'next/image';
import React from 'react';

const UserFlowCard = () => {
  return (
    <div className="grid grid-cols-4 gap-16 relative ">
      <div className="w-28  h-13">
        <div className="flex gap-1  items-center ">
          <div className="  p-8 rounded-lg  bg-userFlowBg ">
            <p className="text-center text-12 text-buttonBg ">Home Screen</p>
          </div>
          <Image
            className="w-3 h-3"
            src="/right.png"
            width={256}
            height={128}
            alt="right"
          />
        </div>
        <div className=" flex flex-col gap-20 justify-center items-center ">
          <Image
            className="w-3 mt-4 h-3"
            src="/down.png"
            width={256}
            height={128}
            alt="down"
          />
          <Image
            className="w-3 h-3"
            src="/right.png"
            width={256}
            height={128}
            alt="right"
          />
        </div>
      </div>
      <div className="w-28  h-13">
        <div className="flex gap-2  items-center ">
          <div className="  p-8 rounded-lg  bg-userFlowBg ">
            <p className="text-center text-12 text-buttonBg ">User Query</p>
          </div>
          <Image
            className="w-3 h-3"
            src="/right.png"
            width={256}
            height={128}
            alt="right"
          />
        </div>
        <div className=" flex flex-col gap-10 justify-center items-center ">
          <Image
            className="w-3 mt-4 h-3"
            src="/up.png"
            width={256}
            height={128}
            alt="up"
          />
          <div className="flex gap-2 flex-row-reverse items-center">
            <div className="flex  items-center ">
              <div className="  p-8 rounded-lg  bg-buttonBg ">
                <p className="text-center text-8 text-white ">Profile Page</p>
              </div>
            </div>
            <Image
              className="w-3 h-3"
              src="/right.png"
              width={256}
              height={128}
              alt="right"
            />
          </div>
        </div>
      </div>
      <div className="w-28  h-13">
        <div className="flex gap-2 items-center ">
          <div className="  p-8 rounded-lg  bg-buttonBg ">
            <p className="text-center text-10 text-white ">Backend Response</p>
          </div>
          <Image
            className="w-3 h-3"
            src="/right.png"
            width={256}
            height={128}
            alt="right"
          />
        </div>
        <div className=" flex flex-col gap-10 justify-center items-center ">
          <Image
            className="w-3 mt-4 h-3"
            src="/up.png"
            width={256}
            height={128}
            alt="up"
          />
          <div className="flex gap-2 mt-3 flex-row-reverse items-center">
            <div className="flex  items-center ">
              <div className="  p-8 rounded-lg  bg-userFlowBg ">
                <p className="text-center text-12 text-buttonBg ">Complete</p>
              </div>
            </div>
            <Image
              className="w-3 h-3"
              src="/left.png"
              width={256}
              height={128}
              alt="left"
            />
          </div>
        </div>
      </div>
      <div className="w-28  h-13">
        <div className="flex gap-1  items-center ">
          <div className="  p-8 rounded-lg  bg-userFlowBg ">
            <p className="text-center text-8 text-buttonBg ">
              Display Data Results
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-10 justify-center items-center ">
          <Image
            className="w-3 mt-4 h-3"
            src="/down.png"
            width={256}
            height={128}
            alt="down"
          />

          <div className="flex gap-2 -mt-3 flex-row-reverse items-center">
            <div className="flex  items-center ">
              <div className="  p-8 rounded-lg  bg-buttonBg ">
                <p className="text-center text-12 text-white ">Rent Car</p>
              </div>
            </div>
            <Image
              className="w-3 h-3"
              src="/left.png"
              width={256}
              height={128}
              alt="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlowCard;
