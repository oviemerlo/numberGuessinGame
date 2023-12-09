import React, { useState } from 'react';


function GameInput({handleSubmitRendered, gameStatus}) {
  const [guessInput, setGuessInput] = useState('');
  
  function handleSubmit(event){
    event.preventDefault();
    handleSubmitRendered(guessInput);
   
    setGuessInput('');
  }

 
  return (<div>
            <form 
            className="guess-input-wrapper"
            onSubmit={handleSubmit}>
              <label htmlFor="guess-input">Enter guess:</label>
              <input 
              id="guess-input" 
              type="text"
              disabled={gameStatus !== "running"}
              minLength={5}
              maxLength={5}
              title="allowed values is 5"
              pattern='[a-zA-Z]{5}'
              value={guessInput}
              onChange={(e)=>{
                const enteredText = e.target.value.toUpperCase();
                setGuessInput(enteredText)}} />
            </form>

          </div>);
}

export default GameInput;
