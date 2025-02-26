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
        
    </>)
}
