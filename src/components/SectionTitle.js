import React from 'react';
import '../styles/title.css';

export default function WaviyText({ inputString ,subtitle}) {
  // Split the input string into an array of characters
  const charactersArray = inputString.split('');
  
  return (
    <div className=" d-flex flex-column mx-auto">
      <div className='waviy d-flex align-items-center justify-content-center'>
      {charactersArray.map((letter, index) => (
        <React.Fragment key={index}>
          <h3 className='text-primary text-center'>
            <span style={{ '--i': index + 1 }} className='text-primary'>
              {letter}
            </span>
          </h3>
          {index < charactersArray.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
 </div>
 <p className="title-desc text-center">{subtitle}</p>

     
    </div>
   
  );
}
