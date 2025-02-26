import React from 'react';

import './play.css';

export function Loserboard() {
    return (
        <div className="updateBox">
            <ul>
                <li className="losingPlayer">John lost to the snail</li>
                <li className="losingPlayer">Bobby lost to the snail</li>
                <li className="losingPlayer">Maurice lost to the snail</li>
            </ul>
        </div>
    )
}