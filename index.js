import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"

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

function Footer() {
    return (
        <footer className = "footer">
            <small>© 2022 Anikwenze development. All rights reserved.</small>
        </footer>
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