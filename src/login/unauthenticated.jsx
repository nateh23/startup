import React from 'react';

import './login.css';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(){
    const [userName,setUser] = React.useState();
    const [password,setPass] = React.useState("");

    async function loginUser(){ //sum storage stuff
        localStorage.setItem("userName",userName)

    }

    async function createUser(){
        localStorage.setItem('userName', userName);
    }

    return(<>
        <div className="text-center">
                <form method="get" action="play.html">
                    <div>
                        <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
                    </div>
                    <div>
                        <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    </div>

                    <Button variant = "primary" onClick = {() => loginUser()} disabled={!userName || !password}>Sign In</Button>
                    <Button variant = "primary" onClick = {() => createUser()} disabled={!userName || !password}>New Account</Button>
                </form>
        </div>
    </>)
}
