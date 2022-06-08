import './App.scss';
import { useState } from 'react'

import Button from './Components/Button/Button.component';

const App = () => {
  const word = 'apple'
  const [guessed, setGussed] = useState(new Set())
  const [wrong, setWrong] = useState(0)

  const maxWrong = 5;

  const guessedWord = () => {
    return word.split("").map(letter => guessed.has(letter) ? letter : "_")
  }

  const handleAddLetter = (e) => {
    setGussed(prev => new Set(prev.add(e.target.value)))
    if (!word.includes(e.target.value)) {
      setWrong(currWrong => currWrong + 1)
    }
  }

  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map(letter =>
        <Button
          key={letter}
          text={letter}
          disabled={guessed.has(letter)}
          handleAddLetter={handleAddLetter}
        />)
  }


  const handleRestart = () => {
    setWrong(0)
    setGussed(new Set())
  }

  return (
    <>
      {wrong < maxWrong ?
        <>
          {wrong}
          {guessedWord()}
          {generateButtons()}
          {guessedWord().join("") == word && 'Winner'}
        </> :
        <>
          <h3>Game Over</h3>
          <button onClick={handleRestart}>Start Again</button>
        </>
      }
    </>
  );
}

export default App;
