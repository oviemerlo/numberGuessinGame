import React from 'react';

function Guessresults({guesses}) {
  
  return (
    <div className="guess-results">
      {guesses.map((index, guess)=>{
        <p className="guess"  key={index}>{guess}</p>
      })}
      
    </div>
  )
}

export default Guessresults;
