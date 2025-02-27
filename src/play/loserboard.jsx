import React from 'react';

import './play.css';
import { notifHandler } from "./notif.js";

export function Loserboard() {
    const [currentLosers, setLosers] = React.useState([]);

    React.useEffect(() => {
        notifHandler.startWithHandlerFunc(updateHandler);
    }, []);

    function updateHandler(losers) {
        const newLosers = [...currentLosers, ...losers]
        setLosers(newLosers);
    }

    function generateLoserList() {
        const compiled = currentLosers.map((loser, index) => (
            <li key={index} className="losingPlayer">{loser} lost to the snail</li>
        ));

        return compiled;
    }

    return (
        <div className="updateBox">
            <ul>
                {generateLoserList()}
            </ul>
        </div>
    );
}