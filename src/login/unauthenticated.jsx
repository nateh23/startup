import React from 'react';

import './login.css';
import Button from 'react-bootstrap/Button';

export function Unauthenticated(params){
    const [userName,setUser] = React.useState(params.userName);
    const [password,setPass] = React.useState("");

    async function loginUser(){ //sum storage stuff
        localStorage.setItem("userName",userName)
        params.onLogin(userName);
    }

    async function createUser(){
        localStorage.setItem('userName', userName);
        params.onLogin(userName);
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
        </div>
    </>)
}
