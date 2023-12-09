import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput/GameInput';
import RenderedGuesses from '../RenderedGuesses/RenderedGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Happy({ initialGuesses }){
  return(
            <div class="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{initialGuesses.length} guesses</strong>.
              </p>
            </div>
  )
}

function Sad({ answer }){
  return(
    <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function GameOver({ gamestatus }){
  if (gamestatus === "You Won!"){
    return (
      <Happy initialGuesses={initialGuesses}/>
    )
  }else if(gamestatus === "You lost!" ){
    return (
      <Sad answer={answer}/>
    )
  }
}

function Game() {
  
 const [gameStatus, setGameStatus] = useState('running');
 
  
  const [initialGuesses, setInitialGuesses] = useState([]);
    function handleSubmitRendered(guessInput){
      const nextInitialGuesses = [...initialGuesses, guessInput]
      setInitialGuesses(nextInitialGuesses);
      
      
      if(guessInput.toUpperCase() === answer){
        setGameStatus("You Won!");
        
      }
      else if(guessInput.toUpperCase() !== answer & nextInitialGuesses.length == NUM_OF_GUESSES_ALLOWED){
        setGameStatus("You lost!"); 
        
      }
    
    
    
  }
  
  
  return (<>Put a game here!
            {gameStatus}
            <RenderedGuesses initialGuesses={initialGuesses} answer={answer} />

            {gameStatus !== 'running' && (
              <GameOver gamestatus={gameStatus} />
            )}
            
            <GameInput handleSubmitRendered={handleSubmitRendered} gameStatus={gameStatus}/>

          </>);
}

export default Game;
