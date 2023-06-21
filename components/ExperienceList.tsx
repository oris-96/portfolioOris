/** @format */

import React from 'react';
import Experience from './Experience';

type Experience = {
  companyName: string;
  iconSrc: string;
  role: string;
  duration: number;
};

const experience: Experience[] = [
  {
    companyName: 'Nordstrom',
    iconSrc: '/nord.webp',
    role: 'Software Engineer',
    duration: 3,
  },
  {
    companyName: 'Cyberfleet',
    iconSrc: '/cyberfleet.png',
    role: 'Fullstack developer',
    duration: 3,
  },
  {
    companyName: 'Austin Peay State University',
    iconSrc: '/apsu.png',
    role: 'Graduate Teaching Assistant',
    duration: 2,
  },
];

const ExperienceList = () => {
  return (
    <div>
      {experience.map((exp) => (
        <Experience
          key={exp.companyName}
          companyName={exp.companyName}
          iconSrc={exp.iconSrc}
          role={exp.role}
          duration={exp.duration}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
