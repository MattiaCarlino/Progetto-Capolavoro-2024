import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;