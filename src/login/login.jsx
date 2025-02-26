import React from 'react';

import './login.css';

export function Login({userName, authState, onAuthChange}) {
    return (
        <main>
            <div>
                <img className="pedastle loginVisual" alt="test" src="./basicRender.png" />
            </div>

            <div className="text-center">
                <form method="get" action="play.html">
                    <div>
                        <input className="input-group mb-3" type="text" placeholder="address@gmail.com" />
                    </div>
                    <div>
                        <input className="input-group mb-3" type="password" placeholder="Password" />
                    </div>
                    <button className="btn btn-primary" type="submit">Sign In</button>
                    <button className="btn btn-secondary" type="submit">New Account</button>
                </form>
            </div>

            <div>
                <i>&quot;Monkey see but Snail do&quot; ~Ghandi</i>
            </div>
        </main>
    );
}