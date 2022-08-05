import React from "react"
import ReactDOM from "react-dom"

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Reasons() {
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

function Footer () {
    return (
        <footer>
                <small>© 2022 Anikwenze development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Reasons />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))