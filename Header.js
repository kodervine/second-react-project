import React from "react"

export default function Header() {
    return (
        <header>
            <nav className = "navbar">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className = "list-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}