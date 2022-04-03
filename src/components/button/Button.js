import React from 'react'
import Icon from '../Icon'

const Button = ({type, title, onClick, className, svg}) => {
  return (
    <button type={type? type: 'button'} onClick={onClick} className={`btn ${className}`} >
      <span>{title}</span>
      {svg? <Icon svg={svg} /> : ''}
    </button>
  )
}

export default Button