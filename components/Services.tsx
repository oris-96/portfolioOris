/** @format */

import Card from './Card';
import WorkExperienceCard from './WorkExperienceCard';

const Services = () => {
  return (
    <div className="flex justify-start flex-col items-center">
      <section className="flex justify-center  mt-5">
        <p className="font-mono">What Service Do I Provide</p>
      </section>
      <div className="flex flex-wrap justify-center gap-10 m-5">
        <Card
          margin={'mt-5'}
          iconBgColor={'bg-buttonBg'}
          cardBgColor={'bg-heroBg'}
          cardHeader={'Web Design'}
          cardHeaderColor={'text-headerColor'}
          paragrahColor={'text-heroTextColor'}
          cardParagraph={
            'Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.'
          }
          iconSrc="/fly.svg"
        />

        <Card
          margin={'mt-5'}
          iconBgColor={'bg-white'}
          cardBgColor={'bg-buttonBg'}
          cardHeader={'Front-End Dev'}
          cardHeaderColor={'text-white'}
          paragrahColor={'text-white'}
          cardParagraph={
            'Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.'
          }
          iconSrc="/cursor.svg"
        />

        <Card
          margin={'mt-5'}
          iconBgColor={'bg-buttonBg'}
          cardBgColor={'bg-heroBg'}
          cardHeader={'Back-End Dev'}
          cardHeaderColor={'text-headerColor'}
          paragrahColor={'text-heroTextColor'}
          cardParagraph={
            'Building the server-side components and functionality of a website using  Node.js.'
          }
          iconSrc="/backend.svg"
        />

        <Card
          margin={'mt-5'}
          iconBgColor={'bg-buttonBg'}
          cardBgColor={'bg-heroBg'}
          cardHeader={'Web Optimization'}
          cardHeaderColor={'text-headerColor'}
          paragrahColor={'text-heroTextColor'}
          cardParagraph={
            'Improving website performance by optimizing page load times, and minimizing resource usage'
          }
          iconSrc="/optimizer.svg"
        />
      </div>
      <div className="flex justify-start">
        <WorkExperienceCard />
      </div>
    </div>
  );
};

export default Services;
