import React from 'react';
import Cardc from './Cardc';
import Fade from 'react-reveal/Fade';

function CardSet() {
  // Sample card data
  const cards = [
    {
      title: 'The Ultimate JavaScript Course',
      description: 'The JavaScript course for everyone! Master JavaScript with projects, challenges, and theory.',
      isAvailable: true,
      
    },
    {
      title: 'Advanced React Masterclass',
      description: 'Take your React skills to the next level with this advanced course.',
      isAvailable: false,
    },
    // Add more card data here
  ];

  return (
    <div id="courses">
    <div className="p-4">
      <div className="text-center">
        <Fade bottom>
          <h2 className="text-2xl font-bold mb-4">Explore the Courses</h2>
        </Fade>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {cards.map((card, index) => (
          <Fade key={index} bottom>
            <Cardc {...card} />
          </Fade>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CardSet;
