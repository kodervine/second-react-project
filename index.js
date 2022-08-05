import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function Header() {
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

function Footer() {
    return (
        <footer className = "footer">
            <small>© 2022 Anikwenze development. All rights reserved.</small>
        </footer>
    )
}

function Main() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>I can build projects faster</li>
                <li>I will be more employable</li>
                <li>I will improve my programming skills</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))