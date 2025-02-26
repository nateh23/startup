import React from 'react';

import './login.css';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './AuthState';

export function Login({userName, authState, onAuthChange}) {
    return (
        <main>
            <div>
                <img className="pedastle loginVisual" alt="test" src="./basicRender.png" />
            </div>

            {authState == AuthState.Authenticated && (
                <>welcome smile</>
            )}

            {authState == AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                ></Unauthenticated>//might
            )}

            <div>
                <i>&quot;Monkey see but Snail do&quot; ~Ghandi</i>
            </div>
        </main>
    );
}