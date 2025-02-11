import React from 'react';

import './leaderboard.css';

export function Leaderboard() {
    return (
        <main>
            <table className="text-muted">
                <thead>
                    <th>
                        Place
                    </th>
                    <th>
                        User
                    </th>
                    <th>
                        Score
                    </th>
                </thead>

                <tr className="leaderBoardUser">
                    <td className = "leaderSlot">1st</td>
                    <td className = "leaderSlot">Not the Snail</td>
                    <td className = "leaderSlot">50000</td>
                </tr>

                <tr className="leaderBoardUser">
                    <td className = "leaderSlot">2nd</td>
                    <td className = "leaderSlot">Gary</td>
                    <td className = "leaderSlot">49999</td>
                </tr>
            </table>
        </main>
    );
}