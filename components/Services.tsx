/** @format */

import Card from './Card';

const Services = () => {
  return (
    <div>
      Services
      <div className="flex relative flex-1 flex-wrap gap-4 m-7">
        <Card
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

        <div className="relative">
          <div className="absolute top-10">
            <Card
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
          </div>
        </div>

        <Card
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

        <div className="relative">
          <div className="absolute top-10">
            <Card
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
        </div>
      </div>
    </div>
  );
};

export default Services;
