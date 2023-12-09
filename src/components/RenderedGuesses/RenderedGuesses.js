import React from 'react';
import GuessUI from '../GuessUI/GuessUI';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import { range } from '../../utils'

function RenderedGuesses({ initialGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessUI key={num} value={initialGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default RenderedGuesses;
