import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import Link from "@mui/material/Link"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__wrapper">
          <Link variant="body2" onClick={() => {}}>
            LogoLink
          </Link>
          <div className="App-header__wrapper-text">
            <p className="App-header__site-name">Kinotopka</p>
          </div>
        </div>
      </header>
      <main className="App-main"></main>
    </div>
  )
}

export default App
