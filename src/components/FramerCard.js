import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { default as cardImage1, default as cardImage2, default as cardImage3, default as cardImage4 } from '../assets/images/cardimage2.jpg';
import WaviyText from '../components/SectionTitle';


export default function FramerCard() {
  // States
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '200px',
    },
  };

  // Card images
  const cardImage = [
    cardImage1,
    cardImage2,
    cardImage3,
    cardImage4,
    
  ];

  // Controller

  // Handle card click
  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      // If the same card is clicked again, collapse it
      setExpandedIndex(null);
    } else {
      // Expand the clicked card
      setExpandedIndex(index);
    }
  };

  return (
    <section className="py-16 pb-5rem  d-none d-sm-block">
      <div className="container">
        <div className="row">
          <WaviyText className="col-md-12" inputString="FEATURED PRODUCTS" subtitle='Check out the latest work'></WaviyText>

          <div className=" mt-12 d-flex justify-content-center align-items-center gap-3 ">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`card cursor-pointer  ${
                  index === expandedIndex ? 'expanded' : ''
                }  `}
                variants={cardVariants}
                animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url(${cardImage[index]})`,
                  height: '18.75rem',
                  width: '22%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', 
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



