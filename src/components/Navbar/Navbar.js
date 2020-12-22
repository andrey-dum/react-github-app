import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">
                Github App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
