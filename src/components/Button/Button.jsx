import React from 'react'

const Button = ({children, onClick, value = '', activeBtn = false}) => {
  return (
    <button type="button" onClick={onClick} value={value} style={{background: activeBtn ? 'green' : 'inherit'}}>{children}</button>
  )
}

export default Button