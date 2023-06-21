/** @format */

import Card from './Card';
import ExperienceList from './ExperienceList';
import WorkExperienceCard from './WorkExperienceCard';

interface CardProps {
  margin: string;
  iconBgColor: string;
  cardBgColor: string;
  cardHeader: string;
  cardHeaderColor: string;
  paragrahColor: string;
  cardParagraph: string;
  iconSrc: string;
}

const cards: CardProps[] = [
  {
    margin: 'mt-5',
    iconBgColor: 'bg-buttonBg',
    cardBgColor: 'bg-heroBg',
    cardHeader: 'Web Design',
    cardHeaderColor: 'text-headerColor',
    paragrahColor: 'text-heroTextColor',
    cardParagraph:
      'Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.',
    iconSrc: '/fly.svg',
  },
  {
    margin: 'mt-5',
    iconBgColor: 'bg-white',
    cardBgColor: 'bg-buttonBg',
    cardHeader: 'Front-End Dev',
    cardHeaderColor: 'text-white',
    paragrahColor: 'text-white',
    cardParagraph:
      'Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.',
    iconSrc: '/cursor.svg',
  },
  {
    margin: 'mt-5',
    iconBgColor: 'bg-buttonBg',
    cardBgColor: 'bg-heroBg',
    cardHeader: 'Back-End Dev',
    cardHeaderColor: 'text-headerColor',
    paragrahColor: 'text-heroTextColor',
    cardParagraph:
      'Building the server-side components and functionality of a website using  Node.js.',
    iconSrc: '/backend.svg',
  },
  {
    margin: 'mt-5',
    iconBgColor: 'bg-buttonBg',
    cardBgColor: 'bg-heroBg',
    cardHeader: 'Web Optimization',
    cardHeaderColor: 'text-headerColor',
    paragrahColor: 'text-heroTextColor',
    cardParagraph:
      'Improving website performance by optimizing page load times, and minimizing resource usage',
    iconSrc: '/optimizer.svg',
  },
];

const Services = () => {
  return (
    <div className="flex justify-start flex-col items-center">
      <section className="flex justify-center  mt-10">
        <p className="font-mono">What Service Do I Provide</p>
      </section>
      <div className="flex flex-wrap justify-center gap-10 m-5 mt-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            margin={card.margin}
            iconBgColor={card.iconBgColor}
            cardBgColor={card.cardBgColor}
            cardHeader={card.cardHeader}
            cardHeaderColor={card.cardHeaderColor}
            paragrahColor={card.paragrahColor}
            cardParagraph={card.cardParagraph}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>
      <div className="flex flex-col lg:ml-20 lg:flex-row gap-5 justify-center mt-10 ">
        <div>
          <WorkExperienceCard />
        </div>

        <div>
          <ExperienceList />
        </div>
      </div>
    </div>
  );
};
export default Services;
