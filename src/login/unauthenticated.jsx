import React from 'react';

import './login.css';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(params){
    const [userName,setUser] = React.useState(params.userName);
    const [password,setPass] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        await loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        await loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            params.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    return(<>
        <div className="text-center">
                <form method="get" action="play.html">
                    <div>
                        <input className='form-control' type='text' value={userName} onChange={(e) => setUser(e.target.value)} placeholder='your@email.com' />
                    </div>
                    <div>
                        <input className='form-control' type='password' onChange={(e) => setPass(e.target.value)} placeholder='password' />
                    </div>

                    <Button variant = "primary" onClick = {() => loginUser()} disabled={!userName || !password}>Sign In</Button>
                    <Button variant = "primary" onClick = {() => createUser()} disabled={!userName || !password}>New Account</Button>
                </form>

                <>{displayError}</>
        </div>
    </>)
}
