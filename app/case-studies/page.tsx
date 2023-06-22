/** @format */

import { CaseStudiesList } from '..';

const page = () => {
  return (
    <div>
      <div className=" w-screen bg-heroBg h-80 flex justify-center ">
        <div className=" flex flex-col justify-center items-center bg-cover w-full h-56 mt-12 mx-4 lg:mx-8 rounded-lg bg-center bg-no-repeat bg-[url('/colorcase.png')]">
          <p className="text-white font-mono text-25 lg:text-30 ">
            Recent Case Studies
          </p>

          <p className=" text-center text-10 text-white font-light ">
            Diving Deep into Our Most Recent Projects: Insights, Challenges, and
            Triumphs
          </p>
        </div>
      </div>
      <div className="p-20">
        <CaseStudiesList />
      </div>
    </div>
  );
};

export default page;
