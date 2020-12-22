import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">
                Github App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">Info</a>
                </li>
            </ul>
        </nav>
    )
}
