import React from 'react';

import './play.css';
import {NotifHandler} from "./notif.js"

export function Loserboard() {
    React.useEffect(() => {
        console.log("what")
    },[])

    const losers = ["John", "Bobby", "Maurice"];
    const test = losers.map((loser, index) => (
        <li key={index} className="losingPlayer">{loser} lost to the snail</li>
    ));

    return (
        <div className="updateBox">
            <ul>
                {test}
            </ul>
        </div>
    )
}