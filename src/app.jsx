import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leaderboard } from './leaderboard/leaderboard';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <div>
                    <h1 className="fancyTitle">Rock Paper Snail</h1>
                    <span className="playerName text-muted">Username</span>
                </div>
                <nav className="navbar">
                    <menu className="container-fluid">
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="play">Play</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="leaderboard">Leaderboard</NavLink>
                        </li>
                    </menu>
                </nav>
                <hr />
            </header>
            
            <main>
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            
            <footer>
                <a className="fancyTitle text-reset fixed-bottom" href="https://github.com/nateh23/startup">GitHub</a>
            </footer>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}