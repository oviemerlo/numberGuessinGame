import React, { useState } from 'react';

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    
    setTentativeGuess('');
  }
  
  return (
    <form 
    className="guess-input-wrapper"
    onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      id="guess-input"       
      minLength={5}
      value={tentativeGuess}
      maxLength={5}
      onChange={(e)=>{setTentativeGuess(e.target.value.toUpperCase())}}
      pattern="[a-zA-Z]{5}"
      title="allows number of characters is 5" />
    </form>
  )
}

export default GuessInput;
