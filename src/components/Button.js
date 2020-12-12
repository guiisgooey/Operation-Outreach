import React from 'react'
import './Button.css'
import { useHistory } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--primary2', 'btn--outline2']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  use 
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  let history = useHistory()

  function handleClick(){
    if(use == 'charities'){
      history.push('/ec1-final/charities')
      window.scroll(0,0)
    }
    else if(use == 'home'){
      history.push('/ec1-final/')
      window.scroll(0,0)
    }
    else if(use == 'mission'){
      history.push('/ec1-final/mission')
      window.scroll(0,0)
    }
  }

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick= {handleClick}
      >
        {children}
      </button>
  )
}

