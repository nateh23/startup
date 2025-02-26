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
            
            <Unauthenticated></Unauthenticated>
            {/* {authState == AuthState.Unauthenticated && (
                <Unauthenticated></Unauthenticated>//might
            )} */}

            <div>
                <i>&quot;Monkey see but Snail do&quot; ~Ghandi</i>
            </div>
        </main>
    );
}