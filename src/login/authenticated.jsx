import React from 'react';

import './login.css';
import Button from 'react-bootstrap/Button';

export function Authenticated(params){
    function signOut() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
        .catch(() => { //PANICCCC
        })
        .finally(() => {
            params.onLogout();
        });
    }

    return(<>
        <div className="text-center">
                <form method="get" action="play.html">

                    <Button variant = "primary" onClick = {() => signOut()}>Sign Out</Button>
                </form>
        </div>
    </>)
}
