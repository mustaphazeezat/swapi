import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-wrapper'>
        <Link to="/" data-testid="star-wars-logo"><img src="/logo.png" alt="Star wars logo" /></Link>
    </header>
  )
}

export default Header