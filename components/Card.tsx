/** @format */

import Image from 'next/image';

interface CardProps {
  iconBgColor: string;
  cardHeader: string;
  cardHeaderColor: string;
  cardBgColor: string;
  cardParagraph: string;
  paragrahColor: string;
  iconSrc: string;
  margin?: string;
}

const Card: React.FC<CardProps> = ({
  iconBgColor,
  cardHeader,
  cardHeaderColor,
  cardBgColor,
  paragrahColor,
  cardParagraph,
  iconSrc,
  margin,
}) => {
  return (
    <div className={`flex drop-shadow-xl ${margin}`}>
      <div
        className={`min-h-18 flex flex-col  gap-14 rounded-lg w-13 ${cardBgColor}`}
      >
        <div
          className={`h-12 w-12 drop-shadow-xl flex ${iconBgColor} mt-5 ml-5 justify-center items-center rounded-lg`}
        >
          <Image
            className={` h-4`}
            src={`${iconSrc}`}
            width={256}
            height={128}
            alt="icon"
          />
        </div>

        <div className="p-4">
          <p className={`mb-3 font-mono ${cardHeaderColor}`}>{cardHeader}</p>

          <p className={`text-12 leading-6 ${paragrahColor}`}>
            {cardParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
