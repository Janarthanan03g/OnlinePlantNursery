import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">Online Plant Nursery</div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cart" className="nav-link">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
        </nav>
    </div>
  )
}
