import React from 'react';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <header>
                <div>
                    <h1 className="fancyTitle">Rock Paper Snail</h1>
                    <span className="playerName text-muted">Username</span>
                </div>
                <nav className="navbar">
                    <menu className="container-fluid">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="play.html">Play</a>
                        </li>
                    </menu>
                </nav>
                <hr />
            </header>

            <footer>
                <a className = "fancyTitle text-reset fixed-bottom" href="https://github.com/nateh23/startup">GitHub</a>
            </footer>
        </div>
    );
}