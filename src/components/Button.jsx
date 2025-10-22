import React from 'react'
import './Button.css'

function Button({ text, onClick, className = '', ...props }) {
  return (
    <button 
      className={`custom-button ${className}`} 
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
