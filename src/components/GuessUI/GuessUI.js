// GuessUI.js
import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }){
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>{letter}</span>
  )

}

function GuessUI({ value, answer }) {
  const result = checkGuess(value, answer);
  
  return (
    <p className='guess'>
      {range(5).map((num, index) => (
        <Cell 
        key={index} 
        status={result? result[num].status : undefined} 
        letter={result? result[num].letter : undefined} />
      ))}
    </p>
  );
}

export default GuessUI;
