import './App.scss';
import { useState } from 'react'
import ButtonContainer from './Components/ButtonContainer/ButtonContainer.component';

import { randomWord } from './helpers/words'

import img0 from './assets/0-min.jpg'
import img1 from './assets/1-min.jpg'
import img2 from './assets/2-min.jpg'
import img3 from './assets/3-min.jpg'
import img4 from './assets/4-min.jpg'
import img5 from './assets/5-min.jpg'
import img6 from './assets/6-min.jpg'

const App = () => {
  const [word, setWord] = useState(randomWord())
  const [guessed, setGussed] = useState(new Set())
  const [wrong, setWrong] = useState(0)

  const imgages = [img0, img1, img2, img3, img4, img5, img6]

  const maxWrong = 6;

  const guessedWord = () => {
    return word.split("").map(letter => guessed.has(letter) ? letter : "_")
  }

  const handleAddLetter = (e) => {
    setGussed(prev => new Set(prev.add(e.target.value)))
    if (!word.includes(e.target.value)) {
      setWrong(currWrong => currWrong + 1)
    }
  }

  const handleRestart = () => {
    setWord(randomWord())
    setWrong(0)
    setGussed(new Set())
  }

  return (
    <div className='GameBoard'>
      <h2 className='heading'>Hangman</h2>
      <div className="img-container">
        <img src={imgages[wrong]} />
      </div>
      {wrong < maxWrong ?
        <>
          <div className="word-container">
            {guessedWord().map(letter => <span style={{ display: 'inline-block', margin: '2rem 1rem', fontSize: '2rem', fontWeight: 'bold' }}>{letter}</span>)}
          </div>


          {guessedWord().join("") == word ?
            <>
              <h2 style={{ fontSize: '3rem', margin: '0' }}>Won!</h2>
              <button className='reset-game' onClick={handleRestart}>Play Again</button>
            </>
            :
            <ButtonContainer guessed={guessed} handleAddLetter={handleAddLetter} />

          }
        </>
        :
        <>
          <h2 className='game-over'>Game Over</h2>
          <button className='reset-game' onClick={handleRestart}>Start Again</button>
        </>
      }
    </div>
  );
}

export default App;
