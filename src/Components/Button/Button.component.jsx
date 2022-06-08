import React from 'react'
import './Button.styles.scss'
const Button = ({ text, disabled, handleAddLetter }) => {
    return (
        <button className='btn-letter' disabled={disabled} onClick={handleAddLetter} value={text}>
            {text}
        </button>
    )
}

export default Button