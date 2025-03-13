import React from 'react';

import './login.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './AuthState';
import { Button } from 'react-bootstrap';

export function Login({userName, authState, onAuthChange}) {
    function loginTest(){
        console.log("click");
        fetch('/api/test').then((response) => response.json())
        .then((data) => console.log(data.test));
        // const url = '/api/test';
        // console.log('Fetching from URL:', url);
        // fetch(url)
        //     .then((response) => console.log(response))
        //     .catch((error) => console.error('Error:', error));
    }

    return (
        <main>
            <Button onClick={loginTest}>
                YEAH
            </Button>
            <div>
                <img className="pedastle loginVisual" alt="test" src="./basicRender.png" />
            </div>

            {authState == AuthState.Authenticated && (
                <Authenticated
                    userName = {userName}
                    onLogout = {() => {
                        onAuthChange("",AuthState.Unauthenticated)
                    }}
                ></Authenticated>
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