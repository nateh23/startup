import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leaderboard } from './leaderboard/leaderboard';

import { AuthState } from './login/AuthState';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [userName,changeUserName] = React.useState(localStorage.getItem("userName") || "")
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    React.useEffect(() => { 
        fetch('/api/colormind', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'default', // Example request body for Colormind
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                const colors = data.result;
                document.documentElement.style.setProperty('--topColor', `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`);
                document.documentElement.style.setProperty('--bottomColor', `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`);
            })
            .catch((error) => {
                console.error('Error fetching colors from Colormind:', error);
            });
    }, []);

    return (
        <BrowserRouter>
            <header>
                <div>
                    <h1 className="fancyTitle">Rock Paper Snail</h1>
                    <span className="playerName text-muted">{userName}</span>
                </div>
                <nav className="navbar">
                    <menu className="container-fluid">
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            {authState == AuthState.Authenticated && (
                                <NavLink className="nav-link text-muted" to="play">Play</NavLink>
                            )}
                        </li>

                        <li className="nav-item">
                            {authState == AuthState.Authenticated && (
                                <NavLink className="nav-link text-muted" to="leaderboard">Leaderboard</NavLink>
                            )}
                        </li>
                    </menu>
                </nav>
                <hr />
            </header>
            
            <main>
                <Routes>
                    <Route path='/' element={<Login
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        changeUserName(userName);
                        }}
                    />} exact />
                    <Route path='/play' element={<Play 
                        userName = {userName}
                    />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            
            <footer>
                <a className="fancyTitle text-reset fixed-bottom" href="https://github.com/nateh23/startup">Nathan Henderson GitHub</a>
            </footer>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}