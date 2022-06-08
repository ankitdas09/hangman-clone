import React from 'react'
import Button from '../Button/Button.component'
import './ButtonContainer.styles.scss'
const ButtonContainer = ({ handleAddLetter, guessed }) => {
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
    return (
        <div className="btn-container">
            {generateButtons()}
        </div>
    )
}

export default ButtonContainer